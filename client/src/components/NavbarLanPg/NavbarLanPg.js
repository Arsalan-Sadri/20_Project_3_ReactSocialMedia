import React from "react";
import "./NavbarLanPg.css";
import API from "../../utils/API";

class NavbarLanPg extends React.Component {
    state = {
        email: "",
        password: ""
    };

    inputChangeHandler = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    signInHandler = event => {
        event.preventDefault();

        if (this.state.email && this.state.password) {
            const userCredential = {
                email: this.state.email,
                password: this.state.password
            };

            API.signIn(userCredential)
                .then(res => {
                    switch (res.data) {
                        case "Email not found!":
                            alert(
                                `WARNING!\nThere is no account associated with this email address!`
                            );
                            break;
                        case "Wrong password!":
                            alert(`WARNING!\nPassword is wrong!`);
                            break;
                        default:
                            localStorage.clear();
                            localStorage.setItem("token", res.data.token);
                            localStorage.setItem("username", res.data.username);
                            window.location.pathname =
                                "/profile/" + localStorage.getItem("username");
                    }
                })
                .catch(err => console.log(err));
        } else alert(`WARNING!\nPlease fill in your credential!`);
    };

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark sticky-top">
                {/********** BRAND **********/}
                <a className="navbar-brand log-LanPg" href="/">
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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/********** NAVBAR LINKS **********/}
                    <div className="mr-auto" />
                    {/********** SIGN IN FORM **********/}
                    <form className="form-inline">
                        <input
                            className="form-control-sm mr-2"
                            type="text"
                            aria-label="email"
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.inputChangeHandler}
                        />
                        <input
                            className="form-control-sm mr-2"
                            type="password"
                            aria-label="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.inputChangeHandler}
                        />
                        {/********** BUTTON **********/}
                        <button
                            className="btn btn-outline btn-sm text-white ml-1 mb-0"
                            onClick={this.signInHandler}>
                            <i className="fa fa-sign-in" aria-hidden="true" /> Sign in
                        </button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default NavbarLanPg;
