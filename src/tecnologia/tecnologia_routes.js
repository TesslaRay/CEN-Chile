const express = require('express');
const router = express.Router();

// Router middleware to handle centrales routes.
const {getTech} = require('./tecnologia_controllers')

// Router middleware to handle auth routes.
router.route('/tech').get(getTech);

// Export router to use it in the main app.
module.exports = router;