var exphbs = require("express-handlebars");
var express = require("express");
var mysql = require("mysql");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

/*var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "#MySQLRoot1234",
  database: "burgers_db"
});
*/
var connection = require ("./config/connection.js");

/*connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
*/
// Serve index.handlebars to the root route.
/*app.get("/", function(req, res) {
    // Handlebars requires an object to be sent to the burger handlebars file.
    console.log("hello....burger.....  ;)");
    // Lucky for us, burger is an object!
  burger.all(function (data) {
    var devoured = {
      burger_data: data
    };
    console.log(devoured);
    res.render("index", devoured);
  });
});

// Show the user the individual burger and the form to update the burger.
app.get("/:id", function(req, res) {
  connection.query("SELECT * FROM burgers where id = ?", [req.params.id], function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    console.log(data);
    res.render("burger", data[0]);
  });
});

app.post("/api/burgers", function(req, res) {
  burger.create(["burger_name"], [req.body.burger], function(){
    burger.all(function (data) {
      var devoured = {
        burger_data: data
      };
      console.log(devoured);
      res.render("index", devoured);
   });
  })
 /* connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [req.body.burger_name, req.body.devoured], function(
    err,
    result
  ) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }

    // Send back the ID of the new burger
    
});

app.delete("/api/burgers/:id", function(req, res) {
  connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

  });
});
var burger = require("./models/burger.js");
app.get("/", function(req, res) {


  // 1. send the burger object from the animals array to the burger handlebars file.
  //res.render("views/index", devoured);
});

// Update a burger by an id and then redirect to the root route.
app.put("/api/burgers/:id", function(req, res) {
  connection.query(
    "UPDATE burgers SET burger_name = ?, devoured = ? WHERE id = ?",
    [req.body.burger_name, req.body.devoured, req.params.id],
    function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      else if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
*/


var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
