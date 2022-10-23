import { useState, useEffect } from "react"

export default function Timer({time, setTimerUp}){
    const [timer, setTimer] = useState({
        minutes: time,
        seconds: 0
    })
    const [isTimeUp, setIsTimeUp] = useState(false)
   
    function countdown(){
        setTimer(prevTimer =>{
                if(prevTimer.minutes === 0 && prevTimer.seconds === 1){
                    setIsTimeUp(true)
                    setTimerUp(true)
                    return { ...prevTimer, seconds: 0 }
                }
                else if(prevTimer.seconds === 0){
                    return { minutes: prevTimer.minutes - 1, seconds: 59 }
                } else if( prevTimer.seconds > 0){
                    return { ...prevTimer, seconds: prevTimer.seconds - 1 }
                }
            })
    }

    useEffect(()=>{
        if(!isTimeUp) {
            setTimeout(()=>{
                countdown()
            }, 1000)        
        }
    })

    return (
        <div>
            <span>{timer.minutes} : {timer.seconds<10? "0":""}{timer.seconds}</span>
        </div>
    )
}