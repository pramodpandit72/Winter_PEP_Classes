import React from 'react'

function PropsDrilling() {
  const name = "Pramod"
  return <Parent name={name} />
}

function Parent({name}) {
  return <Child name={name} />
}

function Child({name}) {
  return <GrandChild name={name} />
}

function GrandChild({name}) {
  return <h2>hello {name}</h2>
}

export default PropsDrilling