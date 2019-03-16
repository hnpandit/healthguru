// Set up MySQL connection.
var mysql = require("mysql2");

// mysql://baygazrvuqacgzvf:cme6ma2sesnbquux@zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/c4tnx2q1ydskjzho

var connection = mysql.createConnection("mysql://baygazrvuqacgzvf:cme6ma2sesnbquux@zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/c4tnx2q1ydskjzho");
/*
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "healthguru_db"
});
*/

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
