const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body

const MenuItem = require("./models/MenuItem");

app.get("/", function (req, res) {
  res.send("Welcome to my hotel... How can I help you?");
});

// import the router files
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuitemRoutes");

// use the routers
app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("listening on port 3000");
});

// comment added for testing purpose
