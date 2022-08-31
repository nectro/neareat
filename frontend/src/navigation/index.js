import React, {useState} from 'react'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../constants/routes.constant"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from '../components/header';

function Navigation() {

    const [isLoggedIn, setIsLoggedIn] = useState(true);


    return (
        <div>
            <Router>
                {
                    isLoggedIn &&
                    <Header />
                }
                <Routes>
                {
                    isLoggedIn &&
                    PRIVATE_ROUTES.map(route=>
                        <Route path={route.path} element={route.component} key={route.path}/>
                    )
                }
                {
                    PUBLIC_ROUTES.map(route=>
                        <Route path={route.path} element={route.component} key={route.path}/>
                    )
                }
                <Route path="*" element={<div>Not Found!</div>} />
                </Routes>
            </Router>
        </div>
    )
}

export default Navigation
