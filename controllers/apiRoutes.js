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

  var userHealthDetails = [];
  app.get("/api/hg/:id", function (req, res) {
    //userHealthDetails = [];
   
    var condition = "uid = " + req.params.id;
    var condition1 = "id = " + req.params.id;


    USER.selectOne(condition1, function (data) {
      userHealthDetails.push({ user: data });
    });

    USERMEDICATION.selectOne(condition, function (data) {
      userHealthDetails.push({ medication: data });
    });

    USERHEALTHPROVIDER.selectOne(condition, function (data) {
      userHealthDetails.push({ provider: data });
    });

    USERPROCEDURE.selectOne(condition, function (data) {
      userHealthDetails.push({ procedure: data });
    });


   // console.log(userHealthDetails);
    console.log(JSON.stringify(userHealthDetails));
    res.json(userHealthDetails);

  });

}
