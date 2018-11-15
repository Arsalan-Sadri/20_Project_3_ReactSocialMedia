import React from "react";
import "./SignUpForm.css";
import API from "../../utils/API";

class SignUpForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPass: "",
        selectedFile: null,
        fileDisplayVal: "Upload your picture..."
    };

    inputChangeHandler = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    fileSelectionHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            fileDisplayVal: event.target.files[0].name
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
                        localStorage.clear();
                        localStorage.setItem("token", res.data.token);
                        localStorage.setItem("username", res.data.username);
                        window.location.pathname =
                            "/user/" + localStorage.getItem("username");
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
            <React.Fragment>
                <form className="p-2">
                    <div className="form-row mb-3">
                        <div className="col-md">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First name"
                                required
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.inputChangeHandler}
                            />
                        </div>
                        <div className="col-md">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                                required
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.inputChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="form-row mb-3">
                        <div className="col-md">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        http://www.faces.com/
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    aria-describedby="validationTooltipUsernamePrepend"
                                    required
                                    value={this.state.username}
                                    name="username"
                                    onChange={this.inputChangeHandler}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-row mb-3">
                        <div className="col-md">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                required
                                value={this.state.email}
                                name="email"
                                onChange={this.inputChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="form-row mb-3">
                        <div className="col-md">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                required
                                value={this.state.password}
                                name="password"
                                onChange={this.inputChangeHandler}
                            />
                        </div>
                        <div className="col-md">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm password"
                                required
                                value={this.state.confirmPass}
                                name="confirmPass"
                                onChange={this.inputChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="form-row mb-3">
                        <div className="col-md">
                            <div className="custom-file">
                                <input
                                    type="file"
                                    className="custom-file-input"
                                    id="validatedCustomFile"
                                    required
                                    name="profilePic"
                                    accept="image/*"
                                    onChange={this.fileSelectionHandler}
                                />
                                <label
                                    className="custom-file-label"
                                    htmlFor="validatedCustomFile">
                                    {this.state.fileDisplayVal}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row mb-3">
                        <div className="col-md">
                            <button
                                className="btn btn-lg"
                                onClick={this.formBtnHandler}>
                                <i
                                    className="fa fa-user-plus"
                                    aria-hidden="true"
                                />{" "}
                                Sign up
                            </button>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default SignUpForm;
