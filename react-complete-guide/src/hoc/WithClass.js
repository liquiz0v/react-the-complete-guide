import React from "react";

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}></WrappedComponent>
        </div>
    );
};

//
// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

export default withClass;