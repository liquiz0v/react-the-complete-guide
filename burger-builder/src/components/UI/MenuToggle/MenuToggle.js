import React from "react";
import classes from './MenuToggle.module.css';
import PropTypes from 'prop-types';

const menuToggle = (props) => (
    <div onClick={props.onClickMenuButton} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

menuToggle.propTypes = {
    onClickMenuButton: PropTypes.func
}

export default menuToggle;