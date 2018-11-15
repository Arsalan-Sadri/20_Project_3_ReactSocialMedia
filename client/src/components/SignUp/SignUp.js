import React from "react";
import "./SignUp.css";
import API from "../../utils/API";

class SignUp extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPass: "",
        selectedFile: null
    };

    inputChangeHandler = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    fileSelectionHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    };

    formBtnHandler = event => {
        event.preventDefault();

        const userInfo = new FormData();
        userInfo.append("firstName", this.state.firstName);
        userInfo.append("lastName", this.state.lastName);
        userInfo.append("username", this.state.username);
        userInfo.append("email", this.state.email);
        userInfo.append("password", this.state.password);
        userInfo.append("profilePic", this.state.selectedFile);

        if (
            this.state.firstName &&
            this.state.lastName &&
            this.state.email &&
            this.state.password &&
            this.state.confirmPass &&
            this.state.selectedFile
        ) {
            if (this.state.password === this.state.confirmPass) {
                API.signUp(userInfo)
                    .then(res => {
                        localStorage.setItem("token", res.data.token);
                        localStorage.setItem("username", res.data.username);
                        console.log(res.data.token);
                        console.log(res.data.username);
                        // window.location.pathname =
                        //     "/user/" + localStorage.getItem("username");
                    })
                    .catch(err => console.log(err));
            } else
                alert(
                    `WARNING!\nPasswords do NOT match!\nPlease try again later`
                );
        }
    };

    render() {
        return (
            <div className="my-form-wrapper">
                <form
                // action="/api/user/sign-up"
                // method="post"
                // enctype="multipart/form-data"
                >
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
                        <label htmlFor="user-name">Username:</label>
                        <input
                            id="user-name"
                            className="form-control"
                            value={this.state.username}
                            name="username"
                            onChange={this.inputChangeHandler}
                            type="text"
                            placeholder="Username"
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
                        <label htmlFor="confirm-password">
                            Confirm password:
                        </label>
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
                    <div className="form-group">
                        <label htmlFor="profile-pic">Profile picture:</label>
                        <br />
                        <input
                            id="profile-pic"
                            name="profilePic"
                            accept="image/*"
                            type="file"
                            onChange={this.fileSelectionHandler}
                        />
                    </div>
                    <button
                        className="btn btn-info"
                        onClick={this.formBtnHandler}>
                        Sign up
                    </button>
                </form>
            </div>
        );
    }
}

export default SignUp;
