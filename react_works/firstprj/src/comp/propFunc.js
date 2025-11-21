
// 함수형 1
function propFunc(ppp){
    console.log('ppp : ',ppp)
    return <div>함수형 : {ppp.pname} {ppp.age} {ppp.marriage}</div>
}

// 함수형 2
function asdf({pname, age, marriage=true}){
    
    // console.log('ppp : ',ppp)
    return <div>함수형 : {pname} {age} {marriage+''}</div>
}

// export default asdf;
export default propFunc;