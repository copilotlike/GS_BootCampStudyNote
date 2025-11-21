import { Component } from "react";

let aa =0;
console.log(`asdf 이지롱 1 ${aa}`);
class BBB extends Component {

    bb=0;

    constructor() {
        super();
        aa++;
        this.bb++;
        console.log('BBB 생성자 실행')
    }

    render() {
        let cc =0;
        aa++;
        this.bb++;
        cc++;
        console.log(`asdf임 ${aa} ${this.bb} ${cc}`);
        return <div>BBB호출</div>
    }
}

export default BBB //클래스기반 component: component