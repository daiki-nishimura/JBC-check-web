const express = require('express');

const router = express.Router();

router.use('/residents', require('./residents'));

module.exports = router;
