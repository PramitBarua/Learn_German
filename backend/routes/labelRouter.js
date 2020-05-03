const express = require('express');
const labelController = require('../controllers/labelController');

const router = express.Router();

router.route('/').get(labelController.getAllLabel);
// .post(wordListController.createWordList);

router.route('/:id').get(labelController.getLabel);
//   .patch(wordListController.updateWordListItem)
//   .delete(wordListController.deleteWordListItem);

module.exports = router;
