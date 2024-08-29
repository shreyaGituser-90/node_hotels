const mongoose = require("mongoose");

require("dotenv").config();
// Define the mongoDB connection URL
// const mongoURL = process.env.MONGODB_URL_LOCAL;    // connection url for local machine
// const mongoURL = "mongodb+srv://shreya:Mishtidoi143@cluster0.a1s4o.mongodb.net/";
const mongoURL = process.env.MONGODB_URL; // connection url for cloud, running online

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.error("MongoDB connection error", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Export the database connection
module.exports = db;
