import React from "react";

const validationComponent = (props) => {
    const analyzer = (props) => {
        if(props.length <= 5){
            return 'Text is too short.';
        }
        else {
            return 'Text is long enough.';
        };
    };

    return (
        <div>
            <p>{analyzer(props)}</p>
        </div>
    );
};

export default validationComponent;