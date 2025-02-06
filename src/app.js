const http = require("http");
const createData = require("./controllers/post.controller");

// async가 있어야 await이 사용 가능
const server = http.createServer(async(req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    try{
        if (req.method === "POST") {
            if (req.url === "/create") {
                let body = "";
                req.on("data", (chunk) => { // 클라이언트가 보낸 데이터를 조금씩(chunk 단위로) 받을 때마다 실행됨
                    body += chunk; // body 변수에 데이터가 쌓임.
                });

                req.on("end", async () => { // 모든 데이터 수신이 끝나면 실행됨
                    try {
                        const parsedBody = JSON.parse(body); // json 형식으로 변환
                        await createData(req, res, parsedBody);
                    } catch (parseError) {
                        res.end(JSON.stringify({ message: "JSON 변경중 오류 발생" }));
                    }
                });
                return;
            }
        }
    } catch (err)  {
        if (!res.headersSent) {
            res.end(
                JSON.stringify({ message: `Internal Server Error, ${err.message}` })
            );
        };
    }
});

module.exports = server;