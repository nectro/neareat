import React from 'react'
import classes from "./header.module.css"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className={classes.majorContainer}>
            <div className={classes.headingCtn}>
                <div className={classes.heading}>
                    Neareat
                </div>
                <div className={classes.subMenu}>
                    <p>Restaurants</p>
                    <p>Cafe</p>
                </div>
            </div>
            <div className={classes.menu}>
                <p>Hello! Samaresh</p>
                <div className={classes.img}>

                </div>
            </div>
        </div>
    )
}

export default Header
