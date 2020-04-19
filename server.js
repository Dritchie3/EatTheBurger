// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var connection = require("./config/connection.js");
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

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});