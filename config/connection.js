// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
 // connection = mysql.createConnection(process.env.JAWSDB_URL
 connection = mysql.createConnection({
    host: process.env.JAWSDB_URL,
    host:3306,   
    user: "l6t43owxy0hh259z",
    password: "xomkp374y7qfz0nt",
    database:"ar4ueju63ycxflzv"});
} else {
 connection = mysql.createConnection({
    host: "localhost",
    host:3306,
    user: "root",
    password: "#MySQLRoot1234",
    database:"burger_db"
  });
}

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
