import { useState, useRef, useEffect } from "react"

function Stopwatch() {
    const[isrunning,setIsrunning]=useState(false);
    const[elapsedTime,setElapsedTime]=useState(0);
    const intervalIdRef=useRef(null);
    const startTimeRef=useRef(0);

    useEffect(()=>{
        if (isrunning) {
            intervalIdRef.current=setInterval(() => {
                setElapsedTime(Date.now()-startTimeRef.current)
            }, 10);
        }
        return()=>{
            clearInterval(intervalIdRef.current);
        }
    },[isrunning]);

    function start() {
        setIsrunning(true);
        startTimeRef.current=Date.now()-elapsedTime;
    };

    function stop() {
        setIsrunning(false);
    };

    function reset() {
        setIsrunning(false);
        setElapsedTime(0);
        
        
    };

    function formatTime() {
        let hours=Math.floor(elapsedTime/(1000*60*60));
        let mins=Math.floor(elapsedTime/(1000*60)%60);
        let sec=Math.floor(elapsedTime/(1000)%60);
        let millisec=Math.floor((elapsedTime % 1000) / 10);
        
        hours=String(hours).padStart(2,"0");
        mins=String(mins).padStart(2,"0");
        sec=String(sec).padStart(2,"0");
        millisec=String(millisec).padStart(2,"0");
    
        return `${hours}:${mins}:${sec}:${millisec}`;
    };

    return(
        <div>
            <div>{formatTime()}</div>
            <div>
                <button onClick={start}>Start
                </button>
                <button onClick={stop}>Stop
                </button>
                <button onClick={reset}>Reset
                </button>
            </div>
        </div>
    )
}

export default Stopwatch