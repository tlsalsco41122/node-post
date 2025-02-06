const mysql = require("../db/mysql");

const createDataService = async (data) => {
    try{ // try-catch로 예외 처리하기
        const { title, content } = data;
        console.log(title, content);
    
        const{ data: createData, error: createError }  = await mysql
            .from("tb_post") // "tb_post" 테이블에 데이터를 삽입하겠다는 의미
            .insert({ // 아마도 값을 넣는 것?
                title,
                content
            });
    
        if (createError) {
            throw new Error(createError.message); // 에러를 던짐
        };
        console.log("goooooood");
    } catch (error){
        console.log("데이터 삽입 중 오류", error.message);
    };
};

module.exports = createDataService;