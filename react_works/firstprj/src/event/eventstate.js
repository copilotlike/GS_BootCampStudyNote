import { useState } from "react"

export function EventState() {

    const [pname, setPname] = useState('');
    const [hobby, setHobby] = useState('');

    const pnameChange = (e) => {
        setPname(e.target.value)
        console.log('pnameChange', e.target.value, e.target.hobby)
    }

    const hobbyChange = (e) => {

        const vv = e.target.value

        if(e.target.checked){
            setHobby([...hobby, e.target.value])
        }else {
            setHobby(hobby.filter((item)=> item !== vv))
        }
        console.log('hobbyChange',e.target.value, e.target.checked)
    }
    return <>
        <h2>이벤트 state입니다.</h2>
        <div>이름 : {pname}</div>
        <div>취미 : {hobby}</div>

        <form>
            이름 : <input value={pname} onChange={pnameChange} />
            <br/>
            취미 : <input type = 'checkbox' value='그림' onChange={hobbyChange} />
            운동 : <input type = 'checkbox' value='운동' onChange={hobbyChange} />
            먹기 : <input type = 'checkbox' value='먹기' onChange={hobbyChange} />
        </form>
        
    </>

}