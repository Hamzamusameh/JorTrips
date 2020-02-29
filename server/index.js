const dotenv = require("dotenv");
const result = dotenv.config();

if (result.error) {
  throw result.error;
}

require = require("esm")(module);
module.exports = require("./src/server.js");
