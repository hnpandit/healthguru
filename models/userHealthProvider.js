// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var userhealthproviders = {
  selectAll: function(cb) {
    orm.selectAll("userhealthproviders", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("userhealthproviders", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("userhealthproviders", objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteOne: function(objColVals, condition, cb) {
    orm.deleteOne("userhealthproviders", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = userhealthproviders;