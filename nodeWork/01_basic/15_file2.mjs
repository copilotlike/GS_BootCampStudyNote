//ES 모듈에서 직접 사용 불가 => 오류 뜸.
// console.log(__filename);
// 경로 포함 파일 이름 : c:\sung\nodeWork\01_basic\14_file.js

// console.log(__dirname);
// 파일경로 : c:\sung\nodeWork\01_basic

// 파일이름 대체 mj
console.log(import.meta.url)