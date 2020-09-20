const express = require('express');
const router = express.Router();

// Router middleware to handle centrales routes.
const {getCentrales} = require('./centrales_controllers');

// Router middleware to handle auth routes.
router.route('/centrales').get(getCentrales);

// Export router to use it in the main app.
module.exports = router;
