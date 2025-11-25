import React from 'react';
import { useEffect } from 'react';

function UseEffectCleanup(props) {

  const [tt, setTT] = React.useState(0);

  let no = 0;
  useEffect(() => {
    console.log("UseEffectCleanup:useEffect 실행")

    // 마운트 마다 setInterval 생성 실행
    const timer = setInterval(() => {
      no++
      console.log('timer:', no)
      setTT(no)
    }, 1000)
    
    //return ==> cleanup : 컴포넌트 umount 시 실행
    return () => {
      console.log('cleanup 실행')
      clearInterval(timer)
    }
  },)

  return (
    <div>
      <h1>UseEffectCleanup</h1>
      <div> tt : {tt}</div>
    </div>
  );
}

export default UseEffectCleanup;