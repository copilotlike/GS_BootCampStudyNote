console.log('dynamic2 시작---')

if(true){           //동적처리 불가
   //import {aa, bb} from './sub33.mjs' - 에러발생
   //await import {aa, bb} from './sub33.mjs' - 에러발생
    
}

// import {aa, bb} from './sub33.mjs'  - 동기화
//var sub33 = import('./sub33.mjs')   // Promise { <pending> } 발생 - 비동기화 (넌블로킹)
//console.log(sub33.aa, sub33.bb)     // undefined undefined

var sub33 = await import('./sub33.mjs')   // await 를 이용하여 동기화(블로킹)
//console.log(sub33.aa, sub33.bb)     // 폴리 용감하고 빠르죠

if(false){       //동적처리
    var sub33 = await import('./sub44.mjs')   // await 를 이용하여 동기화(블로킹)  
}
 console.log(sub33.aa, sub33.bb)     // 동적처리에 따른 결과 확인


// let tt = './sub55.mjs'
import {cc,dd} from './sub55.mjs'
console.log(cc,dd) 

console.log('dynamic2 끝---')

/*
js: 주식
mjs: 후식

module_아침 --> 아침 식사 메뉴
module_점심 --> 점심 식사 메뉴
module_저녁 --> 저녁 식사 메뉴

현재 시간을 이용하여 메뉴 출력
아침 : 00~10
점심 : 10~16
저녁 : 나머지
*/

const now = new Date();
// console.log('현재시간 : ', now);
const hour = now.getHours();
// console.log('시 :',hour);

let selected, selectDessert;
if (hour >= 0 && hour < 10) {
    selected = await import('./module_breakfast.js');
    selectDessert = await import('./module_breakfast_dessert.mjs);')
} else if (hour >= 10 && hour < 16) {
    selected = await import('./module_lunch.js');
    selectDessert = await import('./module_lunch_dessert.mjs');
} else {
    selected = await import('./module_dinner.js');
    selectDessert = await import('./module_dinner_dessert.js');
}

const menuObj = selected.default;
const menuDessertObj = selectDessert.default;

// console.log(menuObj);

console.log(`현재 시간: ${now.toLocaleTimeString()} / 선택된 시간대: ${menuObj.time}`);
console.log('메뉴:', menuObj.menu.join(', '));
console.log('후식:', menuDessertObj.menu.join(', '));