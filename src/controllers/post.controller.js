const { postService } = require("./services/post.service");

const postController = async (req, res) => {
    try {

        await postService(); // await은 뒤에오는 함수의 Promise(일종의 하나의 class)가 반환될때 까지 기다림 -> 동기적으로 하기
        res.statusCode = 200;
        res.end(); // return 같은 거
    } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({ message: error.message }));
    }
};

module.exports = { postController };