//Requiring the mongoose library
const mongoose = require("mongoose");

//Creating the instance of mongoose.Schema
const { Schema } = mongoose; //const Schema = mongoose.Schema

//Defining the schema for collection
const userSchema = new Schema({
  googleId: String
});

//Passing the schema to the user collection inside the mongoDb
mongoose.model("users", userSchema);
