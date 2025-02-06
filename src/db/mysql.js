const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'smc0416!@',
    database: 'node-post',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();

module.exports = pool;