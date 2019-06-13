import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
    state = {
        firstName: localStorage.getItem("firstName") || ""
    };

    signOutHandler = () => {
        localStorage.clear();
        window.location.pathname = "/";
    };

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark sticky-top py-0 main-navbar">
                {/********** BRAND **********/}
                <a className="navbar-brand" href="/">
                    {/* <img src={logo} alt="logo" /> */}
                    React Social App
                </a>
                {/********** TOGGLER BUTTON **********/}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {/********** COLLAPSE WRAPPER **********/}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/********** NAVBAR LINKS **********/}
                    <div className="navbar-nav">
                        <a
                            className={
                                window.location.pathname === "/"
                                    ? "nav-item nav-link text-white px-0 mx-3 this-tab"
                                    : "nav-item nav-link text-white px-0 mx-3"
                            }
                            href="/">
                            <i className="fas fa-home" aria-hidden="true" /> Home
                        </a>
                        <a
                            className={
                                window.location.pathname.startsWith("/profile")
                                    ? "nav-item nav-link text-white px-0 mx-3 this-tab"
                                    : "nav-item nav-link text-white px-0 mx-3"
                            }
                            href={"/profile/" + localStorage.getItem("username")}>
                            <i className="fas fa-user" aria-hidden="true" /> Profile
                        </a>
                        <a
                            className={
                                window.location.pathname.startsWith("/photos")
                                    ? "nav-item nav-link text-white px-0 mx-3 this-tab"
                                    : "nav-item nav-link text-white px-0 mx-3"
                            }
                            href={"/photos/" + localStorage.getItem("username")}>
                            <i className="fas fa-images" aria-hidden="true" /> Photos
                        </a>
                        <a
                            className={
                                window.location.pathname.startsWith("/events")
                                    ? "nav-item nav-link text-white px-0 mx-3 this-tab"
                                    : "nav-item nav-link text-white px-0 mx-3"
                            }
                            href="/events">
                            <i className="fas fa-list-alt" aria-hidden="true" /> Events
                        </a>
                    </div>
                    {/********** DROPDOWN **********/}
                    <div className="nav-item dropdown ml-auto">
                        <a
                            href="/"
                            className="nav-link dropdown-toggle text-white px-0"
                            // href={"/profile/" + localStorage.getItem("username")}
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            {this.state.firstName}
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="navbarDropdown">
                            <div className="dropdown-divider" />
                            <a href="/" className="dropdown-item" onClick={this.signOutHandler}>
                                <i className="fas fa-sign-out" aria-hidden="true" /> Sign
                                out
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
