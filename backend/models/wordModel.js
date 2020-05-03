const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  germanMain: {
    type: String,
    required: [true, 'A word must have a german meaning'],
    unique: true,
    trim: true,
  },
  germanAlt: {
    type: [String],
    trim: true,
  },
  englishMain: {
    type: String,
    required: [true, 'A word must have a english meaning'],
    trim: true,
  },
  englishAlt: {
    type: [String],
    trim: true,
  },
  partOfSpeech: {
    type: String,
    trim: true,
  },
  label: {
    type: mongoose.Schema.ObjectId,
    ref: 'Label',
    require: [true, 'A word must belongs to a label'],
  },
  note: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const WordList = mongoose.model('Word_Lists', wordSchema);

module.exports = WordList;
