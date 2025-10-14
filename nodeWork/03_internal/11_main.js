const {isMainThread, Worker} = require('worker_threads')
console.log(`main->isMainThread : ${isMainThread}`)

//워커생성
const wk1 = new Worker('./12_worker.js',{
    workerData:{pname:'장동건',age:53}   //workerData : 워커 생성시 초기화 정보: 최초1회만 가능
})

const wk2 = new Worker('./12_worker.js',{
    workerData:{pname:'정우성',age:48}   //workerData : 워커 생성시 초기화 정보
})

wk1.postMessage('wk1 잘지내지?')  //main -> wk1으로 메세지 전송

//에러시 수신
wk1.on('error',(e)=> {
    console.log(`main 에러수신(wk1) :`, e.message);
})

//worker 종료시 수신
wk1.on('exit',(e)=> {
    console.log(`main 종료확인(wk1) :`, e);
})

//worker 종료시 수신
wk2.on('exit',(e)=> {
    console.log(`main 종료확인(wk2) :`, e);
})

wk3.on('exit',(e)=>{
    console.log('main 종료확인(wk3):',e);
})

setTimeout(()=>{
    wk3.terminate()// main에서 worker 종료(비정상종료)
}, 2000);
dddd
