const fs = require("fs");

//파일 복사
const rs = fs.createReadStream("../fff/octopus.txt", { highWaterMark: 16 });
const ws = fs.createWriteStream("../qqq/oct.txt");
rs.pipe(ws);

// 이미지 복사
rs = fs.createReadStream("../fff/family16.jpg", { highWaterMark: 16 });
ws = fs.createWriteStream("../qqq/my.jpg");
rs.pipe(ws);

//aaa.txt + bbb.txt + ccc.txt; => qwer.txt
//rs.pipe(ws,{end.false}) end:false : 종료하지 않음. --> 쓰기 종료하지 않음.

// 함수나 배열처리하면 어려우니 낱개로 처리함.
// let rs1 = fs.createReadStream('../fff/aaa.txt');
// let rs2 = fs.createReadStream('../fff/bbb.txt');
// let rs3 = fs.createReadStream('../fff/ccc.txt');
// let wst = fs.createWriteStream('../fff/qwer.txt');

// 이미지 파일 결합시 에러는 발생하지 않으나 최종이미지가 정상으로 보이지 않음 --> 첫번쨰 이미지만 실행
let rs1 = fs.createReadStream("../fff/family9");
let rs2 = fs.createReadStream("../fff/family11");
let rs3 = fs.createReadStream("../fff/family12");
let wst = fs.createWriteStream("../qqq/imgToT.jpg");

rs1.pipe(wst, { end: false }); // rs1->쓰기 ;

//rs1 종료시 rs2 쓰기 시작
rs1.on("end", () => {
  rs3.pipe(wst, { end: false }); //rs2-> wst쓰기
});

//rs2 종료시 rs3 쓰기 시작
rs2.on("end", () => {
  wst.write("\n");
  rs3.pipe(wst); //rs3 -> wst 쓰기, 마지막 파일이므로 {end:false} 생략 혹은 {end :true}
});

rs3.on("end", () => {
  console.log("모든파일 합치기 종료");
});

rs1.on("error", (err) => {
  rs3.pipe(wst, { end: false }); //rs2-> wst쓰기
});

//rs2 종료시 rs3 쓰기 시작
rs2.on("error", (err) => {
  wst.write("\n");
  rs3.pipe(wst); //rs3 -> wst 쓰기, 마지막 파일이므로 {end:false} 생략 혹은 {end :true}
});

rs3.on("error", (err) => {
  console.log("모든파일 합치기 종료");
});

wst.on("error", () => {
  console.log("wst 쓰기 오류", err);
});

const zlib = require("zlib"); // 압축모듈
rs = fs.createReadStream("../fff/family16.jpg", { highWaterMark: 16 });
let zs = zlib.createGzip(); //gz으로 압축
ws = fs.createWriteStream("../qqq/zxc.gz");
rs.pipe(zs.pipe(ws)); //읽기 -> 압축 -> 쓰기



//능남, 북산, 해남을 결합하여 slamdunk.txt를 생성하세요.

let neungnam = fs.createReadStream("../fff/buksan.txt");
let buksan = fs.createReadStream("../fff/buksan.txt");
let haenam = fs.createReadStream("../fff/haenam.txt");
let wst1 = fs.createWriteStream("../qqq/mergeSlamdunkFile.jpg");

neungnam.pipe("end", wst, { end: false }); // rs1->쓰기 ;

//rs1 종료시 rs2 쓰기 시작
buksan.on("end", () => {
  rs3.pipe(wst1, { end: false }); 

});

//rs2 종료시 rs3 쓰기 시작
haenam.on("end", () => {
  wst.write("\n");
  rs3.pipe(wst); 
});

wst1.on("end", () => {
  console.log("모든파일 합치기 종료");
});
