const express = require('express');
const router = express.Router();

const getAll = require('./controller/get-all');
const createOne = require('./controller/create-one');
const deleteOne = require('./controller/delete-one');

router.get('/get-all', getAll);
router.post('/create-one', createOne);
router.delete('/delete-one', deleteOne);

module.exports = router;