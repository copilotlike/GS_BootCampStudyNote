import { useState } from "react";
import '../updateGo.css';

let no1,no2 =0;
function UpdateGo({ pname, age, marriage }) {

    no1++;
    // console.log('화면그리기',no1,); //최초 1회만 실행

    // console.log('화면그리기');

    let [no3, setNo3] = useState(100); //변수는 : no3, 변수값변경함수 : setNo3(매개변수 ), 초기값은 100;
    let [noAge, setNoAge] = useState(100); //변수는 : no3, 변수값변경함수 : setNo3(매개변수 ), 초기값은 100;
    let [, setBox] = useState(100); 
    

    function btnGo1() {
        no2++;
        console.log('btnGo1 눌렀다.',no2)
    }

    function btnGo2(){
        no3++;
        console.log('btnGo2 눌렀다.',no3)
    }
    function btnGo3(){
        no3++;
        console.log('btnGo3 눌렀다.',no3)
    }
    function btnGoNoAge(){
        
        
        
    }
    function btnGoBox(boxToggle){
        boxToggle = !boxToggle;
        setBox("box_r"? 'box_r' : 'box_y')
        // console.log('btnGoBox 눌렀음.', box)

    }

    return <>
        <h1>화면갱신</h1>
        <div>내용 : {pname}, {age}, {marriage + ''}</div>
        <div>no1 : {no1}, no2 : {no2}</div>
        {/* 이벤트 넣는 방법 */}
        <button onClick={btnGo2}>버튼1</button>
        <button onClick={btnGo3}>버튼2</button>
        <button onClick={btnGoNoAge}>버튼no</button>
        <button onClick={btnGoBox}>버튼Go</button>
    </>
}

export default UpdateGo;

