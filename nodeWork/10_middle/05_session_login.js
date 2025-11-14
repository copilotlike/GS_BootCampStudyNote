const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const path = require('path');


app.use(
  session({
    secret: "qwer1234!@#$", 
    resave: true,
    saveUninitialized: true,
  })
);
// console.log(sessionID)

app.get("/", (req, res) => {
  res.send(`<h1>session 서버</h1>
    <form action='/' method ='put'>
        <input type="text" placeholder="identify" value = 'aaa'>aaa<br>
        <input type="text" placeholder="password" value = '1111'>1111
        <button type="submit"></button>
    </form>
    `);
});


app.get("/", (req, res) => {
  identify = (req.session.pid = "aaa"),
  password = (req.session.pw = "1111")
  
  if(identify === 'aaa' && password === '1111'){
    res.send(`로그인`);
  }
  res.send("세션 로그인 파일 생성");
});




app.get("/view", (req, res) => {
  res.send(`세션 보기 :  ${req.sessionID} <br/>
        ${req.session.pid}, 
        ${req.session.pname}, ${req.session.jum}, 
        ${req.session.age}, ${req.session.marriage}`);
});

app.get("", (req, res) => {
  res.send(`
    
    `)

  res.send("세션수정");
});

app.get("/delete", (req, res) => {
  //sessionID는 변경되지 않음.
  delete req.session.pname;
  delete req.session.age;
  res.send("세션 삭제");
});

app.get("/deleteAll", (req, res) => {
  //sessionID는 변경되지 않음.
  req.session.destroy((err) => {
    if (err) {
      console.log("전체 삭제시 에러발생");
    }
  });
  res.send("세션 삭제");
});

// 전체삭제와 같은 기능
app.get("/regenerate", (req, res) => {
  // 세션아이디 새로 변경
  // 전체삭제와 같은 기능
  req.session.regenerate((err) => {
    if (err) {
      console.log("초기화시 에러발생");
    }
  });
  res.send("세션 초기화");
});




app.use(express.urlencoded({extended:true}))

let me = null




//로그인 처리
app.post('/',(req, res)=>{
    
    const {pid, pw} = req.body
    //console.log(pid, pw)
    let msg = '로그인 실패'
    if(pid=='aaa' && pw == '1111'){
        msg = '로그인성공'
        me = '장동건'
    }
    res.send(`
        <script>alert('${msg}')
            location.href='/'
        </script>
    `)
})


//로그아웃 처리
app.get('/logout',(req, res)=>{

    let msg = me
    me = null

    res.send(`
        <script>alert('${msg}님 로그아웃되었습니다')
            location.href='/'
        </script>
    `)
})





app.listen(80, () => {
  console.log("static 서버 시작");
});
