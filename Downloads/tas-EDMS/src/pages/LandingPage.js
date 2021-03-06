import React, { useState } from "react";
import { connect } from "react-redux";

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';



const LandingPage = (props) => {

    const nextSlideHandler = React.useRef()
    const previousSlideHandler = React.useRef()
    const [slide, setSlide] = useState(1);


    const navigateToLogin = (e, page) => {
        e.preventDefault()
        props.history.push(page)
    }

    return (
        <div className="landing">

            <Navigation navigate={navigateToLogin}/>

            

            <Footer />
        </div>
    )

}

export default connect()(LandingPage);


