const express = require('express');
const router = express.Router();

// Router middleware to handle centrales routes.
const {getCentralesGen, getCentralGen} = require('./centrales_controllers');

// Router middleware to handle auth routes.
router.route('/centralesGen').post(getCentralesGen);
router.route('/centralGen').post(getCentralGen);

// Export router to use it in the main app.
module.exports = router;
