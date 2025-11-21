import { useState } from "react";
import balloon4 from "./event/example/풍선/04.png"
import balloon8 from "./event/example/풍선/08.png"

function D1() {
    const [state4, setballoon4] = useState('');
    const mouseUp = (e) => {
        setballoon4('rotate(90deg)')
    }

    return<>
    <div>
        <div>
            <img src={balloon4} onMouseUp={mouseUp} alt="풍선4" />
        </div>
        <div>
            <img style={{ transform: state4 }} src={balloon8} alt="풍선8" />
        </div>
    </div>
    </>
}

export default D1;