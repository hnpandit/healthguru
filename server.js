var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
<<<<<<< Updated upstream
=======

// Set Handlebars.
////p.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");
>>>>>>> Stashed changes

require("./controllers/apiRoutes")(app);
require("./controllers/htmlRoutes")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
<<<<<<< Updated upstream
// Log (server-side) when our server has started
console.log("Server listening on: http://localhost:" + PORT);
=======
 // Log (server-side) when our server has started
 console.log("Server listening on: http://localhost:" + PORT);
>>>>>>> Stashed changes
});