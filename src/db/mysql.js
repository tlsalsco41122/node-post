var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'smc0416!@',
  database : 'node-post'
});

connection.connect();

module.exports = connection;