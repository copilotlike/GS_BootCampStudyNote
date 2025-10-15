const fs = require('fs');
// import * as fs from 'fs';

// 스트림으로 파일읽기(파일경로 ,  hightWaterMark:버퍼크기 - 기본값 64kb)
// const rs = fs.createReadStream('../fff/octopus.txt',(highWaterMark:16));


// import * as fs from 'fs';

const rs = fs.createReadStream('c:\\sung\\nodeWork\\fff\\octopus.txt', { highWaterMark: 16 });

let cnt = 1;
let arr= [];
rs.on('data', (chunk)=> { // 1,320 /16 =>82.5번 실행
    console.log(cnt++, 'chunk', chunk.length, chunk.toString())
    arr = chunk.toString();
});


//스트림 전송 완료
rs.on('end', () =>{
    let ttt = Buffer.concat(arr)
    console.log(`완료`, buf)
    console.log(buf.toString())
});

//스트림 에러발생시 
rs.on('end', (err) =>{
    
    console.log('에러발생 ', err)
});