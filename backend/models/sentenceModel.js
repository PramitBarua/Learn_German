const mongoose = require('mongoose');

const SentenceSchema = new mongoose.Schema({
  germanMain: {
    type: String,
    required: [true, 'A sentence list item must have a german sentence'],
    unique: true,
    trim: true,
  },
  germanAlt: {
    type: [String],
    trim: true,
  },
  englishMain: {
    type: String,
    required: [
      true,
      'A sentence list item must have a English sentence and this should be the translation of the corresponding German sentence.',
    ],
    trim: true,
  },
  englishAlt: {
    type: [String],
    trim: true,
  },
  label: {
    type: mongoose.Schema.ObjectId,
    ref: 'Label',
    require: [true, 'A sentence must belongs to a label'],
  },
  note: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const SentenceList = mongoose.model('Sentence_Lists', SentenceSchema);

module.exports = SentenceList;
