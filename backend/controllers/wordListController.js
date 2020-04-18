const WordList = require('../models/wordListModel');

exports.getAllWordListItem = async (req, res) => {
  try {
    const wordList = await WordList.find();
    res.status(200).json({
      status: 'success',
      results: wordList.length,
      data: {
        wordList,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createWordList = async (req, res) => {
  try {
    console.log(req.body);
    const newWordList = await WordList.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        wordList: newWordList,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
