import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost } from '../actions'

class NewPost extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}/>
        <Field
          label="Categories"
          name = 'categories'
          component = {this.renderField}/>
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}/>
        <button
          type="submit"
          className="btn btn-success">
          Post
        </button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
    </form>


    )
  }

  onSubmit( values ) {
    // console.log( values )
    this.props.createPost( values, () => this.props.history.push( '/' ) )
    console.log( 'values: ', this )
  }
  renderField( field ) {
    const { meta: { touched, error } } = field
    const formclassname = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={formclassname}>
        <label>{field.label}</label>
        <input className='form-control'
          type="text"
          {...field.input} />
        <div className='text-help'>
      {touched ? error:''}
    </div>
      </div>
    )
  }
}
//ternary: condition ? do if true : do if false
var validate = values => {
  const errors = {}

  if ( !values.title ) { errors.title = "Enter a title!" }
  if ( !values.categories ) { errors.categories = "Enter at least one category!" }
  if ( !values.content ) { errors.content = "Enter some content" }
  //redux form assumes form is good if no errors, but if errors has properties, then no
  return errors
}

export default reduxForm( {
  form: 'PostsNewForm',
  validate
} )(
  connect( null, { createPost } )
  ( NewPost )
)