const fs = require('fs').promises;

fs.open('../fff/jjj.txt','w')
.then((fh)=>{
    return fh.write('파일내용 작성') //파일 쓰기
    .then(()=>{
        fn.close();// 파일 닫기
    })
})
.then(()=>{
    console.log('파일쓰기 성공')
})
.catch((err)=> {
    console.log('에러',err)
});

*