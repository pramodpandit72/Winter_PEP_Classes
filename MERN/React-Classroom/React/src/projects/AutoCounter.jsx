import React, { useEffect, useState } from 'react'

const AutoCounter = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if(!isRunning) return;

        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000)

        return () => clearInterval(interval);
    }, [isRunning])

  return (
    <div className='bg-black h-screen w-full text-white flex flex-col items-center justify-center text-4xl'>
        <h2>Auto Counter</h2>
        <h3>{count}</h3>

        <button onClick={() => setIsRunning(true) } className='rounded-xl border-2 px-4 py-0.5 m-2'>Start</button>
        <button onClick={() => setIsRunning(false) } className='rounded-xl border-2 px-4 py-0.5 m-2'>Stop</button>
        <button onClick={() => {setCount(0); setIsRunning(false)}} className='rounded-xl border-2 px-4 py-0.5'>Reset</button>

    </div>
  )
}

export default AutoCounter