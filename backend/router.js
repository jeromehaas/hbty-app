const express = require('express');
const Router = express.Router;
const router = new Router();

router.use('/bdays', require('./routes/bdays/'));

module.exports = router;