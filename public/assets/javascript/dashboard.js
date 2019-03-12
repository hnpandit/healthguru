function createTrainRecord()
{
  var rowRec = $("<tr>");
  var td = $("<td>");
  td.attr("scope", "col");
  td.text(counter);
  var tdTrainName = $("<td>");
  tdTrainName.text(train.trainName);
  var tdDestination =  $("<td>");
  tdDestination.text(train.destination);
  var tdFrequency =  $("<td>");
  tdFrequency.text(train.frequency);
  var tdNextArrival =  $("<td>");
  tdNextArrival.text(nextArrival);
  var tdMinutesAway = $("<td>");
  tdMinutesAway.text(minutesAway);

  rowRec.append(th, tdTrainName, tdDestination, tdFrequency, tdNextArrival, tdMinutesAway);
  $("tbody").append(rowRec);
  counter = counter + 1;
  nextArrival = "";
  minutesAway = 0;
  $("#txtTrainName").val('');
  $("#txtDestination").val('');
  $("#txtFirstTrainTime").val('');
  $("#txtFrequency").val('');
}

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

displayUserDetails(1);