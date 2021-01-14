import React, { Component } from 'react';
import classes from './App.css';
import Person from '../Components/Persons/Person/Person';
import styled from "styled-components";
import Persons from '../Components/Persons/Persons'
// import Radium, { StyleRoot } from "radium";
import Cockpit from '../Components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Constructor')
  }

  state = {
    persons: [
      { id: 'dadwad', name: "Max", age: 24},
      { id: 'jfuisfhs', name: "John", age: 25},
      { id: 'fjsoif', name: "Phill", age: 17},
    ],
    otherState: 'Some other state...',
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props)

    return state
  }

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

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate')
  }

  render() {
    console.log('[App.js] render')

    let persons = null;


    if (this.state.showPersons === true){
      persons = (
          // <StyleRoot>

              <Persons 
                persons={ this.state.persons }
                clicked={ this.deletePersonHandler }
                changed={ this.nameChangedHandler }/>

          // </StyleRoot>
      );

    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
        /> : null}
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, "Test react App"))
  }
}

export default App; //Higher Order Component (Radium)