import React, { useReducer } from 'react';
import { ReduceFunction1 } from "./ReduceFunction1";

function UseReduceGo1(props) {
                              // rrr : 리듀서로 사용할 함수
                              // {vvv:0} : 리듀서(state로 작동)의 기본값
  const [qwer,asdf] = useReducer(ReduceFunction1,{vvv:0});

  return (
    <div>
      <h1>UseReduceGo1</h1>
      <div>qwer.vvv : {qwer.vvv}</div>
      {/* 함수를 실행하지 않으면 qwer.vvv 초기값 0 출력 */}
      <button onClick={()=>asdf('ppp')}>증가</button>
      {/* asdf('ppp') ==> rrr()
      action = 'ppp'
      state = {vvv: 0}
      
      실행 이후 <div>qwer.vvv : {qwer.vvv}</div>의
      {qwer.vvv} 값 변경 --> 리랜더링(state로 작동) */}
      
      <button onClick={()=>asdf('mmm')}>감소</button>
      <button onClick={()=>asdf('')}>기본</button>
    </div>
  );
}

export default UseReduceGo1;