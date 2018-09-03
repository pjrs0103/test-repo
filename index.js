var express = require('express');
var app = express();

// ejs를 사용하기 위해서 express의 view engine에 ejs를 set
app.set("view engine","ejs");

// static 페이지를 설정
// __dirname : node에서 제공하는 현재 실행 위치
// '/' 접속 시 '/public' , '/css' 접속 시 '/public/css'
app.use(express.static(__dirname + '/public'));

// query를 통해서 이름을 받는 코드. 모든 query들은 req.query에 저장됩니다.
// ejs파일을 사용하기 위해서는 res.render 함수 사용
// res.render는 ejs를 views에서 찾음. 폴더명은 변경X
app.get("/hello", function(req,res){
 res.render("hello", {name:req.query.nameQuery});
});

// 3
app.get("/hello/:nameParam", function(req,res){
 res.render("hello", {name:req.params.nameParam});
});

// 3000포트로 실행
app.listen(3000, function(){
 console.log('Server On!');
});
