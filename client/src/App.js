import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LanPg from "./pages/LanPg";
import SignUpPg from "./pages/SignUpPg";
import ProfilePg from "./pages/ProfilePg";
import UpdatePg from "./pages/UpdatePg";
import PhotosPg from "./pages/PhotosPg";
import CreateEventPg from "./pages/CreateEventPg";
import EventsPg from "./pages/EventsPg";
import UploadPhotosPg from "./pages/UploadPhotosPg";
import "./App.css";

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={LanPg} />
            <Route exact path="/sign-up" component={SignUpPg} />
            <Route exact path="/sign-in" component={SignUpPg} />
            <Route exact path="/profile/:username" component={ProfilePg} />
            <Route exact path="/update-profile" component={UpdatePg} />
            <Route exact path="/photos/:username" component={PhotosPg} />
            <Route exact path="/events" component={EventsPg} />
            <Route exact path="/create-event" component={CreateEventPg} />
            <Route exact path="/upload-photos" component={UploadPhotosPg} />
        </Switch>
    </Router>
);

export default App;
