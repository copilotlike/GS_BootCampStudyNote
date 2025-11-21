import { Component, createRef, Fragment } from "react";

export class ClassRef extends Component{

    constructor(props){
        super(props)
        console.log('AAA 생성자')
    }
    boxRef = createRef();

    fn1=()=>{console.log('인풋 커서 들어옴.')}

    componentDidMount(){
        console.log('componentDidMount() 실행')
        this.boxRef.current.addEventListener('focus',this.fn1)
    }

    componentWillUnmount(){
        this.boxRef.current.removeEventListener('focus',this.fn1)
    }

    render(){
        return(
        <Fragment style={{display: 'flex'}}>
            <p>응</p>
            <input ref={this.boxRef}/>
        </Fragment>
        )
    }
}