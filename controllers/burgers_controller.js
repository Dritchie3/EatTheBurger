// 3. Inside the `burgers_controller.js` file, import the following:
//    * Express
var express = require("express");
var router = express.Router();
//    * `burger.js`
var burger = require("../models/burger.js");
// 4. Create the `router` for the app, and export the `router` at the end of your file.
router.get("/", function (req, res) {
  burger.all(function (data) {
    res.render("index", { burgers: data });
  });
});
//Add Post to add new Burger 
router.post("/api/burgers", function (req, res) {
  burger.create(["burger", "devoured"], [req.body.burger, 0], function (data) {
    console.log(data);
    res.json({ x: true });
    // Send back the ID of the new burger
    // res.json({ id: data.insertId });
  });
});

//Add update to add a 1 to the MySQL table and move the burger to devoured.  
router.put("/api/burgers/:id", function (req, res) {
  var delimiter = "id = " + req.params.id;
  burger.update({ "devoured": 1 }, delimiter, function (err, data) {
    console.log(err, "err");
    console.log(data, "data");
    res.json({});
  })
});

module.exports = router;