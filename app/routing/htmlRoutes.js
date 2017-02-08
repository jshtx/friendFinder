// DEPENDENCIES
// -------------------------------
var path = require("path");

// ROUTING
//--------------------------------

module.exports = function(app) {

  //a get route to display the survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  //a use route that displays the home page
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
