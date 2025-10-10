const sub1 = require('./sub1');
console.log(`sub2 파일 입니다. ${sub1}`);
//순환 구조일 경우 무한반복을 차단하기 위해 참조대상을 빈객체 처리;

function fn2() {
    console.log(`fn2입니다. ${sub1}`);
}
module.exports = fn2;