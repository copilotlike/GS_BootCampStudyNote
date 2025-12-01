import React from 'react'
import classNames from 'classnames'
import cnbind from 'classnames/bind'

const cx = classNames.bind(cnbind);

function ClassNameBindGo(props) {
  return (
    <div>
      <h1>ClassNameBindGo</h1>
      <div className={cnst.aaa}>aaa</div>
      <div className={cnst.bbb}>bbb</div>
      {/* <div className={cnst.aaa}>aaa</div> */}
      <div className={classNames(`${cnst.aaa}`,`${cnst.bbb}`)}>aaa+bbb</div>
      <div className={cx('aaa','bbb')}>aaa+bbb</div>
      <div className={cx('aaa',props.st)}>aaa+ccc</div>
      <div className={cx('aaa',{'bbb':true})}>aaa+bbb</div>
      <div className={cx('aaa',{'bbb':false})}>aaa+bbb</div>
    </div>
  )
}

export default ClassNameBindGo