import React from "react";
import "./SignUpForm.css";
import API from "../../utils/API";

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
        fileBrowserDisplayVal: "Select your picture..."
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

    formBtnHandler = event => {
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

                API.signUp(userInfo)
                    .then(res => {
                        localStorage.clear();
                        localStorage.setItem("token", res.data.token);
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
                            name="firstName"
                            placeholder={this.props.firstName}
                            value={this.state.firstName}
                            onChange={this.inputChangeHandler}
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md">
                        <input
                            name="lastName"
                            placeholder={this.props.lastName}
                            value={this.state.lastName}
                            onChange={this.inputChangeHandler}
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="col-md">
                        <input
                            name="jobTitle"
                            placeholder={this.props.jobTitle}
                            value={this.state.jobTitle}
                            onChange={this.inputChangeHandler}
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="col-md">
                        <input
                            name="city"
                            placeholder={this.props.city}
                            value={this.state.city}
                            onChange={this.inputChangeHandler}
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md">
                        <input
                            name="state"
                            placeholder={this.props.state}
                            value={this.state.state}
                            onChange={this.inputChangeHandler}
                            type="text"
                            className="form-control"
                            required
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
                                name="username"
                                placeholder={this.props.username}
                                value={this.state.username}
                                onChange={this.inputChangeHandler}
                                type="text"
                                className="form-control"
                                aria-describedby="validationTooltipUsernamePrepend"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="col-md">
                        <input
                            name="email"
                            placeholder={this.props.email}
                            value={this.state.email}
                            onChange={this.inputChangeHandler}
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="col-md">
                        <input
                            name="password"
                            placeholder={this.props.password}
                            value={this.state.password}
                            onChange={this.inputChangeHandler}
                            type="password"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md">
                        <input
                            name="confirmPass"
                            placeholder={this.props.confirmPass}
                            value={this.state.confirmPass}
                            onChange={this.inputChangeHandler}
                            type="password"
                            className="form-control"
                            required
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
                        <button className="btn btn-lg" onClick={this.formBtnHandler}>
                            <i className="fa fa-user-plus" aria-hidden="true" />{" "}
                            {this.props.btnValue}
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SignUpForm;
