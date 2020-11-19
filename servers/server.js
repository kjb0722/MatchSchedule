const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const craw = require('./craw.js');
const matchKind = require('./matchKind.js');

app.use(cors());
app.use(bodyParser.json());
app.use('/craw', (req, res) => {
  res.json({ data: craw });
});

app.use('/matchKind', (req, res) => {
  res.json({ data: matchKind });
});

app.listen(port, () => console.log(`express is running on ${port}`));
