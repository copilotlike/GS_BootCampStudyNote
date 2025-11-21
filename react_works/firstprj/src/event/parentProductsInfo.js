/**
 * 부모
 * 5개 제품정보
 * 나이키에어	10,000 2개
 * 나이키비어	80,000 4개
 * 나이키광어	11,000 5개
 * 나이키국어	75,000 3개
 * 나이키고어 60,000 4개
 * 
 * 자식
 * 나이키에어 .... ....
 * 10,000
 * 2
 */

import { Component } from "react";
import ChildProductInfo from "./childProductsInfo";

class ParentProductsInfo extends Component {
  state = {
    a1 : ['NikeAir', 10000, 2],
    a2 : ['NikEmpty',80000, 4],
    a3 : ['NikeFish', 11000, 5],
    a4 : ['Nikekorean', 75000, 3],
    a5 : ['NikeScary', 60000, 4]
  }


render(){
  return(
    <>
      <div>
        <ChildProductInfo name = {this.state.a1[0]}  price = {this.state.a1[1]} quantity = {this.state.a1[2]}/>
        <ChildProductInfo name = {this.state.a2[0]}  price = {this.state.a2[1]} quantity = {this.state.a2[2]}/>
        <ChildProductInfo name = {this.state.a3[0]}  price = {this.state.a3[1]} quantity = {this.state.a3[2]}/>
        <ChildProductInfo name = {this.state.a4[0]}  price = {this.state.a4[1]} quantity = {this.state.a4[2]}/>
        <ChildProductInfo name = {this.state.a5[0]}  price = {this.state.a5[1]} quantity = {this.state.a5[2]}/>
      </div>
    </>
  )
}
}

export default ParentProductsInfo