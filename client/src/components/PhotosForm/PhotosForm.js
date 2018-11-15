import React from "react";
import "./PhotosForm.css";
import API from "../../utils/API";

class PhotosForm extends React.Component {
    state = {
        selectedFile: null,
        fileDisplayVal: "Upload your picture..."
    };

    fileSelectionHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            fileDisplayVal: event.target.files[0].name
        });
    };

    formBtnHandler = event => {
        event.preventDefault();

        if (this.state.selectedFile) {
            const userInfo = new FormData();
            userInfo.append("profilePic", this.state.selectedFile);

            API.signUp(userInfo)
                .then(res => {
                    localStorage.clear();
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("username", res.data.username);
                    window.location.pathname =
                        "/user/" + localStorage.getItem("username");
                })
                .catch(err => console.log(err));
        } else alert(`WARNING!\nPlease upload at least 1 photo!`);
    };

    render() {
        return (
            <form className="p-2">
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
                            className="btn btn"
                            onClick={this.formBtnHandler}>
                            <i className="fa fa-cloud-upload-alt" aria-hidden="true"></i>{" "}
                            Upload
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default PhotosForm;
