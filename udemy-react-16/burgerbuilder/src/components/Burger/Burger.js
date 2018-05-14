import React from 'react'
import classes from './Burger.css'
import Ingredients from './Ingredients/Ingredients'

export default props => {
  return (
    <div className={classes.Burger}>
      <Ingredients type="bread-top"/>
      <Ingredients type="cheese"/>
      <Ingredients type="meat"/>
      <Ingredients type="bread-bottom"/>
    </div>
  )
}