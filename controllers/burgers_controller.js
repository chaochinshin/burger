var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");
router.get("/", function(req, res) {
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
router.get("/:id", function(req, res) {
connection.query("SELECT * FROM burgers where id = ?", [req.params.id], function(err, data) {
  if (err) {
    return res.status(500).end();
  }

  console.log(data);
  res.render("burger", data[0]);
});
});

router.post("/api/burgers", function(req, res) {
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
*/
  // Send back the ID of the new burger
  
});

router.delete("/api/burgers/:id", function(req, res) {
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
var burger = require("../models/burger.js");
router.get("/", function(req, res) {


// 1. send the burger object from the animals array to the burger handlebars file.
//res.render("views/index", devoured);
});

// Update a burger by an id and then redirect to the root route.
//router.put("/api/burgers/:id", function(req, res) {
/*connection.query(
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
    */
/*   burger.update("devoured", 1, function(){
    burger.all(function (data) {
      var devoured = {
        burger_data: data
      };
      console.log(devoured);
      res.render("index", devoured); 
   })
  });
});
*/
// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});
// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("../view/index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(["name", "devoured"], [req.body.name, req.body.devoured], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

   }
  );
});

// Export routes for server.js to use.
module.exports = router;
