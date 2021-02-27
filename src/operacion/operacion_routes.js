const express = require('express');
const router = express.Router();

// Router middleware to handle centrales routes.
const {mixForTech} = require('./operacion_controllers');

// Router middleware to handle auth routes.
router.route('/mix').get(mixForTech);

// Export router to use it in the main app.
module.exports = router;
