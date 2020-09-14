import React, {Component} from 'react';
import classes from "./Person.css";
import styled from "styled-components";
// import Radium from "radium";

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
    // const style = {
    //   '@media (min-width: 500px)': { // default css media query in jsx
    //     width: "450px",
    //   }
    // };


    render() {
        console.log('[Person.js] rendering')
        return (
            // <div className="Person" style={style}>
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm contain {this.props.name} name and {this.props.age} age!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }


};

export default Person; //High Order Component (Radium)