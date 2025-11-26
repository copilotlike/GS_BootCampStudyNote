import React, { useMemo, useState } from 'react';

function UseMemoGo(props) {

  const [list, setList] = useState([10, 20, 30, 40, 50]);
  const [num, setNum] = useState(10);

  function goToT(){
    console.log('goToT');
    let ret = 0;
    for(const i of list){
      ret += i;
    }
    return ret;
  }
  function numChange(e){
    console.log('numChange',e.target.value);
    setNum(e.target.value);
  }
  function listAdd(){
    console.log('listAdd');
    const newList = [];
    setList([...list,88])
  };

  //let tot = goToT();
  //        useMemo(함수, [의존값])
  //        의존값이 변경될 때만 함수를 실행해서 값을 반환
  //        의존값이 변경되지 않으면 이전에 반환된 값을 재사용
  let tot = useMemo(goToT,[list]);

  return (
    <div>
      <h1>UseMemoGo</h1>
      <div>num <input value={num} onChange={numChange}/></div>
      <div>list :{list.join(',')}</div>
      <button onClick={listAdd}>addition list</button>
      <div>합계 : {goToT()}</div>
    </div>
  );

}

export default UseMemoGo;