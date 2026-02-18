import React, { useState } from 'react'

function ColorChange() {

    const [color, setColor] = useState("white");

  return (
    <div className='h-screen w-full' style={{ backgroundColor: color, color: color === "black" ? "white" : "white" }}>
        <h1 className='text-2xl'>Change Background Color</h1>

        <button className='border-2 rounded px-4 py-1 m-4 cursor-pointer bg-gray-400' onClick={() => setColor("red")}>Red</button>
        <button className='border-2 rounded px-4 py-1 m-4 cursor-pointer bg-gray-400' onClick={() => setColor("blue")}>Blue</button>
        <button className='border-2 rounded px-4 py-1 m-4 cursor-pointer bg-gray-400' onClick={() => setColor("green")}>Green</button>
        <button className='border-2 rounded px-4 py-1 m-4 cursor-pointer bg-gray-400' onClick={() => setColor("black")}>Black</button>

    </div>
  )
}

export default ColorChange