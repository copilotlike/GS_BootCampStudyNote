import React, { useEffect, useState } from 'react';
import UseEffectCleanup from './UseEffectCleanup';

function UseEffectGo(props) {
  const [pname, setPname] = useState('차은우')
  const [age, setAge] = useState('26')
  const [marriage, setMarriage] = useState(false)
  const [show, setShow] = useState(true)

  useEffect(()=>{
    //componentDitMount + componentDidUpdate
    //마운트 결합 + 랜더링 시
    console.log(`useEffect 실행1 : ${pname} ${age} ${marriage}`)
  })
  useEffect(()=>{
    //componentDidMount
    //마운트 결합
    console.log(`useEffect 실행2 : ${pname} ${age} ${marriage}`)
  },[])
  useEffect(()=>{
    //componentDidMount
    //마운트 결합
    console.log(`useEffect 실행2 : ${pname} ${age} ${marriage}`)
  },[pname,marriage])

  return (
    <div>
      <h1>UseEffect임.</h1>
      <h1>pname : <input value = {pname} onChange={(e)=>setPname(e.target.value)}/></h1>
      <h1>age: {age}<button onClick={()=>setAge(age+1)}>나이증가</button></h1>
      <h1>marriage: {marriage+''}<button onClick={()=>setMarriage(!marriage)}>결혼여부변경</button></h1>
      <button onClick={() => setShow(!show)}>{show ? '제거' : '보이기'}</button>
      {show && <UseEffectCleanup />}
    </div>
  );
}

export default UseEffectGo;