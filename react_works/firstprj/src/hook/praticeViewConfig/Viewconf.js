import React, { createContext, useContext, useState } from 'react';
import './viewconf.css'

const MyContext = createContext()

const MyProvider = (props) => {
  const [header, setHeader] = useState('orange')
  const [side, setSide] = useState('blue')
  const [main, setMain] = useState('red')
  const [footer, setFooter] = useState('green')

  return <MyContext.Provider value={{ footer, setFooter, side, setSide, main, setMain, header, setHeader }}>
    {props.children}
  </MyContext.Provider>
}

const SubCom1 = (props) => {
  const conDate = useContext(MyContext)
  return <>
    <div style={{ backgroundColor: conDate.header }}>헤더</div>
    
    <button onClick={() => {
      conDate.setHeader('pink')
    }}>핑크</button>
  </>
}

const SubCom2 = (props) => {
  const conDate = useContext(MyContext)
  return <>
    <h3 style={{ backgroundColor: conDate.side }}>사~~~이드</h3>
  </>
}

const SubCom3 = (props) => {
  const conDate = useContext(MyContext)
  return <>
    <h3 style={{ backgroundColor: conDate.main }}>메인</h3>
  </>
}
const SubCom4 = (props) => {
  const conDate = useContext(MyContext)
  return <>
    <h3 style={{ backgroundColor: conDate.footer }}>푸웃터</h3>
  </>
}

function Viewconf(props) {
  return (
    <MyProvider>
      <div className='container'>
        <SubCom1 className='item' />
        <SubCom2 className='item' />
        <SubCom3 className='item' />
        <SubCom4 className='item' />
      </div>
    </MyProvider>
  );
}

export default Viewconf;

