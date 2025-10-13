console.log('main 실행');
setTimeout(()=> console.log('TimeOut 실행'),0);
setImmediate(() => console.log('Immediate 실행'));
process .nextTick(() => console.log('nextTick 실행1'));
Promise .resolve().then(() => console.log('Promise 실행2'));
Promise .resolve().then(() => console.log('Promise 실행3'));
process .nextTick(() => console.log('nextTick 실행4'));

console.log('main 실행2');

// 우선순위 확인.;