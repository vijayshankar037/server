if (process.env.NODE_ENV === "production") {
  //Production ENV
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
