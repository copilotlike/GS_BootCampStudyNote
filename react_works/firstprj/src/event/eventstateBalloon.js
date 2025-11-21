import { useState } from "react"

import B1 from "../balloneComponent1"
import B2 from "../balloneComponent2"
import B3 from "../balloneComponent3"
import B4 from "../balloneComponent4"
import '../event/eventStateBalloon.css'

export function EventStateBalloon() {






    return <>
        <h2>이벤트 state입니다.</h2>
        <div style={{display: 'inline-flex'}}>
            <B1 style={{display: 'inline-flex'}} />
            <B2 style={{display: 'inline-flex'}} />
            <B3 style={{display: 'inline-flex'}} />
            <B4 style={{display: 'inline-flex'}} />
        </div>
    </>


}