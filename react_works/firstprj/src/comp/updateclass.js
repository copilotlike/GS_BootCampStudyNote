import { Component } from "react";

let ee = 400;  

class AAA extends Component{

    state = {
        aa : 10,
        bb : '상어',
        arr : [11,22,33],
        cc : 200
    }

    fn1 = ()=>{
        this.setState({
            aa : this.state.aa +1,
            arr : [ ...this.state.arr , 99]
            //spread func -> 이거 쓰면 배열, 걍 붙이면 계속 2차원배열,, 속도 문제.
        })
        console.log('fn1 실행');
    }

    fn2=()=>{
        this.cc++
        console.log('fn2실행, this.cc')
    }

    render(){
        let dd =300; // 지역변수 재 랜더링시 초기화됨.

        let fn3 =() =>{
            dd++
            console.log('fn3 실행',dd)
        }

        let fn4 = ()=>{
            ee++;
            console.log('fn4 실행',ee);
        }
        return<>
            <h1>클래스 state</h1>
            <div> aa : {this.state.aa} </div>
            <div> bb : {this.state.bb} </div>
            <div> arr : {this.state.arr.join(',')} </div>
            <div> cc : {this.cc} </div>
            <div> dd: {dd}</div>
            <div> ee: {ee}</div>
            <button onClick={this.fn1}>fn1</button>
            <button onClick={this.fn2}>fn2</button>
            <button onClick={fn3}>fn3</button>
            <button onClick={fn4}>fn4</button>
        </>
    }
}

export default AAA;