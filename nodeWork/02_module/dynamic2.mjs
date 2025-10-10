console.log('dynamics2 시작-----');
// import {aa,bb} from './sub33.mjs';
if(true){
    // import {aa,bb} from './sub33.mjs';
    //await import {aa, bb} from './sub33.mjs';
    const {aa, bb} = await import('./sub33.mjs');

    let sub33 =import('./sub33.mjs');
    console.log(sub33);
}

// import {aa,bb} from '
// Promise {<pending>} 발생 - 비동기화 처리 
if(true){
    let sub33 = await import('./sub33.mjs'); // await 를 이용하여 동기화 (블로킹)
    console.log(sub33.aa, sub33.bb); // 폴리 용감하고 빠르죠.
}
console.log('dynamics2 끝-----');

if(false){
    var sub33 = await import('./sub33.mjs'); //await 를 이용하여 동기화 (블로킹)
}
console.log(sub33.aa,sub33.bb); // ReferenceError: sub33 is not defined
console.log('dynamics2 끝-----');

git 