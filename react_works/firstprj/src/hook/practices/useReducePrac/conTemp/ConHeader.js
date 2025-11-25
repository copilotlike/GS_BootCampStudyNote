import './ConTemp.css'

function ConHeader(props) {
    const[aaa,fnHeader] = useReducer('any:function',{vvv:'pink'})

    return (
        <header className={props.theme}>
            헤더입니다.
            <button onClick={()=>props.fnHeader('dark')}>dark</button>
            
        </header>
    );
}

export default ConHeader;