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


  
  //This code needs to be looked into, It works fine sometimes, 
  //but has issues with teh arraylist populated and not cleared for next run




  app.get("/api/hg/:id", function (req, res) {
    
    var userHealthDetails = [];
    userHealthDetails.length = 0; 
    var condition = "uid = " + req.params.id;
    var condition1 = "id = " + req.params.id;

    USER.selectOne(condition1, function (data) {
      userHealthDetails.push({user:data});
      USERMEDICATION.selectOne(condition, function (data) {
        userHealthDetails.push({medication:data});
        USERHEALTHPROVIDER.selectOne(condition, function (data) {
          userHealthDetails.push({provider:data});
          USERPROCEDURE.selectOne(condition, function (data) {
            userHealthDetails.push({procedure:data});
            console.log(JSON.stringify(userHealthDetails));
            res.json(userHealthDetails);
          });
        });
      });
    });

  });

  


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

  // UPDATES to DB Tables

  app.put("/api/users/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition :: ", condition);

    USER.updateOne({
      "firstname": "'"+req.body.firstname+"'",
      "lastname": "'"+req.body.lastname+"'",
      "zipcode": "'"+req.body.zipcode+"'",
      "birthyear": req.body.birthyear,
      "gender": "'"+req.body.gender+"'",
      "email": "'"+req.body.email+"'",
      "cell": "'"+req.body.cell+"'",
      "height": req.body.height,
      "weight": req.body.weight
    }, condition, function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  app.put("/api/userMedication/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition :: ", condition);

    USERMEDICATION.updateOne({
      "uid": req.body.uid, 
      "medicationname" : "'"+req.body.medicationname+"'", 
      "dosage" : "'"+req.body.dosage+"'",  
      "numrefill" : req.body.numrefill, 
      "nextrefilldate" : req.body.nextrefilldate,  
      "healthcondition" :  "'"+req.body.healthcondition+"'"
    }, condition, function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  app.put("/api/userProvider/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition :: ", condition);

    USERHEALTHPROVIDER.updateOne({
      "uid" : req.body.uid, 
      "hpid" : "'"+req.body.hpid+"'", 
      "lastvisit" : req.body.lastvisit, 
      "nextvisit" : req.body.nextvisit
    }, condition, function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  app.put("/api/userProcedure/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition :: ", condition);

    USERPROCEDURE.updateOne({
      "uid" : req.body.uid,
      "procedurename" : req.body.procedurename,  
      "proceduredate" : req.body.proceduredate      
    }, condition, function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

}
