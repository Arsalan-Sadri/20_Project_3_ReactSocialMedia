import React from "react";
import "./NavbarLanPg.css";

class NavbarLanPg extends React.Component {
    state = {};

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark sticky-top">
                {/********** BRAND **********/}
                <a className="navbar-brand" href="/">
                    {/* <img src={logo} alt="" /> */}
                    Logo
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
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    {/********** NAVBAR LINKS **********/}
                    <div className="mr-auto" />
                    {/********** SEARCH FORM **********/}
                    <form className="form-inline">
                        <input
                            className="form-control-sm mr-2"
                            type="text"
                            placeholder="Username"
                            aria-label="username"
                        />
                        <input
                            className="form-control-sm mr-2"
                            type="password"
                            placeholder="Password"
                            aria-label="password"
                        />
                        {/********** BUTTON **********/}
                        <button
                            className="btn btn-outline btn-sm text-white ml-1 mb-0"
                            type="submit">
                            <i className="fa fa-sign-in" aria-hidden="true" />{" "}
                            Sign in
                        </button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default NavbarLanPg;
