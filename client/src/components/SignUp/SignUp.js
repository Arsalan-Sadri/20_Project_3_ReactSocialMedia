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
            <div>
                <p>
                    Hello {this.state.firstName} {this.state.lastName}
                </p>
                <form className="form">
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.inputChangeHandler}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.inputChangeHandler}
                        type="text"
                        placeholder="Last Name"
                    />
                    <button onClick={this.formSubmitHandler}>Submit</button>
                </form>
            </div>
        );
    }
}

export default SignUp;
