import React from 'react'
import ciwaLogo from '../../assets/images/ciwa-logo.png'
import classes from './Logo.module.scss'

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={ciwaLogo} alt="CiwaLogo" />
    </div>
)

export default logo