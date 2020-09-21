const CENAPI = require("./index.js");

const PORT = process.env.PORT;

if (PORT === undefined) {
  console.log("[Error] No port specified in the env variables");
  process.exit(1);
}

CENAPI.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
