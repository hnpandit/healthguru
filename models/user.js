// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var user = {
    selectAll: function (cb) {
        orm.selectAll("users", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (cols, vals, cb) {
        orm.insertOne("users", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("users", objColVals, condition, function (res) {
            cb(res);
        });
    },
    deleteOne: function (objColVals, condition, cb) {
        orm.deleteOne("users", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = user;
