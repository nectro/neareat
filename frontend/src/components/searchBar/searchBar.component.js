import React from 'react'
import classes from './searchBar.module.css'

function SearchBarComponent() {
    return (
        <div className={classes.majorContainer}>
            <div className={classes.textInp}>
                <div className={classes.textContainer}>
                    <input type="text" className={classes.searchTxt} />
                </div>
                <div className={classes.filterContainer}>
                    
                </div>
                <div className={classes.buttonContainer}>
                    
                </div>
            </div>
        </div>
    )
}

export default SearchBarComponent
