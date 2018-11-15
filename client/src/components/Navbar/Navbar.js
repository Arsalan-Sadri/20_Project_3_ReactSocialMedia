import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
    signOutHandler = () => {
        localStorage.clear();
        window.location.pathname = "/";
    };

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark sticky-top my-navbar">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a
                                className={
                                    window.location.pathname === "/"
                                        ? "nav-link active"
                                        : "nav-link text-white"
                                }
                                href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">|</span>
                        </li>
                        <li className="nav-item">
                            <a
                                className={
                                    window.location.pathname === "/user"
                                        ? "nav-link active"
                                        : "nav-link text-white"
                                }
                                href={"/user/"+localStorage.getItem("username")}>
                                Profile
                            </a>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">|</span>
                        </li>
                        <li className="nav-item">
                            <a
                                className={
                                    window.location.pathname === "/friends"
                                        ? "nav-link active"
                                        : "nav-link text-white"
                                }
                                href="/friends">
                                Friends
                            </a>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">|</span>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className={
                                    window.location.pathname === "/search"
                                        ? "nav-link active"
                                        : "nav-link text-white dropdown-toggle"
                                }
                                href="/"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                Search
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown">
                                <a
                                    className="dropdown-item"
                                    href={
                                        "/search-friends"
                                    }>
                                    Friends
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="search-events">
                                    Events
                                </a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a
                                    className={
                                        window.location.pathname === "/sign-up"
                                            ? "nav-link active"
                                            : "nav-link text-white"
                                    }
                                    href="/sign-up">
                                    Sign Up
                                </a>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">|</span>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={
                                        window.location.pathname === "/sign-in"
                                            ? "nav-link active"
                                            : "nav-link text-white"
                                    }
                                    href="/sign-in">
                                    <i
                                        className="fa fa-sign-in"
                                        aria-hidden="true"
                                    />{" "}
                                    Sign in
                                </a>
                            </li>

                            <li className="nav-item">
                                <span className="nav-link">|</span>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={
                                        window.location.pathname === "/sign-out"
                                            ? "nav-link active"
                                            : "nav-link text-white"
                                    }
                                    href=""
                                    onClick={this.signOutHandler}>
                                    Sign out{" "}
                                    <i
                                        class="fa fa-sign-out"
                                        aria-hidden="true"
                                    />
                                </a>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;