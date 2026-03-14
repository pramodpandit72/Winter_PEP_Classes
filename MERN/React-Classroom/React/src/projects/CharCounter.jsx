import React, { useState } from 'react'

const CharCounter = () => {

    const [text, setText] = useState("");

  return (
    <div className='bg-gray-100 h-screen w-full flex items-center justify-center'>

        <textarea rows={5} cols={20} value={text}
        onChange={(e) => setText(e.target.value)} className='bg-gray-200 border-2 rounded-2xl p-2 m-2'></textarea>
        <h3>Characters: {text.length}</h3>

    </div>
  )
}

export default CharCounter