var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

var app = express();
var PORT = 3000;

app.get("/", function(req, res) {
  res.send("Welcome to the Eat-Da-Burger Page!");
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

