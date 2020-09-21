const AUTH_KEY = process.env.AUTH_KEY;
if (AUTH_KEY === undefined) {
  console.log("[Error] No AUTH KEY specified in the env variables");
  process.exit(1);
}

module.exports = {
  AUTH_KEY,
};
