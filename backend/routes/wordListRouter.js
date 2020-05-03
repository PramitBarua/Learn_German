const express = require('express');
const wordListController = require('../controllers/wordListController');

const router = express.Router();

router.route('/').get(wordListController.getAllWordListItem);

module.exports = router;
