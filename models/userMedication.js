// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var usermedications = {
  selectAll: function(cb) {
    orm.selectAll("usermedications", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("usermedications", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("usermedications", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = usermedications;