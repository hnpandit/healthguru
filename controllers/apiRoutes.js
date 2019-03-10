// Import the model (user.js) to use its database functions.
var USER = require("../models/user.js");
var USERMEDICATION = require("../models/userMedication.js");
var USERHEALTHPROVIDER = require("../models/userHealthProvider.js");
var USERPROCEDURE = require("../models/userProcedure.js");



module.exports = function (app) {
  // Create all our routes and set up logic within those routes where required.
  app.get("/api/hg/users", function (req, res) {
    USER.selectAll(function (data) {
      var userObject = {
        users: data
      };
      console.log(userObject);
    });
  });


  //Brings the data from all the tables in databsae
  app.get("/api/hg/users/:id", function (req, res) {

    var condition = req.params.id;

    console.log("condition :: ", condition);
    USER.selectAllOneUser(condition, function (data) {
      var userObject = {
        users: data
      };
      console.log(userObject);
      res.json(userObject)
    });

  });


  /* 
  //This code needs to be looked into, It works fine sometimes, 
  //but has issues with teh arraylist populated and not cleared for next run

  var userHealthDetails = [];
  userHealthDetails.length = 0;

  app.get("/api/hg/:id", function (req, res) {

   
    var condition = "uid = " + req.params.id;
    var condition1 = "id = " + req.params.id;


    USER.selectOne(condition1, function (data) {
      console.log(JSON.stringify(data));
      userHealthDetails.push({ user: data });
    });

    USERMEDICATION.selectOne(condition, function (data) {
      console.log(JSON.stringify(data));
      userHealthDetails.push({ medication: data });
    });

    USERHEALTHPROVIDER.selectOne(condition, function (data) {
      console.log(JSON.stringify(data));
      userHealthDetails.push({ provider: data });
    });

    USERPROCEDURE.selectOne(condition, function (data) {
      console.log(JSON.stringify(data));
      userHealthDetails.push({ procedure: data });
    });


   // console.log(userHealthDetails);
    console.log(JSON.stringify(userHealthDetails));
    res.json(userHealthDetails);
   // userHealthDetails.length = 0;

  });

  */


  app.post("/api/user", function (req, res) {
    USER.insertOne([
      "firstname", "lastname", "zipcode", "birthyear", "gender", "email", "cell", "height", "weight"
    ], [
        req.body.firstname, req.body.lastname, req.body.zipcode, req.body.birthyear,
        req.body.gender, req.body.email, req.body.cell, req.body.height, req.body.weight
      ], function (result) {
        // Send back the ID of the new record
        res.json(result);
      });
  });

  app.post("/api/userMedication", function (req, res) {
    USERMEDICATION.insertOne([
      "uid", "medicationname", "dosage", "numrefill", "nextrefilldate", "healthcondition"
    ], [
        req.body.uid, req.body.medicationname, req.body.dosage, req.body.numrefill,
        req.body.nextrefilldate, req.body.healthcondition
      ], function (result) {
        // Send back the ID of the new record
        res.json(result);
      });
  });

  app.post("/api/userProvider", function (req, res) {
    USERHEALTHPROVIDER.insertOne([
      "uid", "hpid", "lastvisit", "nextvisit"
    ], [
        req.body.uid, req.body.hpid, req.body.lastvisit, req.body.nextvisit
      ], function (result) {
        // Send back the ID of the new record
        res.json(result);
      });
  });

  app.post("/api/userProcedure", function (req, res) {
    USERPROCEDURE.insertOne([
      "uid", "procedurename", "proceduredate"
    ], [
        req.body.uid, req.body.procedurename, req.body.proceduredate
      ], function (result) {
        // Send back the ID of the new record
        res.json(result);
      });
  });


}
