const mysql = require('mysql');
const dbconfig = require('./database.js');
const connection = mysql.createConnection(dbconfig);
connection.connect();

let data = [];
connection.query('select * from matchKind', (error, rows, fields) => {
  if (error) throw error;
  data = rows;
});

module.exports = data;
