// const fs = require('fs')

// let files = fs.readdirSync('../fff')

// //console.log(files)
// for (const fName of files) {
//     const st = fs.statSync(`../fff/${fName}`)
//     let size = '[dir]'
//     if(st.isFile()){
//         size = st.size
//     }
//     console.log(`${fName} : ${size} , ${st.birthtime} ${st.mtime}`)
    
// }


//  img, music, doc, etc
/// 하위 폴더까지 검색하세요

//이미지 : bmp, jpg, gif, png , jpeg
//음악 : mp3, wma, wav
//문서 :doc, hwp, ppt, xls, pptx, xlsx. docx
//기타 : 위의 분류 이외


const fs = require('fs')

let files = fs.readdirSync(`../test/File/`);
console.log(files)

let rs; 
// rs = fs.createReadStream('../fff/family16.JPG',{highWaterMark:16})
let ws;
// ws = fs.createWriteStream('../qqq/my.JPG')
// rs.pipe(ws)

for (const fName of files) {
    const st = fs.statSync(`../test/File/${fName}`);
    console.log(st.split('.'));

    if ('bmp' === rs.toString.length()-1){
        
    }
    rs = fs.createReadStream('../fff/family16.JPG',{highWaterMark:16});
    ws = fs.createWriteStream('../qqq/my.JPG');

    let size = '[dir]'
    // if(st.isFile()){
    //     size = st.size
    // }
    // console.log(`${fName} : ${size} , ${st.birthtime} ${st.mtime}`)
    // console.log(`${fName}`)
    
}
