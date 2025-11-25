import React, { useReducer } from 'react';
import { ReduceFunction1 } from "./ReduceFunction1";

function UseReduceGo2(props) {
                              // rrr : 리듀서로 사용할 함수
                              // {vvv:0} : 리듀서(state로 작동)의 기본값
  const [aaa,fn1] = useReducer(ReduceFunction1,{vvv:100});

  return (
    <div>
      <h1>UseReduceGo2</h1>
      <div>qwer.vvv : {aaa.vvv}</div>
      {/* 함수를 실행하지 않으면 qwer.vvv 초기값 0 출력 */}
      <button onClick={()=>fn1('ppp')}>증가</button>
      {/* asdf('ppp') ==> rrr()
      action = 'ppp'
      state = {vvv: 0}
      
      실행 이후 <div>qwer.vvv : {qwer.vvv}</div>의
      {qwer.vvv} 값 변경 --> 리랜더링(state로 작동) */}
      
      <button onClick={()=>fn1('mmm')}>감소</button>
      <button onClick={()=>fn1('')}>기본</button>
    </div>
  );
}

export default UseReduceGo2;