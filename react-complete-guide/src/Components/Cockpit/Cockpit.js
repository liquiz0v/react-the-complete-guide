import React, { useEffect, useRef, useContext } from 'react'
import AuthContext from '../../context/auth-context';

import classes from "./Cockpit.css"

const cockpit = (props) => {
    const toggleBtnRef = useRef(null)
    const authContext = useContext(AuthContext); // React hook for accessing Context.

    console.log(authContext.authenticated)

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // Executed when component is updated, or created
        // setTimeout(() => {
        //     alert('Saved some data to the cloud')
        // }, 1000);
        toggleBtnRef.current.click()
        return () => {
            console.log('[Cockpit.js] cleanup in useEffect')
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () => {
            console.log('[Cockpit.js] cleanup in 2nd useEffect')
        }
    });

    const assignedClasses = [];

    let btnClass = [classes.Button];
    if(props.showPersons){
        btnClass.push(classes.Red);
    }

    if(props.personsLength <= 2){
        assignedClasses.push(classes.red); // ["red"]
    }
    if(props.personsLength <= 1){
        assignedClasses.push(classes.bold); // ["red", "bold"]
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>Some paragraph here</p>
            <button
                ref={toggleBtnRef}
                className={btnClass.join(" ")}
                onClick={props.clicked}>Toggle persons</button>

            <button
                className={btnClass.join(" ")}
                onClick={authContext.login}>Log In</button>

        </div>
    );
};

export default React.memo(cockpit); // Lets memorize this component, until it's not changed.