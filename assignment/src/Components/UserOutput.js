import React, {Component} from "react";
import UserInput from "./UserInput";
import './style.css';


class UserOutput extends Component{
    render() {
        return (
            <div className='UserOutput'>
                <p>{this.props.name}</p>
                <p>Second UserOutput</p>
                {/*<UserInput ev={this.props.ev} name={this.props.name}/>*/}
            </div>
        );
    };
}

export default UserOutput;