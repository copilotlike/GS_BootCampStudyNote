import { useState } from "react"
import LifeCycle from "./lifeCycle"

export function LifePar() {
  
  const [showChild, setShowChild] = useState()

  return <>
    <h1>lifePar 입니다.</h1>
    <button onClick={() => setShowChild(!showChild)}>hidden LifeCycle{showChild ? "숨기기" : "보이기"}</button>
    {showChild  && <LifeCycle pVV={1234}/>}
  </>
}