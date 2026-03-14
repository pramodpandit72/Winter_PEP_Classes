import React from 'react'
import Child from './Child'

const Parent = ({name}) => {
  return (
    <Child name={name} />
  )
}

export default Parent