const express = require('express');
const router = express.Router();

// Router middleware to handle centrales routes.
const {getCentralInfo} = require('./infotecnica_controllers');

// Router middleware to handle auth routes.
router.route('/centralesInfo').post(getCentralInfo);

// Export router to use it in the main app.
module.exports = router;
