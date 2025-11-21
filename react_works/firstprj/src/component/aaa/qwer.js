// import { render } from "nunjucks"
let cnt = 0;

console.log(`qwer임. ${cnt}`)
// import시 실행됨.

// 함수기반 컴포넌트
function Qwer() {

    console.log(`comp1 실행 ${cnt}`)
    // import만으로는 실행 안됨.
    let no = 0;
    cnt++;
    no++;

    console.log(`qwer() 실행 ${cnt} ${no}`)
    return <>
        comp1 호출 {cnt}
    </>
}
export default Qwer;