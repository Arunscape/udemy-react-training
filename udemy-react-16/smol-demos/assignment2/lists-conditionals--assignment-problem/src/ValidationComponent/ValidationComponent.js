import React from 'react'

const ValidationComponent = ( props ) => {
  let out
  if ( props.len < 6 ) {
    out = 'Text NOT long enough'
  } else {
    out = 'Text long enough'
  }
  return (
    <div>
      <p>{out}</p>
    </div>
  )
}

export default ValidationComponent