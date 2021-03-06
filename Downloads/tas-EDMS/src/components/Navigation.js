import { blue } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { BrowserRouter, Route, Switch, Link, NavLink, useHistory } from "react-router-dom";


// import Button from "../helperComponents/Button";
import Logo from "../components/Logo"

const Navigation = (props) => {

    const [value, setValue] = useState('');

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    })

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            if (!value) {
                setValue('blue fix-bar')
            }
        } else {
            if (value) {
                setValue('')
            }
        }

    }


    return (

        <nav className="navigation" style={props.style}>
            <div className={`info-text ${value}`}>
                <p>Transparency Acountability Sustainability</p>
                <p>services@nea.com.ng</p>
            </div>

            <div className={`app-bar ${value}`}>

                <div id="logo-spacer" >
                    <Logo />
                </div>

                <div className="spacer"></div>

                <ul>

                    <div className="pages-navs">
                        <li onClick={(e) => { props.navigate(e, "/home") }}><a href="">Home</a></li>
                        <li onClick={(e) => { props.navigate(e, "/ninverification") }}><a href="">verify-NIN</a></li>
                        <li onClick={(e) => { props.navigate(e, "/home") }}><a href="">About Us</a></li>
                        <li onClick={(e) => { props.navigate(e, "/home") }}><a href="">FAQs</a></li>

                    </div>
                    <div className="buttons">
                        <li id="home-login-btn" onClick={(e) => { props.navigate(e, "/signin") }}><a href="" >Login</a></li>
                        <li id="home-signup-btn" onClick={(e) => { props.navigate(e, "/signup") }} ><a href="" >Sign Up</a></li>
                    </div>

                </ul>
            </div>

        </nav>

    )
}
export default Navigation;

