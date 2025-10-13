// process : 현재 진행중인 과정(절차)을 이야기함.; 
// progress : 진행의 상태
// program : 프로그램 > 코드의 집합체
// proceed : 핵심코드 ? 무언가를 작업하기 위한 전처리과정으로 보임.

// ex) 일련의 과정 
// proceed(전처리) -> process(processing) -> progress(상태) -> program(실행) ???
console.log(`version : ${process.version}`); //node버전;
console.log(`arch : ${process.arch}`);
console.log(`platform : ${process.platform}`);
console.log(`pid : ${process.pid}`);
console.log(`uptime() : ${process.uptime}`);
//node 위치를 알려줌.
console.log(`execPath() : ${process.execPath}`);
console.log(`cwd() : ${process.cwd()}`); //linux cmd:pwd
console.log(`cpuUsage() : `, process.cpuUsage());
// { user: 31000, system: 31000 }
//cpu 5% 이하가 좋음. 30~40%이상이면 문제 있음.

console.log('env :', process.env); //environment variable.

