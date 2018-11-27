import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LanPg from "./pages/LanPg";
import ProfilePg from "./pages/ProfilePg";
import PhotosPg from "./pages/PhotosPg";
import HomePg from "./pages/HomePg";
import "./App.css";

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={HomePg} />
            <Route exact path="/sign-up" component={LanPg} />
            <Route exact path="/sign-in" component={LanPg} />
            <Route exact path="/profile/:username" component={ProfilePg} />
            <Route exact path="/photos/:username" component={PhotosPg} />
            <Route exact path="/events/:username" component={PhotosPg} />
        </Switch>
    </Router>
);

export default App;
