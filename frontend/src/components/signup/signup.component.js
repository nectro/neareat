import React, { useState } from 'react'
import classes from "./signup.module.css"
import Authentication from '../authentication/authentication.component'

function SignupComponent() {
    const [fields, setFields] = useState([
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
                <Authentication name={"Signup"} fields={fields}/>
            </div>
        </div>
    )
}

export default SignupComponent
