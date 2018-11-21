//requiring the passport package
const passport = require("passport");

//Exporting these routes as a function
module.exports = app => {
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
};
