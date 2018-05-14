//most components don't need much they just return some html
import React from 'react'
import './Person.css'

// const person = ( { name, age, children } ) => {
//   // return <p>I'm a person and I am {Math.floor(Math.random()*100)} years old</p>
//   return (
//     <div>
//       <p>My name is {name} and I'm {age} years old</p>
//       <p>{children}</p>
//     </div>
//
//   )
// }

const person = ( props ) => {
  // return <p>I'm a person and I am {Math.floor(Math.random()*100)} years old</p>
  const style = {}

  return (
    <div className="Person" style={style}>
        <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
      </div>
  )
}

export default person
//
// functions: props.name, props.age
// classes: this.props.name, this.props.age