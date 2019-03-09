
var path = require("path");

module.exports = function(app) {
  
  app.get("/healthguru", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/healthguru/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    //res.sendFile(""../public/404.html");
  });

};