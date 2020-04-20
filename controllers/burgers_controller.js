// 3. Inside the `burgers_controller.js` file, import the following:
//    * Express
var express = require("express");
var router = express.Router();
//    * `burger.js`
var burger = require("../models/burger.js");
// 4. Create the `router` for the app, and export the `router` at the end of your file.
router.get("/", function (req, res) {
    burger.all(function(data){
    res.render("index", {burgers: data});  
  });  
});  


//Add Post to add new Burger name
router.post("/api/burgers", function(req, res) {
    burgers.create(["burger", "devoured"], [req.body.burger, 0], (data)=>{    
      console.log(data)
      // Send back the ID of the new burger
      res.json({ id: data.insertId });
    });
  });

  //Add update to add a 1 to the MySQL table and move the burger to devoured.  
  router.put("/api/burgers/:devoured", function(req, res) {
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





module.exports = router;