import { useState } from "react";
import balloon1 from "./event/example/풍선/01.png"
import balloon5 from "./event/example/풍선/05.png"

function Aa() {
    const [state1, setballoon1] = useState('');
    const clicks = (e) => {
        setballoon1('orange')
    }

    return <>
        <div>
            <div>
                <img src={balloon1} onClick={clicks} alt="풍선1" />
            </div>
            <div>
                <img style={{ backgroundColor: state1 }} src={balloon5} alt="풍선5" />
            </div>
        </div>
    </>
}

export default Aa;