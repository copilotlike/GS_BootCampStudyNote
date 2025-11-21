import Qwer from "./aaa/qwer"
import Entry from "./aaa/asdf"

let arr=[]
for (let i = 0; i < 5; i++) {
    arr.push(<Entry/>);
}
function Comp1() {
    return <>
        <h1>컴포넌트1입니다.</h1>
        <Qwer />
        <Qwer />
        <Entry />
        <Entry />
        <hr />
        {arr}
    </>
}

export default Comp1;