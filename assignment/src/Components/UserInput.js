import React, {Component} from "react";
import "./style.css";

class UserInput extends Component{
    render() {
        return (
            <div className='UserInput'>
                <input type="text" onChange={this.props.ev} value={this.props.name}/>
            </div>
        );
    };
}

export default UserInput;