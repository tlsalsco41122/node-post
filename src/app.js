const http = require("http");
const { postController } = require("./controllers/post.controller"); // 컨트롤러

// async가 있어야 await이 사용 가능
const server = http.createServer(async(req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    try{
        if (req.method === "POST") {
            if.url 
        }
    }

});