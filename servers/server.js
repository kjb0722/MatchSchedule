const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const craw = require('./craw.js');

const mysql = require('mysql');
const dbconfig = require('./database.js');
const connection = mysql.createConnection(dbconfig);
connection.connect();

app.use(cors());
app.use(bodyParser.json());
app.post('/craw', (req, res) => {
  console.log(req.body);
  res.json({ data: craw });
});

app.use('/matchKind', (req, res) => {
  connection.query('select * from matchKind', (error, rows, fields) => {
    if (error) throw error;
    res.json({ data: rows });
  });
});

app.listen(port, () => console.log(`express is running on ${port}`));
