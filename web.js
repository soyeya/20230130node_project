const express = require('express') //설치된 내장함수 부르기_서버연결가능하게 만듬
const app = express();
const PORT = process.env.PORT || 8001; //설치된 서버를 연결하겠다(우선순위) || 없어? 8001로 갈게~ (차순위) PORT라는 글자는 대문자로 사용할것
const path = require('path'); //경로없이 이름만 있는 것은 패키지를 설치하는 것
const notice = require('./router/notice');


//여기있는걸 실행해라
app.use('/notice' , notice);
app.use(express.static( path.join(__dirname, 'public'))) //지금경로에 , 퍼블릭방

app.get('/',function(request, response){
    response.sendFile( path.join(__dirname, 'public/index.html')) //퍼블릭방안에 인덱스파일에 보내줄게
})


//listen은 antrypoint만 구동할 수 있다 _ 딱 한개만 사용가능 = 서버는 하나만 연결가능하니까!
app.listen(PORT, function () {
    console.log(`server started on PORT ${PORT}`)
});