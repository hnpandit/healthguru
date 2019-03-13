
function displayUserDetails(id) 
{
  $.ajax({ url: `/api/hg/${id}`, method: "GET" })
    .then(function(userData) {
      
      var counter = 1;
      // Let's welcome our user
      $("#username").text("Hello " + userData[0].user[0].firstname + ". Welcome to HealthGuru.");

      // Let's display user healthcare providers
      counter = 1;
      for (i=0; i<userData[2].provider.length; i++)
      {
        var rowRec = $("<tr>");
        
        var tdCounter = $("<td>");
        tdCounter.text(counter);

        var tdDoctor = $("<td>");
        tdDoctor.text(userData[2].provider[i].hpid);

        var tdLastVisit = $("<td>");
        tdLastVisit.text(userData[2].provider[i].lastvisit);

        var tdNextVisit = $("<td>");
        if (userData[2].provider[i].nextvisit === null)
          tdNextVisit.css("background-color", "red");
        tdNextVisit.text(userData[2].provider[i].nextvisit);

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
        tdNextRefillDt.text(userData[1].medication[i].nextrefilldate);

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
        tdProcDate.text(userData[3].procedure[i].proceduredate);

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