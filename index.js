//Requireing the express package module to the code
const express = require("express");
require("./services/passport");
//creating the express instance
const app = express();

//Passing the app constant to routes export module function
require("./routes/authRoutes")(app);

//Fetching the ENV variable values in express
const PORT = process.env.PORT || 5000;

//Starting the express server at port number 5000
app.listen(PORT);
