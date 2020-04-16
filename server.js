// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

// Create an instance of the express app.
var app = express();
// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "!123Bobby123",
  database: "eat_burgerDB"
});

// Initiate MySQL Connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/", function (req, res) {
    connection.query("SELECT * FROM burgers;", function (err, data) {





//How do I find the data I need (explain the syntax to seperate the different columns.).  Why can I not use 2 res.render() statements








    console.log({ id: data});
    if (err) {
      return res.status(500).end();
    }
    res.render("index", { burgers: data});
    
  });  

  //     res.render("index", { devoured: data});
  
  });  
//Add Post to add new Burger name
app.post("/api/burgers", function(req, res) {
  connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burger], function(err, res) {
    if (err) {
      return res.status(500).end();
    }

    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

//Add update to add a 1 to the my sequel table and move the burger to devoured.



app.put("/api/burgers/:devoured", function(req, res) {
  connection.query(
    "UPDATE burgers SET devoured = 1 WHERE devoured = null ",
    [req.body.burgers, req.params.devoured],
    function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      res.status(200).end();

    }
  );
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});