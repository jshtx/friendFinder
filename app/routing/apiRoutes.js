var friendsData = require("../data/friends");



// ROUTING
// ----------------------------------------

module.exports = function(app) {

  //a get route to get the friends data in JSON form
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

 
  //a post route that handles the survey results and calculates compatibility
  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table

    // console.log(req.body.friendsData);
     
    // if (tableData.length < 5) {
       friendsData.push(req.body);
       res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
    console.log(friendsData)
  });

};