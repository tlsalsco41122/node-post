const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'smc0416!@',
    database: 'node-post'
});

connection.connect();

connection.query('SELECT * FROM tb_post', function (error, results, fields) {
    if (error) {
        console.log("쿼리 실행 중 오류 발생:", error);
        return;
    }
    console.log("조회된 데이터:", results);
});
   
connection.end();

module.exports = connection;