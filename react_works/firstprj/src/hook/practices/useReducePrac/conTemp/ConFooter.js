import React, { useReducer } from 'react';
import './ConTemp.css'

function ConFooter(props) {
    const [aaa, fnFooter] = useReducer('any:function', { vvv: 'pink' })
    return (
        <footer className={props.theme}>
            푸터이지롱
            <button onClick={() => props.setFooter('pink')}>핑크</button>
        </footer>
    );
}

export default ConFooter;