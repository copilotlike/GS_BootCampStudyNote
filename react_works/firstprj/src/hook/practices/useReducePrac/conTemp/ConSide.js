
import './ConTemp.css'


function ConSide(props) {
    const[aaa,fnSide] = useReducer('any:function',{vvv:'pink'})
    return (
        <aside className={props.theme}>
            사이드이지롱
            <button onClick={()=>props.fnSide('yellow')}>노랑</button>
        </aside>
    );
}

export default ConSide;