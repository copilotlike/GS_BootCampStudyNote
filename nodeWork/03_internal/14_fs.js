const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, '..', 'fff');

/*
농구 팀 파일을 3개 구성하고
각 선수들을 포지션으로 배열을 구성하여 출력하세요
*/

fs.readFile(path.join(basePath, 'buksan.txt'),(err,data)=>{
    if(err){
        console.log('파일 에러')
    }else{
        //console.log(data)
        //console.log(data.toString())
        let arr = data.toString().split('\r\n');
        for (const i in arr) {
            console.log(`${i} : ${arr[i]}`);
            let parts = arr[i].split(',');
            let position = parts[2];
            let lastChar = position.charAt(position.length - 1);
            if (lastChar === 'c') {
                console.log('center');
            } else if (lastChar === 'f') {
                console.log('forward');
            } else if (lastChar === 'g') {
                console.log('guard');
            }
        }
    }

});


fs.readFile(path.join(basePath, 'haenam.txt'), (err, data) => {
    if (err) {
        console.log('파일 에러');
    } else {
        let arr = data.toString().split('\r\n');
        for (const i in arr) {
            console.log(`${i} : ${arr[i]}`);
            let parts = arr[i].split(',');
            let position = parts[2];
            let lastChar = position.charAt(position.length - 1);
            if (lastChar === 'c') {
                console.log('center');
            } else if (lastChar === 'f') {
                console.log('forward');
            } else if (lastChar === 'g') {
                console.log('guard');
            }
        }
    }
});

fs.readFile(path.join(basePath, 'neungnam.txt'),(err,data)=>{
    if(err){
        console.log('파일 에러')
    }else{
        //console.log(data)
        //console.log(data.toString())
        let arr = data.toString().split('\r\n');
        for (const i in arr) {
            console.log(`${i} : ${arr[i]}`);
            let parts = arr[i].split(',');
            let position = parts[2];
            let lastChar = position.charAt(position.length - 1);
            if (lastChar === 'c') {
                console.log('center');
            } else if (lastChar === 'f') {
                console.log('forward');
            } else if (lastChar === 'g') {
                console.log('guard');
            }
        }
    }
});




// const fs = require('fs')

// fs.readFile('../fff/aaa.txt',(err,data)=>{
//     if(err){
//         console.log('파일 에러')
//     }else{
//         //console.log(data)
//         //console.log(data.toString())
//         let arr = data.toString().split('\r\n')
//         //console.log(arr)
//         for (const i in arr) {
            
//             console.log(`${i} : ${arr[i]}`)
//             let a = charAt(str.length -1)
//             if (a==='c') {
//                 console.log('center')
//             }else if (a === 'f') {
//                 console.log('forward');
//             }else if (a==='g'){
//                 console.log('gard');
//             }
            
//             }
//         }
//     }
// )

/*

농구 팀 파일을 3개 구성하고
각 선수들을 포지션으로 배열을 구성하여 출력하세요

북산
등번호,이름,포지션
4,채치수,c
10,강백호,pf
11,서태웅,sf
14,정대만,sg
7,송태섭,pg
5,권준호,sg

해남
4,이정환,pg
10,전호장,sf

능남
4,변덕규,c
7,윤대협,sf

*/
