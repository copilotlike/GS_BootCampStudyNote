import { useState } from "react";
import balloon2 from "./event/example/풍선/02.png"
import balloon6 from "./event/example/풍선/06.png"

function B1() {
    const [state2, setballoon2] = useState('');
    const mouseOver = (e) => {
        setballoon2('10px 10px 5px gray')
    }

    return <>
        <div>
            <div>

                <img src={balloon2} onMouseUp={mouseOver} alt="풍선2" />
            </div>
            <div>

                <img style={{ transform: state2 }} src={balloon6} alt="풍선6" />
            </div>
        </div>
    </>
}
export default B1;