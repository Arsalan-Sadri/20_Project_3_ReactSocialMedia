import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SignUp from "./components/SignUp";

const App = () => (
    <React.Fragment>
        <Header />
        <div className="container">
            <Navbar />
            <Router>
                <Switch>
                    {/* <Route exact path="/" component={Books} /> */}
                    <Route exact path="/sign-up" component={SignUp} />
                    {/* <Route exact path="/books/:id" component={Detail} /> */}
                    {/* <Route component={NoMatch} /> */}
                </Switch>
            </Router>
        </div>
    </React.Fragment>
);

export default App;
