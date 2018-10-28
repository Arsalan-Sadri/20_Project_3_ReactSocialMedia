import React from "react";
import "./SignUp.css";

class SignUp extends React.Component {
    state = {
        firstName: "",
        lastName: ""
    };

    inputChangeHandler = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    formSubmitHandler = event => {
        event.preventDefault();
        alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        this.setState({
            firstName: "",
            lastName: ""
        });
    };

    render() {
        return (
            <div className="form-wrapper">
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
                    <button
                        className="btn btn-primary"
                        onClick={this.formSubmitHandler}
                        type="submit">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default SignUp;
