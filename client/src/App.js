import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const App = () => (
    <React.Fragment>
        <Header />
        <div className="container">
            <Navbar />
            <Router>
                {/* <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch> */}
            </Router>
        </div>
    </React.Fragment>
);

export default App;
