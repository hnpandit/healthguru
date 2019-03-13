function formatDate(aDate)
{
  if (aDate === null)
    return "Missing or Overdue Date";
  else
    return moment(aDate).format('LL'); 
}

function dateDiff(aDate)
{
  if (aDate === null)
    return 0;
  else
  {
    var now = moment(new Date()); //todays date
    var end = moment(aDate); // passed in date
    var duration = moment.duration(now.diff(end));
    var days = duration.asDays();
    return days;
  }
}


var now = moment(new Date()); //todays date
var end = moment("2015-12-1"); // another date
var duration = moment.duration(now.diff(end));
var days = duration.asDays();

function displayUserDetails(id) 
{
  $.ajax({ url: `/api/hg/${id}`, method: "GET" })
    .then(function(userData) {
  
      var counter = 1;
      var aDate = null;
      // Let's welcome our user
      $("#username").text("Hello " + userData[0].user[0].firstname + ". Welcome to HealthGuru.");

      // Let's display user healthcare providers
      counter = 1;
      for (i=0; i<userData[2].provider.length; i++)
      {
        var rowRec = $("<tr>");
        
        var tdCounter = $("<td>");
        tdCounter.text(counter);

        //Call BettterDoctor go get
        var tdDoctor = $("<td>");
        tdDoctor.text(userData[2].provider[i].hpid);

        var tdLastVisit = $("<td>");
        tdLastVisit.text(formatDate(userData[2].provider[i].lastvisit));

        var tdNextVisit = $("<td>");
        if (userData[2].provider[i].nextvisit === null)
          tdNextVisit.css("background-color", "red")
        
        tdNextVisit.text(formatDate(userData[2].provider[i].nextvisit));

        rowRec.append(tdCounter, tdDoctor, tdLastVisit, tdNextVisit);
        $("#doctor").append(rowRec);
        counter++;
      }

      // Let's display user medications
      counter = 1;
      for (i=0; i<userData[1].medication.length; i++)
      {
        var rowRec = $("<tr>");
        
        var tdCounter = $("<td>");
        tdCounter.text(counter);

        var tdCondition = $("<td>");
        tdCondition.text(userData[1].medication[i].healthcondition);

        var tdMedName = $("<td>");
        tdMedName.text(userData[1].medication[i].medicationname);

        var tdDosage = $("<td>");
        tdDosage.text(userData[1].medication[i].dosage);

        var tdNumRefill = $("<td>");
        if (userData[1].medication[i].numrefill === 0)
          tdNumRefill.css("background-color", "red");
        tdNumRefill.text(userData[1].medication[i].numrefill);

        var tdNextRefillDt = $("<td>");
        tdNextRefillDt.text(formatDate(userData[1].medication[i].nextrefilldate));

        rowRec.append(tdCounter, tdCondition, tdMedName, tdDosage, tdNumRefill, tdNextRefillDt);
        $("#medication").append(rowRec);
        counter++;
      }

      // Let's display user procedures
      counter = 1;
      for (i=0; i<userData[3].procedure.length; i++)
      {
        var rowRec = $("<tr>");
        
        var tdCounter = $("<td>");
        tdCounter.text(counter);

        var tdProcName = $("<td>");
        tdProcName.text(userData[3].procedure[i].procedurename);

        var tdProcDate = $("<td>");

        if (dateDiff(userData[3].procedure[i].proceduredate) > 365)
            tdProcDate.css("background-color", "red")
        tdProcDate.text(formatDate(userData[3].procedure[i].proceduredate));

        rowRec.append(tdCounter, tdProcName, tdProcDate);
        $("#procedure").append(rowRec);
        counter++;
      }

    });
}

function getUserID()
{
  //make db call to get user id for email
  console.log("This is user email : " + sessionStorage.getItem("currentEmail"));
  var email = sessionStorage.getItem("currentEmail");

  $.ajax({ url: `/api/hg/email/${email}`, method: "GET" })
      .then(function(userData) 
  {
    console.log("This is user id : " + userData[0].id);
    displayUserDetails(userData[0].id);
  });
}

getUserID();