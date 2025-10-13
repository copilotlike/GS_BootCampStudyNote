const os = require ('os');
// console.log(os); 너무 양이 많아 keep
console.log(`arch() : ${os.arch()}`) // x64; arch:Architecture
console.log(`platform() : ${os.platform()}`) // x64;
console.log(`type() : ${os.type()}`) // window_NT;
console.log(`uptime() : ${os.uptime()}` )//os 부팅 후 시간.
console.log(`hostname() : ${os.hostname()}`); //컴퓨터 이름
console.log(`release() : ${os.release()}`); //운영체제 버전;
console.log(`homedir() : ${os.homedir()}`); //홈 디렉토리(사용자계정홈) 
console.log(`tmpdir() : ${os.tmpdir()}`); //임시파일저장경로;
console.log(`cpus() :`, os.cpus()); // cpu 코어 정보
console.log(`freemem() : ${os.freemem()}`); //사용가능 메모리
console.log(`totalmem() : ${os.totalmem()}`); //전체메모리
