import React from "react";
import "./UpdateForm.css";
import API from "../../utils/api/API";

class SignUpForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        jobTitle: "",
        city: "",
        state: "",
        username: "",
        email: "",
        password: "",
        confirmPass: "",
        selectedFile: null,
        fileBrowserDisplayVal: "Select your picture... (optional)"
    };

    componentDidMount = () => {
        API.user.getDbUser(localStorage.getItem("username")).then(res =>
            this.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                jobTitle: res.data.jobTitle,
                city: res.data.city,
                state: res.data.state,
                username: res.data.username,
                email: res.data.email,
                password: res.data.password,
                confirmPass: res.data.password
            })
        );
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
            fileBrowserDisplayVal: event.target.files[0].name
        });
    };

    updateBtnHandler = event => {
        event.preventDefault();

        if (
            this.state.firstName &&
            this.state.lastName &&
            this.state.jobTitle &&
            this.state.city &&
            this.state.state &&
            this.state.email &&
            this.state.password &&
            this.state.confirmPass &&
            this.state.selectedFile
        ) {
            if (this.state.password === this.state.confirmPass) {
                const userInfo = new FormData();
                userInfo.append("firstName", this.state.firstName);
                userInfo.append("lastName", this.state.lastName);

                userInfo.append("jobTitle", this.state.jobTitle);
                userInfo.append("city", this.state.city);
                userInfo.append("state", this.state.state);

                userInfo.append("username", this.state.username);
                userInfo.append("email", this.state.email);
                userInfo.append("password", this.state.password);
                userInfo.append("photo", this.state.selectedFile);

                API.updateProfile(userInfo)
                    .then(res => {
                        localStorage.setItem("username", res.data.username);
                        window.location.pathname =
                            "/profile/" + localStorage.getItem("username");
                    })
                    .catch(err => console.log(err));
            } else alert(`WARNING!\nPasswords do NOT match!\nPlease try again later`);
        } else alert(`WARNING!\nPlease fill out the form!`);
    };

    render() {
        return (
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
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Job title"
                            required
                            name="jobTitle"
                            value={this.state.jobTitle}
                            onChange={this.inputChangeHandler}
                        />
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="col-md">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            required
                            name="city"
                            value={this.state.city}
                            onChange={this.inputChangeHandler}
                        />
                    </div>
                    <div className="col-md">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="State"
                            required
                            name="state"
                            value={this.state.state}
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
                                accept="image/*"
                                onChange={this.fileSelectionHandler}
                            />
                            <label
                                className="custom-file-label"
                                htmlFor="validatedCustomFile">
                                {this.state.fileBrowserDisplayVal}
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="col-md">
                        <button className="btn btn-lg" onClick={this.updateBtnHandler}>
                            <i className="fas fa-user-edit" aria-hidden="true" /> Update
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SignUpForm;
