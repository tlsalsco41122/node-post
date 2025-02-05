const http = require("http");
const { postController } = require("./controllers/post.controller"); // 컨트롤러

// async가 있어야 await이 사용 가능
const server = http.createServer(async(req, res) => {

});