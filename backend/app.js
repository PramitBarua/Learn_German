const express = require('express');
const path = require('path');
const cors = require('cors');

const wordListRouter = require('./routes/wordListRouter');

const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/v1/wordlist', wordListRouter);

module.exports = app;
