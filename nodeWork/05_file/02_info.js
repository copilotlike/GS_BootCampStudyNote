const { constants } = require("buffer")
const { access } = require("fs")

fs.access(`../fff/${fName}`,constants.W_OK).then(()=>{
    console.log(`${fName} 쓰기가능`);
}).catch((err)=>{
    console.log(`${fName} 쓰기불가`)
});


fs.access(`../fff/${fName}`,constants.X_OK).then(()=>{
    console.log(`${fName} 실행가능`);
}).catch((err)=>{
    console.log(`${fName} 실행불가`)
});
fs.access(`../fff/${fName}`,constants.X_OK).then(()=>{
    console.log(`${fName} 실행가능`);
}).catch((err)=>{
    console.log(`${fName} 실행불가`)
});


fs.access(`../fff/${fName}`,
    constants.F_OK | constants.W_OK | constants.R_OK |constants.X_OK)
    .then(()=>{
        console.log(`${fName} 모두 가능`);
}).catch((err)=>{
    if(err.code == 'EPERM'){
        console.log(`${fName} 파일없음.`)
    }
    if(err.code == 'EPERM'){
        console.log(`${fName} 쓰기불가`)
    }
    if(err.code == 'EPERM'){
        console.log(`${fName} 읽기불가`)
    }
    if(err.code == 'EPERM'){
        console.log(`${fName} 실행불가`)
    }
});