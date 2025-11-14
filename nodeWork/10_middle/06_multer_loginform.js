const express = require('express')
const path = require('path')
const app = express()
const multer = require('multer')

app.use(express.urlencoded({extended:true}))

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'views/loginForm.html'))
})

// --------------------------------------------------------------------
app.use(session({
    secret:'qwer1234!@#$',  //인증키설정 (필수)-> 세션 무결성, 세션데이터 저장시사용
    resave:false,           // 세션 수정하지 않아도 자동저장 : true
                            // 세션 변경시에만 저장 : false
                            // 생략시 true
    saveUninitialized:false,    //초기화 되지 않은 세션 저장
                                // 생략시 true
    cookie:{
        secure:false,       // https 에서만 가능 :  true
                            // https, http 모두 가능 :  false (기본값)
        //maxAge:1000 * 5     // 5초후 만료
    },
    rolling : true          //요청마다 maxAge 갱신 - 요청이 없으면 5초뒤 session 만료       
}))


app.use(express.urlencoded({extended:true}))

app.use((req,res,next)=>{
    let fPath = path.join(__dirname,'views/alert.html')
    req.alert = fs.readFileSync(fPath,'utf8').toString()
    next()
})

app.get('/',(req, res)=>{
    
    if(req.session.pname){
        res.send(`${req.session.pname}님 안녕하세요 <a href='logout'>로그아웃</a>`)
    }else{
        res.sendFile(path.join(__dirname,'views/logMain.html'))
    }
    
})


//로그인 처리
app.post('/',(req, res)=>{
    
    const {pid, pw} = req.body
    //console.log(pid, pw)
    let msg = '로그인 실패'
    if(pid=='aaa' && pw == '1111'){
        req.session.pname='장동건'
        msg = '로그인 성공'
    }

    let ttt = req.alert.replaceAll('{{title}}','로그인처리')
                        .replaceAll('{{msg}}',msg)

    res.send(ttt)
})


//로그아웃 처리
app.get('/logout',(req, res)=>{

    let msg = `${req.session.pname}님 로그아웃되었습니다`

     req.session.destroy((err)=>{
        if(err){
            console.log('전체 삭제시 에러발생')
        }
    })

    let ttt = req.alert.replaceAll('{{title}}','로그아웃')
                        .replaceAll('{{msg}}',msg)

    res.send(ttt)
})

app.listen(80,()=>{
    console.log('login 서버 실행')
})




// -------------------------------------------------------------




const qwer = multer({


    storage : multer.diskStorage({

        destination : (req,file, cb)=>{   
            cb(null, 'dst/')  //cb(err 혹은 null, 저장폴더)
        },
        filename:(req,file, cb)=>{          //저장될때 파일명
            // 파일명이 같을 경우 덮어쓰기로 저장됨
            //cb(null, file.originalname)     //cb(err 혹은 null, 파일명)
            //file.originalname  업로드된 파일의 이름

            const ext = path.extname(file.originalname) //확장자명
            
            cb(null, path.basename(file.originalname,ext)+Date.now()+ext)
        }
    }),

   
    limits :{ fileSize : 5 * 1024 * 1024},  // byte

    //파일필터링
    fileFilter: (req,file, cb)=>{ 
        const allowedTypes = ['image/jpeg','image/png']

        // file.mimetype : 업로드파일 형식
        if(allowedTypes.includes(file.mimetype)){
            //파일허용
            cb(null, true)

        }else{
            //파일거부
            cb(new Error('파일형식거부'), false)
        }
    }
})




//enctype="multipart/form-data" 처리
//qwer.single('ff')  필드:ff 가 file 
app.post('/single',qwer.single('ff'),(req, res)=>{
    console.log("/single---------------")
    console.log(`pname : ${req.body.pname}`)    //일반필드 : req.body.필드
    //console.log(`ff : ${req.body.ff}`)        //파일필드 접근불가
    console.log(`ff : `,req.file)             //파일필드
    res.send('single 파일 처리')
})


//enctype="multipart/form-data" 처리
//qwer.none('ff')  파일 업로드시 에러발생, 파일이 없을 경우에는 정상실행
app.post('/none',qwer.none('ff'),(req, res)=>{
    console.log("/none---------------")
    console.log(`pname : ${req.body.pname}`)    //일반필드 : req.body.필드
    //console.log(`ff : ${req.body.ff}`)        //파일필드 접근불가
    console.log(`ff : `,req.file)             //파일필드
/* req.file 의 요소
 {
    fieldname: 'ff',
    originalname: 'NJVF0286.JPG',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: 'dst/',
    filename: 'NJVF02861761112443520.JPG',
    path: 'dst\\NJVF02861761112443520.JPG',
    size: 4590853
  }
*/

    res.send('none 파일 처리')
})


//qwer.array('ff') multiple 에 의한 여러파일 업로드
app.post('/array',qwer.array('ff'),(req, res)=>{
    console.log("/array---------------")
    console.log(`pname : ${req.body.pname}`)    //일반필드 : req.body.필드
    
    //console.log(`ff : `,req.file)             //파일필드 - 단일파일
    console.log(`ff : `,req.files)             //파일필드 - 파일여러개
    res.send('array 파일 처리')
})

//qwer.array('ff',3) 파일갯수제한 : 3개까지 가능 3개초과시 에러발생
app.post('/array3',qwer.array('ff',3),(req, res)=>{
    console.log("/array3---------------")
    console.log(`pname : ${req.body.pname}`)    //일반필드 : req.body.필드
    
    //console.log(`ff : `,req.file)             //파일필드 - 단일파일
    console.log(`ff : `,req.files)             //파일필드 - 파일여러개
    res.send('array갯수제한 3 파일 처리')
})


//qwer.fields 에서 사용할 배열 - 파일업로드 필드 지정
// maxCount : 파일갯수 제한
const arr = [
    {name:'ff1', maxCount:1},
    {name:'ff2'},
    {name:'ff3', maxCount:3},
    {name:'ff4'}
]


//qwer.fields(배열) 여러 필드에 대한 업로드
app.post('/fields',qwer.fields(arr),(req, res)=>{
    console.log("/fields---------------")
    console.log(`pname : ${req.body.pname}`)    //일반필드 : req.body.필드
    
    console.log(`ff : `,req.files)             //파일필드 - 파일여러개
    res.send('fields 파일 처리')
})


//multer 에서 발생한 예외처리 - 가장하단에서 처리
app.use((err,req,res,next)=>{
    console.log('예외처리')
    res.status(500).send(`500 : 에러처리 =>  ${err.message}`) //500 상태코드와 메시지 전송
})

app.listen(80,()=>{
    console.log('multer 서버 실행')
})