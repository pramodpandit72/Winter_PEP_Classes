import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='bg-black h-screen w-full flex items-center justify-center text-white'>
      {/* <Navbar x={2} y={4} /> */}
      {/* <Navbar x={4} y={8} />  */}

      <h1 className='text-4xl font-bold'>{count}</h1>
      <button className='bg-green-600 px-5 py-2 m-4 rounded-xl cursor-pointer text-xl font-bold' onClick={() => setCount(count + 1)}>Increment</button>
      <button className='bg-green-600 px-5 py-2 m-4 rounded-xl cursor-pointer text-xl font-bold' onClick={() => setCount(count - 1)}>Decrement</button>
      <button className='bg-green-600 px-5 py-2 m-4 rounded-xl cursor-pointer text-xl font-bold' onClick={() => setCount(0)}>Reset</button>
      
    </div>
  )
}

export default App