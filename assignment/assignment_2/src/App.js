import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from "./ValidationComponent/ValidationComponent.js";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component{
    state = {
        length: 0,
        splString: [],
    };

    calcLengthHandler = (event) => {
        let currentStateLength = event.target.value.length;

        const currentString = event.target.value.split("");

        this.setState({ length: currentStateLength, splString: currentString })
    };

    changeInputHandler = (index) => {
        const currentList = [...this.state.splString];
        currentList.splice(index, 1);

        this.setState({splString: currentList});

    };

    render(){
        const outLength = (
            <div>
                <p>{this.state.length}</p>
                {/*<p>{this.state.splString.toString()}</p>*/}
                <input type="text" value={this.state.splString.join("")} onChange={(event => this.calcLengthHandler(event))} />
                <Validation length={this.state.length} />
            </div>
        );

        const letterOutput = (
            <div>
                {this.state.splString.map((i, index) => {
                    return <CharComponent letter={i}
                                          key={index}
                                          click={() => this.changeInputHandler(index)}/>
                })}
            </div>
        );

        return(
            <div className="App">
                {outLength}
                {letterOutput}
                {/*<CharComponent/>*/}
            </div>
        );
    };
};

export default App;
