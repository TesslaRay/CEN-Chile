const express = require('express');
const app = express();

// ----- Import all routes here -----
const centralesRoute = require('./centrales/centrales_routes');
const infoRoute = require('./infotecnica/infotecnia_routes');
const techRoute = require('./tecnologia/tecnologia_routes');

// ----- Use all routes here -----
app.use(centralesRoute);
app.use(infoRoute);
app.use(techRoute)

// Export main router to use it in the main app.
module.exports = app;
