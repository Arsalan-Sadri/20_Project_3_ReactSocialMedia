import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <div className="container">
      <br></br>
      <Navbar />
      {/* <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch> */}
    </div>
  </Router>
);

export default App;
