const express = require('express');
const wordListController = require('../controllers/wordListController');

const router = express.Router();

router
  .route('/')
  .get(wordListController.getAllWordListItem)
  .post(wordListController.createWordList);

// router
//   .route("/:id")
//   .get(wordListController.getWordListItem)
//   .patch(wordListController.updateWordListItem)
//   .delete(wordListController.deleteWordListItem);

module.exports = router;
