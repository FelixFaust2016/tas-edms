import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MainPage from "../pages/MainPage";
// import SignUp from "../pages/SignUp";


const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/home" component={LandingPage} />
        {/* <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} /> */}
        {/* <Route path="/ninverification" component={NINverification} /> */}


    </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;