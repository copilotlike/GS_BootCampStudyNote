var {v1, v2} = require(`./sub4`);
var {aa, bb} = require(`./sub3`);

if(false){
    var{aa,bb} = require(`./sub3`);
}
console.log(aa,bb);


var tt = `./sub${v2}`;
var {cc, dd} = require(tt); // 변수로 import 파일 설정 가능
console.log(cc,dd);