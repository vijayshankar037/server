//Requireing the express package module to the code
const express = require("express");

//For google Oauth
const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

//importing the config files
const keys = require("./config/keys");

//creating the express instance
const app = express();

//Creating the google oauth instace
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientScret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);
      console.log("profile :", profile);
    }
  )
);
//Adding route to make a GET request to the google+

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// Adding the another route to handle the callback from google
app.get("/auth/google/callback", passport.authenticate("google"));
//Route binding to express app instance
// app.get("/", (req, res) => {
//   res.send({ name: "Vijay" });
// });

//Fetching the ENV variable values in express
const PORT = process.env.PORT || 5000;

//Starting the express server at port number 5000
app.listen(PORT);
