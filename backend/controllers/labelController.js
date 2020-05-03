const Label = require('../models/labelModel');

exports.getAllLabel = async (req, res) => {
  try {
    const labels = await Label.find();
    res.status(200).json({
      status: 'success',
      results: labels.length,
      data: {
        labels,
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

exports.getLabel = async (req, res) => {
  try {
    const label = await Label.findById(req.params.id)
      .populate('sentences')
      .populate('words');

    res.status(200).json({
      status: 'success',
      data: {
        label,
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
