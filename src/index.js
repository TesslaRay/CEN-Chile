const express = require("express");
const expressConfig = require("./config/express");
const cors = require("cors")({
  origin: true,
});

// Create the express app and load all middlewares and configurations.
const CENAPI = express();

CENAPI.use(cors);
expressConfig(CENAPI);

module.exports = CENAPI;
