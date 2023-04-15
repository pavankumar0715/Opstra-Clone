const express = require('express');
const router = express.Router();

//all api routes redirected to this
router.use('/api',require('./api'))

module.exports = router;