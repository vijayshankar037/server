//For google Oauth
const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

//importing the config files
const keys = require("../config/keys");

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
