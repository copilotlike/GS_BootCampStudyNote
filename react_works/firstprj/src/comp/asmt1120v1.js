import { Component, Fragment } from "react";

class CardListChange extends Component{
    state ={
        name : '홍길동',
        scoreArray : [100,90,80],
        sum : (1+1),
        average : 0 ,
        ch: '',
        
    }


    fn1 = () => {
        this.setState({
            //(method) React.Component<any, any, any>.setState<string | number | symbol>(state: any, callback?: (() => void) | undefined): void
            scoreArray: reduce((acc, val) => {
                
            }),
            ch : '1px solid black',
            width: 300
        })
    }

    render() { //key array (x)
        return (
            <Fragment style = {{float: 'left'}}>
                <div style={{
                    border: this.state.ch}}>
                    {this.state.name}
                </div>
                <div>{this.state.scoreArray.join(',')}</div>
                <div>{this.state.sum}</div>
                <div>{this.state.average}</div>
                <button
                    onClick={this.fn1}>누르면 카드형임.</button>
            </Fragment>
        )
    }
}

export default CardListChange;