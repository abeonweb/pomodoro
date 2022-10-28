import { useState, useEffect } from "react"

export default function Timer({time}){
    const [clock, setClock] = useState({
        minutes: time,
        seconds: 0
    })
    const [isTimeUp, setIsTimeUp] = useState(false)
   
    function countdown(){
        setClock(prevClock =>{
                if(prevClock.minutes === 0 && prevClock.seconds === 1){
                    setIsTimeUp(true)
                    return { ...prevClock, seconds: 0 }
                }
                else if(prevClock.seconds === 0){
                    return { minutes: prevClock.minutes - 1, seconds: 59 }
                } else if( prevClock.seconds > 0){
                    return { ...prevClock, seconds: prevClock.seconds - 1 }
                }
        })
    }

    useEffect(()=>{
        let timer = setTimeout(()=> {
            if(!isTimeUp)
                countdown()
        }, 1000)
        
        return ()=> clearTimeout(timer)
    })

    return (
        <div className="clock">
            <span className="clock-face">{clock.minutes} : {clock.seconds<10? "0":""}{clock.seconds}</span>
        </div>
    )
}