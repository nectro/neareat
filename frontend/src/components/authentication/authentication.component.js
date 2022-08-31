import React from 'react'
import classes from './authentication.module.css'

function Authentication({ name, fields }) {
    return (
        <form className={classes.majorCtn}>
            <h3 className={classes.heading}>{name}</h3>
            {
                fields.map((field,index)=>
                <div key={index} className={classes.field}>
                    <p className={classes.label}>{field.name}</p>
                    <input type={field.type} name={field.name} className={classes.inp} placeholder={field.name}/>
                </div>
                )
            }
            <input type="submit" className={classes.button}/>
        </form>
    )
}

export default Authentication
