import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  constructor( props ) {
    super( props )
    this.state = {
      users: [ 'Arun', 'AAAAAAAA' ]
    }
    // this.inputHandler = this.inputHandler.bind( this )
    // this.buttonHandler = this.buttonHandler.bind( this )
  }


  buttonHandler = ( name ) => {
    this.setState( {
      users: [ name, 'Arun' ]
    } )
  }

  inputHandler = ( event ) => {
    this.setState( {
      users: [ 'Arun', event.target.value ]
    } )
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.buttonHandler.bind(this,'Testing')}>Click Me</button>
        <UserInput changed={this.inputHandler} />
        <UserOutput
          username={this.state.users[0]}
          change={this.buttonHandler}
        />
        <UserOutput username={this.state.users[1]}/>
      </div>
    );
  }
}

export default App;