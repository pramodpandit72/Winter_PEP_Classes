import React, { useState } from 'react'

const DarkLightMode = () => {
    const [color, setColor] = useState("white")
    // const [icon, setIcon] = useState("🌙")

    // function toggleTheme() {
    //     if(color === "white"){
    //         setColor("black")
    //     }else{
    //         setColor("white")
    //     }
    // }

  return (
    <div className='h-screen w-full flex flex-col items-center justify-center' style={{backgroundColor: color, color: color === "black" ? "white" : "black"}}>
        <h1>{ color === "white" ? "Light Mode ☀️" : "Dark Mode 🌙"}</h1>
        <button onClick={() => setColor(color === "white" ? "black" : "white")}
        className='bg-gray-200 rounded-xl cursor-pointer px-5 py-1 text-black'>Toggle Theme</button>
    </div>
  )
}

export default DarkLightMode