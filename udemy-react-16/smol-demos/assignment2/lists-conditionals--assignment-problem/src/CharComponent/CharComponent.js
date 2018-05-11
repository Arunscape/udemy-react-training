import React from 'react'

const CharComponent = ( props ) => {
  return (
    <div
      style={props.style}
      onClick={props.click}>
      {props.char}
    </div>
  )
}

export default CharComponent