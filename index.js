//Requireing the express package module to the code
const express = require("express");

//Requireing the mongoose packages to intract with MongoDb
const mongoose = require("mongoose");

//importing the config files
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

//Creating the connection with MongoDb Host at mlab.com
//mongoose.connect(keys.mongoURI);
mongoose.connect(
  keys.mongoURI,
  { user: keys.mongoDbUser, pass: keys.mongoDbUserPassword }
);

//creating the express instance
const app = express();

//Passing the app constant to routes export module function
require("./routes/authRoutes")(app);

//Fetching the ENV variable values in express
const PORT = process.env.PORT || 5000;

//Starting the express server at port number 5000
app.listen(PORT);
