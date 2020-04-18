const mongoose = require('mongoose');

const wordListSchema = new mongoose.Schema({
  germanMain: {
    type: String,
    required: [true, 'A word list item must have a german word'],
    unique: true,
    trim: true,
  },
  germanAlt: {
    type: [String],
    trim: true,
  },
  englishMain: {
    type: String,
    required: [true, 'A word list item must have a english meaning'],
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
  level: {
    type: String,
    required: [true, 'A word list item must have a level'],
  },
  rating: {
    type: Number,
    required: [true, 'A word list item must have a rating'],
  },
  note: {
    type: String,
  },
});

const WordList = mongoose.model('Word_Lists', wordListSchema);

module.exports = WordList;
