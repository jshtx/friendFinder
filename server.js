// DEPENDENCIES
// -------------------------------

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// EXPRESS INITIALIZATION
// --------------------------------

var app = express();

// define the initial port
var PORT =  process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTER
// -------------------------------

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
// ------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});