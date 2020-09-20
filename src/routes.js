const express = require('express');
const app = express();

// ----- Import all routes here -----
const centralesRoute = require('./centrales/centrales_routes');

// ----- Use all routes here -----
app.use(centralesRoute);

// Export main router to use it in the main app.
module.exports = app;
