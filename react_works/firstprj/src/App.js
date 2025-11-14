import React, { Component } from "react";

class App extends Component{

    render(){
        let no = 5;
        return (
            <div>
                {/* jsx (javascript XML)
                    javaScript에서 html을 사용
                    render 시 컴파일 하여 적용 : babel이 jsx를 javascript 로 변환
                                                --> html 코드는 document.createElement("div") 형태로 실행 
                    랜더시 1개의 엘리먼트 형태로 리턴.
                    엘리먼트는 닫혀 있어야함. 
                    변수 출력시 {} 안에 기재
                 */}
                 {/* 주석 */}
                <h1> 내가 앱1</h1>
                <h1> 내가 앱2 {no}</h1>
                <input type='text' name='pid'  value={no+20}/>
            </div>
            //Module build failed (SyntaxError)
        )
    }
    // Your render method should have a return statement  
}

export default App;
// error : instance.render is not a function


/*
    react_workkk 폴더 안에 secprj 리액트프로젝트를 생성하세요.
    포트번호는 8888로 지정
    
    출력내용

    이룸 : 정우성
    나이 : 43
    결혼 : true

    정우성, 43, true는 변수로 처리 하세요.

*/