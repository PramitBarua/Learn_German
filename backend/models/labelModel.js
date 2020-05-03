const mongoos = require('mongoose');

const labelSchema = new mongoos.Schema(
  {
    name: {
      type: String,
      required: [true, 'A label should have a name'],
      unique: [true, 'The label must be unique'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

labelSchema.virtual('sentences', {
  ref: 'Sentence_Lists',
  foreignField: 'label',
  localField: '_id',
});

labelSchema.virtual('words', {
  ref: 'Word_Lists',
  foreignField: 'label',
  localField: '_id',
});

const Label = mongoos.model('Label', labelSchema);

module.exports = Label;
