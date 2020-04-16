import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './Components/UserOutput'
import UserInput from './Components/UserInput'

class App extends Component {
    state = {
        names: [
            {name: 'Kate'},
            {name: 'Paul'},
            {name: 'Jane'}
    ]};

    nameStateHandler = (event) => {
        this.setState([
            {name: event.target.value},
            {name: event.target.value},
            {name: event.target.value}
        ]);
    };

    render() {

        return (
            <div>
                <UserOutput name={this.state.names[0].name}  />
                <UserOutput name={this.state.names[1].name} ev={this.nameStateHandler} />
                <UserOutput name={this.state.names[2].name} ev={this.nameStateHandler} />
                <UserInput ev={this.nameStateHandler} name={this.state.names[0].name}/>
            </div>
        );
    };
};

export default App;
