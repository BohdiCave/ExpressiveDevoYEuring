// Imports - express.js, handlebars.js, API routes from the controller
const express = require("express");
const hbs = require("express-handlebars");
const routes = require("./controllers/foods_controller.js");

// An instance of express
const app = express();
const PORT = process.env.PORT || 8080;

// Handlebars templates
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// JSON parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
app.use(routes);

// Server listening
app.listen(PORT, function() {
    console.log("Server listening on http://localhost: " + PORT);
});
