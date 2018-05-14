import React from 'react'
import classes from './Burger.css'
import Ingredients from './Ingredients/Ingredients'

export default props => {
  const arrayIngredients = Object.keys( props.ingredients ).map( igkey => {
    return [ ...Array( props.ingredients[ igkey ] ) ].map( ( _, index ) => {
      <Ingredients key={igkey+index} type={igkey}/>
    } )
  } )

  return (
    <div className={classes.Burger}>
      <Ingredients type="bread-top"/>
      {arrayIngredients}
      <Ingredients type="bread-bottom"/>
    </div>
  )
}