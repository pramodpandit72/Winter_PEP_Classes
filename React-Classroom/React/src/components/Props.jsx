import React from 'react'

function Props() {

      function greet(){
    alert("Hello Students");
  }

  return <Button onClick={greet} />
}

function Button({ onClick }){
    return <button onClick={onClick} className='border-2 px-4 py-1'>Click me</button>
}

export default Props