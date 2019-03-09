
module.exports = function(app) {
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    //res.sendFile(""../public/404.html");
  });

};