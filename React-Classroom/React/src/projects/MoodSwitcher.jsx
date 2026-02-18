import React, { useState } from 'react'

function MoodSwitcher() {

    const [mood, setMood] = useState("😀")

  return (
    <div className='h-screen w-full flex items-center justify-center bg-gray-400'>
        <h1>{mood}</h1>

        <button className='border-2 rounded px-4 py-1 m-4 cursor-pointer bg-green-400' onClick={() => setMood("😂")}>Happy</button>
        <button className='border-2 rounded px-4 py-1 m-4 cursor-pointer bg-green-400' onClick={() => setMood("😒")}>sad</button>

    </div>
  )
}

export default MoodSwitcher