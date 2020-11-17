const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const craw = require('./craw.js');

app.use(cors());
app.use(bodyParser.json());
app.use('/api', (req, res) => {
  console.log(craw);
  res.json({ data: craw });
});

app.listen(port, () => console.log(`express is running on ${port}`));
