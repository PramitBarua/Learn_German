const express = require('express');
const path = require('path');
const cors = require('cors');

const wordListRouter = require('./routes/wordListRouter');
const sentenceListRouter = require('./routes/sentenceListRouter');
const labelRouter = require('./routes/labelRouter');

const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/v1/wordlist', wordListRouter);
app.use('/api/v1/sentencelist', sentenceListRouter);
app.use('/api/v1/label', labelRouter);

module.exports = app;
