import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    function start() {
        intervalRef.current = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000)
    }

    function stop() {
        clearInterval(intervalRef.current)
    }

  return (
    <div>
        <h2>{time}</h2>
        <button onClick={start} className='border-2 px-3 py-1' >Start</button>
        <button onClick={stop} className='border-2 px-3 py-1'>Stop</button>
    </div>
  )
}

export default StopWatch