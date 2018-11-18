//Requireing the express package module to the code
const express = require("express");
//creating the express instance
const app = express();

//Route binding to express app instance
app.get("/", (req, res) => {
  res.send({ name: "Vijay" });
});

//Fetching the ENV variable values in express
const PORT = process.env.PORT || 5000;

//Starting the express server at port number 5000
app.listen(PORT);
