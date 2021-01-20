import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import React, {Component} from 'react';

class Layout extends Component {
    state = {
        isSideDrawerShown: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({isSideDrawerShown: false})
    }

    menuClickHandler = () => {
        this.setState(prevState => {
            return {isSideDrawerShown: !prevState.isSideDrawerShown}
        });
    }


    render() {
        return (
            <Aux>
                <SideDrawer open={this.state.isSideDrawerShown} onBackdropClick={this.sideDrawerClosedHandler} />
                <Toolbar onClickMenuButton={this.menuClickHandler}/>
                {/*<div>ToolBar, SideDrawer, Backdrop</div>*/}

                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;