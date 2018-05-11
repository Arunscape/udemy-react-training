import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    inputlength: 0,
    intxt: ''
  }

  inputChangeHandler = ( event ) => {
    this.setState( { inputlength: event.target.value.length, intxt: event.target.value } )
  }

  deleteBoxHandler = ( index ) => {
    // const b = [ ...this. ]

  }

  // console.log( letterarray )
  render() {
    const style = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black'
    }

    const letterarray = [ ...new Set( this.state.intxt ) ]
    // console.log( letterarray )

    // const letters = [];
    // WANT: ['a', 'b', 'c', 'd'] =>
    // [
    // {id:a},
    // {id:b},
    // {id:c},
    // {id:d}
    // ]

    // letterarray.forEach( l => { letters.push( { id: l, char: l } ) } )
    // console.log( letters )

    return (
      <div className="App">
        <input
          type="text"
          onChange={(event)=>this.inputChangeHandler(event)}
        />

        <p>Length of text entered: {this.state.inputlength}</p>

        <ValidationComponent len={this.state.inputlength}/>

        {letterarray.map((c, idx)=>{
          return (
            <CharComponent
              key={c}
              style={style}
              char={c}
              click= {this.deleteBoxHandler.bind(this, idx)}
            />
          )
        })}

      </div>
    );
  }
}

export default App;