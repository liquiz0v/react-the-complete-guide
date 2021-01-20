import React from "react";
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    const attachedClasses = [classes.SideDrawer, props.open ? classes.Open : classes.Closed]
    return (
      <Aux className>
          <Backdrop show={props.open} onBackdropClick={props.onBackdropClick}/>

          <div className={attachedClasses.join(" ")}>
              <div className={classes.Logo}>
                  <Logo />
              </div>
              <nav>
                  <NavigationItems />
              </nav>
          </div>
      </Aux>
    );
};

export default sideDrawer;