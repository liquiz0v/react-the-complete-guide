import React, { Component } from 'react';
import classes from './App.css';
import Person from '../Components/Persons/Person/Person';
import styled from "styled-components";
import Persons from '../Components/Persons/Persons'
// import Radium, { StyleRoot } from "radium";

class App extends Component {
  state = {
    persons: [
      { id: 'dadwad', name: "Max", age: 24},
      { id: 'jfuisfhs', name: "John", age: 25},
      { id: 'fjsoif', name: "Phill", age: 17},
    ],
    otherState: 'Some other state...',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person1 = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow})
  };

  render() {
    let persons = null;
    let btnClass = [classes.Button];

    if (this.state.showPersons === true){
      persons = (
          // <StyleRoot>
            <div>
              <Persons 
                persons={ this.state.persons }
                clicked={ this.deletePersonHandler }
                changed={ this.nameChangedHandler }/>
            </div>
          // </StyleRoot>
      );
      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red); // ["red"]
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); // ["red", "bold"]
    }


    return (
      <div className={classes.App}>
        <h1>Test React App</h1>
        <p className={assignedClasses.join(" ")}>Some paragraph here</p>
        <button
            className={btnClass.join(" ")}
            alt={this.state.showPersons}
            onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, "Test react App"))
  }
}

export default App; //Higher Order Component (Radium)