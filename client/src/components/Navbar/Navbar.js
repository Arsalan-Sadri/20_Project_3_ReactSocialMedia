import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
    state = {
        username: localStorage.getItem("username") || ""
    };

    signOutHandler = () => {
        localStorage.clear();
        window.location.pathname = "/";
    };

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark sticky-top py-0">
                {/********** BRAND **********/}
                <a className="navbar-brand" href="/">
                    {/* <img src={logo} alt="logo" /> */}
                    LOGO
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
                            href={"/user/" + localStorage.getItem("username")}>
                            <i className="fas fa-user" aria-hidden="true" /> Profile
                        </a>
                        <a
                            className={
                                window.location.pathname.startsWith("/photos")
                                    ? "nav-item nav-link text-white px-0 mx-3 this-tab"
                                    : "nav-item nav-link text-white px-0 mx-3"
                            }
                            href={
                                "/photos/" + localStorage.getItem("username")
                            }>
                            <i className="fas fa-images" aria-hidden="true" /> Photos
                        </a>
                        <a
                            className={
                                window.location.pathname.startsWith("/events")
                                    ? "nav-item nav-link text-white px-0 mx-3 this-tab"
                                    : "nav-item nav-link text-white px-0 mx-3"
                            }
                            href="/">
                            <i className="fas fa-list-alt" aria-hidden="true" /> Events
                        </a>
                    </div>
                    {/********** DROPDOWN **********/}
                    <div className="nav-item dropdown ml-auto">
                        <a
                            className={
                                window.location.pathname.startsWith("/photos")
                                    ? "nav-link dropdown-toggle text-white px-0 this-tab"
                                    : "nav-link dropdown-toggle text-white px-0"
                            }
                            href="/"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            Signed in
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="navbarDropdown">
                            <a
                                className="dropdown-item"
                                href={"/user/" + localStorage.getItem("username")}>
                                <i>{this.state.username}</i>
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" onClick={this.signOutHandler}>
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
