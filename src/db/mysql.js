const mysql = require('mysql2');

//mysql.createConnection() 방식과 mysql.createPool() 방식이 다음 -> 계속 에러;;;
const pool = mysql.createPool({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'database',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();

module.exports = pool;
