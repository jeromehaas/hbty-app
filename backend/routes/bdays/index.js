const express = require('express');
const router = express.Router();

const getAll = require('./controller/get-all');
const createOne = require('./controller/create-one');

router.get('/get-all', getAll);
router.post('/create-one', createOne);

module.exports = router;