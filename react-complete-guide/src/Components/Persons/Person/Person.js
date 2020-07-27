import React from 'react';
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

const person = (props) => {
    // const style = {
    //   '@media (min-width: 500px)': { // default css media query in jsx
    //     width: "450px",
    //   }
    // };

    return (
        // <div className="Person" style={style}>
        <div className={classes.Person}>
            <p onClick={props.click}>I'm contain {props.name} name and {props.age} age!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person; //High Order Component (Radium)