const express = require('express');
const sentenceListController = require('../controllers/sentenceListController');

const router = express.Router();

router.route('/').get(sentenceListController.getAllSentenceListItem);

module.exports = router;
