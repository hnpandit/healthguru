// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var userprocedures = {
  selectAll: function(cb) {
    orm.selectAll("userprocedures", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("userprocedures", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("userprocedures", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = userprocedures;