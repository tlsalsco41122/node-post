var mysql = require('mysql2');
var db = 'jdbc:mysql://localhost:3306/node-post'

var connection = mysql.createConnection({
  host     : db,
  user     : 'root',
  password : 'smc0416!@',
  database : 'node-post'
});

connection.connect();

module.exports = connection;