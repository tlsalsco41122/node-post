const { mysql } = require("./db/mysql");

const createDataService = async (data) => {
    const { title, content } = data;
    console.log(title, content);

    const{ data: createData, error: createError }  = await mysql
        .from("tb_post") // "tb_post" 테이블에 데이터를 삽입하겠다는 의미
        .insert({ // 아마도 값을 넣는 것?
            title,
            content
        });

    if (createError) {
        console.log("데이터 추가중 오류:", createError.message);
    };
};

module.exports = { createDataService }