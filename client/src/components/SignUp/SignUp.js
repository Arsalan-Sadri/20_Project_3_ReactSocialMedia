import React from "react";
import "./SignUp.css";
import API from "../../utils/API";

class SignUp extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPass: ""
    };

    inputChangeHandler = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    formSubmitHandler = event => {
        event.preventDefault();
        
        if (this.state.firstName && this.state.lastName
            && this.state.email && this.state.password
            && this.state.confirmPass) {
                if (this.state.password === this.state.confirmPass) {
                    API.signUp({
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        email: this.state.email,
                        password: this.state.password
                    })
                        .then(res => console.log(res))
                        .catch(err => console.log(err));
                }
                else alert(`WARNING!\nPasswords do NOT match!\nPlease try again later`);
                
        }
    };

    render() {
        return (
            <div className="my-form-wrapper">
                <form>
                    <div className="form-group">
                        <label htmlFor="first-name">First name:</label>
                        <input
                            id="first-name"
                            className="form-control"
                            value={this.state.firstName}
                            name="firstName"
                            onChange={this.inputChangeHandler}
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last name:</label>
                        <input
                            id="last-name"
                            className="form-control"
                            value={this.state.lastName}
                            name="lastName"
                            onChange={this.inputChangeHandler}
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            className="form-control"
                            value={this.state.email}
                            name="email"
                            onChange={this.inputChangeHandler}
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            className="form-control"
                            value={this.state.password}
                            name="password"
                            onChange={this.inputChangeHandler}
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm password:</label>
                        <input
                            id="confirm-password"
                            className="form-control"
                            value={this.state.confirmPass}
                            name="confirmPass"
                            onChange={this.inputChangeHandler}
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        className="btn btn-info"
                        onClick={this.formSubmitHandler}
                        type="submit">
                        Sign up
                    </button>
                </form>
            </div>
        );
    }
}

export default SignUp;
