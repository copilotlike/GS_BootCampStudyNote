const url= require('url');

const webToon = new url.URL('https://zzz:pA$$W0Rd@comic.naver.com/webtoon/detail:8088?titleId=821793&no=145&week=mon')
console.log('url.URL >>>',webToon);
console.log('rul.format :',url.format(webToon)) // url객체 -> 문자열;
const param = webToon.searchParams;
console.log(`searchParams :`,param);
console.log(`searchParams.get('no')`, param.get('no')); //최초 1개 리턴
console.log(`searchParams.get('no')`, param.get('titleId')); //821793 
console.log(`searchParams.get('no')`, param.get('vvbb')); //없으면 null
console.log(`searchParams.get('no')`, param.getAll('no')); // 배열로 리턴 =['10',''20','30']
console.log(`searchParams.get('no')`, param.getAll('titleId')); //배열로 리턴 =['821793']
console.log(`searchParams.get('no')`, param.getAll('vvbb')); //param이 없어도 배열로 리턴 -[]
console.log(`searchParams.get('no')`, param.gethas('titleId')); //존재유무
console.log(`searchParams.get('no')`, param.get.has('vvbb')); //존재유무
console.log(`searchParams.get('no')`, param.keys()); //key로 구성된 배열 URLSearchParams Iterator
console.log(`searchParams.get('no')`, param.values()); //values로 구성된 배열 URLSearchParams Iterator


param.set('week','sun');
console.log(`set('week','sun') :`, param);
param.append('age',26);
console.log(`append('age',26) :`, param);
param.append(`age'`, 78);
param.append(`titleId'`, 'poiu');
console.log(`다중 append : `,param);
console.log(`searchParam.getAll(titleId)`,param.getAll(`title.Id`));
param.delete('no')           // 같은 key에 해당하는 param 모두 삭제
param.delete('week')
console.log(`delete : `, param);
let ttt = param.toString();
console.log(`params.toString`,ttt);
console.log('webToon :',webToon);



