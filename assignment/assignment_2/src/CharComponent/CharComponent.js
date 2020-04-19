import React from "react";
import "./style.css";

const CharComponent = (props) => {
    return (
        <div className="charComponent">
            <p onClick={props.click}>{props.letter}</p>
        </div>
    );
};

export default CharComponent;