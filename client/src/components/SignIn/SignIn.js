import React from "react";
import "./SignIn.css";

class SignIn extends React.Component {
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

    formSubmitHandler = event => {
        event.preventDefault();
        alert(`Hello`);
        this.setState({
            firstName: "",
            lastName: ""
        });
    };

    render() {
        return (
            <div className="my-form-wrapper">
                <form>
                    
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
                    <button
                        className="btn btn-primary"
                        onClick={this.formSubmitHandler}
                        type="submit">
                        Sign in
                    </button>
                </form>
            </div>
        );
    }
}

export default SignIn;
