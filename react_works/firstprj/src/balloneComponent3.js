import { useState } from "react";
import balloon3 from "./event/example/풍선/03.png"
import balloon7 from "./event/example/풍선/07.png"

function C1() {
    const [state3, setBalloon3] = useState('');
    const mouseOut = (e) => {
        setBalloon3('0.5')
    }

    return <>
        <div>
            <div>
                <img src={balloon3} onMouseDown={mouseOut} alt="풍선3" />
            </div>
            <div>
                <img style={{ opacity: state3 }} src={balloon7} alt="풍선7" />
            </div>
        </div>
    </>
}

export default C1