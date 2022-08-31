import React, { useState } from 'react'
import classes from "./login.module.css"
import Authentication from '../authentication/authentication.component'

function LoginComponent() {
    const [fields, setFields] = useState([
        {
            name:"username",
            type:"text"
        },
        {
            name:"email",
            type:"email"
        },
        {
            name:"password",
            type:"password"
        },

    ])
    return (
        <div className={classes.majorContainer}>
            <div className={classes.formContainer}>
                <Authentication name={"Login"} fields={fields}/>
            </div>
        </div>
    )
}

export default LoginComponent
