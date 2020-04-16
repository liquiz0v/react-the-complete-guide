import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 24},
      { name: "John", age: 25},
      { name: "Phill", age: 17},
    ],
    otherState: 'Some other state...',
    showPersons: false
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 18},
        { name: event.target.value, age: 25},
        { name: "Phill", age: 27},
      ]});
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow})
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons === true){
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}/>
            })}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Test React App</h1>
        <p>Some paragraph here</p>
        <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, "Test react App"))
  }
}

export default App;