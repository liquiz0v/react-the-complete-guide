import React, {Component} from 'react';
import classes from "./Person.css";
import styled from "styled-components";
import Aux from '../../../hoc/Aux'
import withClass from "../../../hoc/WithClass";
// import Radium from "radium";
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

const StyledDiv = styled.div`
            width: 60%;
            margin: 16px auto;
            border: 1px solid #eeeeee;
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;

            @media (min-width: 500px) {
                 width: 450px;  
            }`; // new component served by third-party library (already component, so we don't need () =>)

class Person extends Component{
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext; // Method for accessing context in React Class-based components.
    // It's managed by context API

    // const style = {
    //   '@media (min-width: 500px)': { // default css media query in jsx
    //     width: "450px",
    //   }
    // };
    componentDidMount() {
        // Both of methods are uses references to get focused on last element
        // this.inputElement.focus()
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering')
        return (
            // <div className="Person" style={style}>
            //<div className={classes.Person}>
            // In react 16.2 was introduced React.Fragment, works like an Aux
            <React.Fragment>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please, log in!</p>}
                <p onClick={this.props.click}>I'm contain {this.props.name} name and {this.props.age} age!</p>
                <p>{this.props.children}</p>
                <input type="text"
                       // ref={(inputEL) => {this.inputElement = inputEL}}
                       ref={this.inputElementRef}
                       onChange={this.props.changed}
                       value={this.props.name}/>
            </React.Fragment>
            //</div>
        )
    }


}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person); //High Order Component (Radium)