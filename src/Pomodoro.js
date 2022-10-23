import { useState, useEffect } from "react"
import Timer from "./Timer"

export default function Pomodoro() {
    const [timerUp, setTimerUp] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            console.log("hold");
        }, 2000)   
    },[])
    return (
        <div>
            {!timerUp && <Timer time={2} setTimerUp={setTimerUp} />}
            {timerUp && <Timer time={1} setTimerUp={setTimerUp}/>}
        </div>

    )
}