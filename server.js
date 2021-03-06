const express = require("express");
const stripe = require('stripe')('sk_test_51J3AspC6Y2vAkhwfVZyFmAM9RhYPupL4KMuaVcRFiHaYH4bVUq0M1fPTT2moUwRxn1BKMRSBEj6IfszX4aidRKwU00lBLalPNR');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and views
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/limoDB");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});