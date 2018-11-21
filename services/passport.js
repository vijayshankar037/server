//For google Oauth
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

//requiring the mongoose library in passport.js and declared as CONSTANT
const mongoose = require("mongoose");

//importing the config files
const keys = require("../config/keys");

//Accessing the Mogoose Model
const User = mongoose.model("users");

//Creating the google oauth instace
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientScret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      //Saving the profile.id to MongoDb schema
      new User({ googleId: profile.id }).save();
    }
  )
);
