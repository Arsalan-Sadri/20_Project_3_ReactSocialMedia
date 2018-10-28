import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul className="navbar-nav">
          <li className="nav-item">
              <a className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} href="/">Home</a>
          </li>
          <li className="nav-item">
              <a className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"} href="/profile">Profile</a>
          </li>
          <li className="nav-item">
              <a className={window.location.pathname === "/friends" ? "nav-link active" : "nav-link"} href="/friends">Friends</a>
          </li>
      </ul>
  </nav>
);

export default Navbar;

