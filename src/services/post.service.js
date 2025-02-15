const mysql = require("../db/mysql");

const createDataService = async (data) => {
    try {
        const { title, content } = data;
        console.log(title, content);

        // connection.getConnection() 대신 pool.query() 사용
        const [results] = await mysql.query(
            "INSERT INTO tb_post (title, content) VALUES (?, ?)",
            [title, content]
        );

        // connection.release() 필요 없음 → Connection Pool이 자동으로 관리
        console.log("데이터 삽입 성공:", results);
    } catch (error) {
        console.log("데이터 삽입 중 오류:", error.message);
    }
};

module.exports = createDataService;