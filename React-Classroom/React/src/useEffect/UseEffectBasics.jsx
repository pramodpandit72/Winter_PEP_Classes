import React, { useEffect, useState } from 'react'

const UseEffectBasics = () => {
    const [count, setCount] = useState(0);

    function myfunc() {
        console.log("Hello");
    }
    // useEffect(() => {
    //     console.log("side effect ran");
    // })

    // useEffect(myfunc)

    useEffect(() => {
        console.log("side effect ran");
    }, [count])

return (
    <div className='h-screen bg-black w-full text-white'>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default UseEffectBasics