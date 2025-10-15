const fs = require('fs');
// const path = require('path');
// const ws = require('ws');
console.log(__dirname)

// 스트림쓰기 객체생성
// const ws = fs .createWriteStream('C:\sung\nodeWork\fff\iii.txt');
const ws = fs.createWriteStream(`${__dirname}/fff/octopus.txt`);
console.log(ws)
// console.log(fs.createWriteStream(path.join(__dirname, '../fff/octopus.txt')))

ws.on('finish',()=>{
    console.log('파일쓰기 종료');
});

ws.write('엄마가 섬그늘에');
ws.write('굴따러 가면\n');
ws.write('아기도 섬그늘에');
ws.write('굴따러 가고\n');
ws.write('아빠도 섬그늘에');
ws.write('굴따러 가고\n');
ws.write('모두다 시장에서 굴장사하고');

//스트림 종료
ws.end();

/*
1-> 1000000000 짝수들과 짝수들의 합을 기록한 파일을 생성하세요.
fff/billion.txt로 저장
*/

