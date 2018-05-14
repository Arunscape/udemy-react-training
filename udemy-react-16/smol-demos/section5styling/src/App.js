import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  //state exists because App extends Component
  state = {
    persons: [
      { id: '09*)(*)', name: 'Max', age: 28 },
      { id: 'IOIHOUY89', name: 'Manu', age: 29 },
      { id: 'IO*Y*Y', name: 'Stephanie', age: 26 }
    ],
    otherstate: 'some other thing',
    showPersons: false
  }

  // switchNameHandler = ( newName ) => {
  //   this.setState( {
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   } )
  // }

  deletePersonHandler = ( index ) => {
    const persons = [ ...this.state.persons ] //make a copy so you don't modify original
    persons.splice( index, 1 )
    this.setState( { persons: persons } )
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id
    } )
    // const person = this.state.persons[ personIndex ]
    const person = { ...this.state.persons[ personIndex ] }
    //dont want to modify original
    person.name = event.target.value
    const persons = [ ...this.state.persons ]
    persons[ personIndex ] = person

    this.setState( { persons } )
  }

  togglePersonsHandler = () => {
    this.setState( {
      showPersons: !this.state.showPersons
    } )
  }

  render() {
    // const { state: { persons } } = this
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let p = null
    if ( this.state.showPersons ) {
      p = (
        <div>
          {this.state.persons.map((p,index) => {
            return (
              <Person
                click={this.deletePersonHandler.bind(this, index)}
                name={p.name}
                age={p.age}
                key={p.id}
                changed={(event)=>this.nameChangedHandler( event, p.id)}
              />)
          })}
          {/* <Person
            name={persons[0].name}
            age={persons[0].age}
            />

            <Person
            name={persons[1].name}
            age={persons[1].age}
            // you can pass in functions and call them from the component
            click={this.switchNameHandler.bind(this, 'Max!!!')}
            changed={this.nameChangedHandler}
            >My hobbies: Racing
            </Person>

            <Person
            name={persons[2].name}
            age={persons[2].age}
                /> */}
        </div>
      )
      style.backgroundColor = 'red'
    }

    const classes = []
    if ( this.state.persons.length <= 2 ) classes.push( 'red' )
    if ( this.state.persons.length <= 1 ) classes.push( 'bold' )
    return (

      <div className="App">
          <h1>Hiiiiiiiiiiii</h1>
          <p className={classes.join(' ')}> Wooaooaaaaahhhh</p>

          {/* Alternative way of doing function calls, instead of bind(this) but not recommended */}
          <button
            style={style}
            onClick={this.togglePersonsHandler}
          >Switch Name
          </button>

          {p}

        </div>

    );
  }
}

export default App;