import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  //state exists because App extends Component
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  switchNameHandler = ( newName ) => {
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = ( event ) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  render() {
    const { state: { persons } } = this
    const style = {
      backgroundColour: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hiiiiiiiiiiii</h1>
        {/* Alternative way of doing function calls, instead of bind(this) but not recommended */}
        <button style={style} onClick={()=>this.switchNameHandler('Maximillion')}>Switch Name</button>
        <Person
          name={persons[0].name}
          age={persons[0].age}/>
        <Person
          name={persons[1].name}
          age={persons[1].age}
          // you can pass in functions and call them from the component
          click={this.switchNameHandler.bind(this, 'Max!!!')}
          changed={this.nameChangedHandler}>
          My hobbies: Racing
        </Person>
        <Person
          name={persons[2].name}
          age={persons[2].age}/>
      </div>
    );
  }
}

export default App;