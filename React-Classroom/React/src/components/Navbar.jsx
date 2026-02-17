import React from 'react'

function Navbar (props) {
  return (
    <div>
        <h1>{props.x + props.y}</h1>
    </div>
  )
}

export default Navbar