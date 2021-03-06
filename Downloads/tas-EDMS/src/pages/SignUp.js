import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Link, NavLink, useHistory } from "react-router-dom";

import Logo from "../components/Logo";
// import Button from "../helperComponents/Button";

const SignUp = (props) => {
    const history = useHistory();

    const handleSignUp = (e) => {
        e.preventDefault();
        history.push("/home");
    }

    const handleChange = () => {

    }

    const handleSubmit = () => { }

    return (
        <div className="signup">
            <div className="logo-side">
                <div className="logo">
                    <Logo />
                </div>
                <div style={{ position: 'relative' }} className="tec">
                    <div className="welcome-text">
                        <h1>HEY!, Lets get you set up !</h1>
                    </div>
                    <div className='balloon'></div>
               
                </div>
            </div>
            <div className="form-side">
                <div className="center-form">
                    <div className="centered-box" >
                        <h1 className="reg-text">Register</h1>
                        <span><p id="create-text">Create an account with NEA</p></span>
                        <form onSubmit={handleSignUp}>
                            <div className="name">
                                <input required className='no' name='firstname' onChange={handleChange} placeholder="First Name"></input>
                                <input required className='nv' name='lastname' onChange={handleChange} placeholder="second Name"></input>
                            </div>
                            <input required className="na" name='phone' onChange={handleChange} placeholder="Phone Number eg 081"></input>
                            <input required className="na" name='email' onChange={handleChange} placeholder="Email Address" type='email'></input>
                            <input required className="na" pattern=".{8,}" name='password' onChange={handleChange} placeholder="Password" type="password" title="3 characters minimum"></input>
                            <div className="bt">
                                {/* <Button name={"Continue"} /> */}
                                <button className='bt'>SIGN UP</button>
                            </div>
                        </form>
                        <div className="foot">
                            {/* <div><span>Sign up with Instagram page
                            <i style={{ color: '#2F80ED', fontSize: "25px", marginLeft: '5px' }} className="fab fa-instagram"></i></span></div>
                        <br /> */}
                            <div id="have-account">Have an Account? <pan><Link to="/signin" className="textDeco-none"> Sign In</Link></pan></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect()(SignUp);