import './ConTemp.css'

function ConMain(props) {
    const[aaa,fnMain] = useReducer('any:function',{vvv:'pink'})
    return (
        <main className={props.theme}>
            메인이지롱
        </main>
    );
}

export default ConMain;