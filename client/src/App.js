import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";

const App = () => (
    <React.Fragment>
        <Header />
        <Navbar />
        <div className="container-fluid">
            <Router>
                <Switch>
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/sign-in" component={SignIn} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </Router>
        </div>
        <Footer />
    </React.Fragment>
);

export default App;
