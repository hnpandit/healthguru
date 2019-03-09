

module.exports = function(app) {
  // Get all examples
app.get("/api/examples", function(req, res) {
  console.log("I am being called");
      res.send("Hello World");
});


}