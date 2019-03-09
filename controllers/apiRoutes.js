// Import the model (user.js) to use its database functions.
var USER = require("../models/user.js");
var USERMEDICATION = require("../models/userMedication.js");


module.exports = function (app) {
  // Get all examples
  /*   app.get("/api/examples", function (req, res) {
      console.log("I am being called");
      res.send("Hello World");
    }); */

  // Create all our routes and set up logic within those routes where required.
  app.get("/api/hg/users", function (req, res) {
    USER.selectAll(function (data) {
      var userObject = {
        users: data
      };
      console.log(userObject);
    });
  });

  app.get("/api/hg/users/:id", function (req, res) {

    var condition = "users.id = " + req.params.id;

    console.log("condition :: ", condition);
    USER.selectAllOneUser(condition,function (data) {
      var userObject = {
        users: data
      };
      console.log(userObject);
      res.json(userObject)
    });

  });

}