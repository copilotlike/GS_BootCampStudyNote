import React from 'react'
import cn from '../styles/ClassNames.scss'
import classNames from 'classnames';

function ClassnameGo() {
  const cs = `${cn.aaa} ${cn.bbb}`;
  return (
    <div>ClassnameGo
      <div className={cn.aaa}>aaa</div>
      <div className={cn.bbb}>bbb</div>
      <div className={cn.ccc}>ccc</div>
      <div className={`${cn.aaa} ${cn.bbb}`}>aaa+bbb</div>
      <div className={`{${cn.aaa} ${cn.bbb}} ${cn.ccc}`}>eee</div>


      <div className={classNames(cs)}>eee</div>
      <div className={classNames(cs)}>eee</div>
    </div>
  )
}

export default ClassnameGo