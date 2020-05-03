const SentenceList = require('../models/sentenceModel');

exports.getAllSentenceListItem = async (req, res) => {
  try {
    const sentenceList = await SentenceList.find(req.query);
    res.status(200).json({
      status: 'success',
      results: sentenceList.length,
      data: {
        sentenceList,
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
