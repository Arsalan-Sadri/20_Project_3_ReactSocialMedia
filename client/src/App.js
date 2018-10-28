import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

const App = () => (
    <React.Fragment>
        <Header />
        <Navbar />
        <div className="container">
            <Router>
                <Switch>
                    {/* <Route exact path="/" component={Books} /> */}
                    <Route exact path="/sign-up" component={SignUp} />
                    {/* <Route exact path="/books/:id" component={Detail} /> */}
                    {/* <Route component={NoMatch} /> */}
                </Switch>
            </Router>
        </div>
        <Footer />
    </React.Fragment>
);

export default App;
