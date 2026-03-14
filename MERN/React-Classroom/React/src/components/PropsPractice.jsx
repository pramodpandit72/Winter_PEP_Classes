import React, { useState } from 'react'

function PropsPractice() {

  const [name, setName] = useState("");

  function greet() {
    alert("Hello " + name);
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} className='border-2 px-4 py-1' placeholder="name"/>

      <Button onClick={greet} />

    </div>
  )
}

function Button({ onClick }) {
  return (
    <button onClick={onClick} className='border-2 px-4 py-1'>
      Click me
    </button>
  )
}

export default PropsPractice