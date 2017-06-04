
var express = require("express");
var router = express.Router();

var burger = require('../models/burger.js');

router.get("/", function(request, response) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    response.render("index", hbsObject);
  });
});

// Create all our routes and set up logic within those routes where required.
router.post("/", function(request, response) {
  burger.insertOne([
    "burger_name"
  ], [
    request.body.burger_name
  ], function() {
    response.redirect("/");
  });
});

router.put("/:id", function(request, response) {
  var condition = "id = " + request.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured : request.body.devoured 
  }, condition, function() {
    response.redirect("/");
  });
});


module.exports = router;