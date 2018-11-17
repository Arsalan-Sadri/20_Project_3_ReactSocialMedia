import React from "react";
import "./PhotosForm.css";
import API from "../../utils/API";

class PhotosForm extends React.Component {
    state = {
        selectedFiles: [],
        fileBrowserDisplayVal: "Upload your picture(s)..."
    };

    fileSelectionHandler = event => {
        let photos = [];
        for (var key in event.target.files)
            if (!(key === "length" || key === "item"))
                photos.push(event.target.files[key]);

        this.setState({
            selectedFiles: photos,
            fileBrowserDisplayVal: photos.length + " files selected."
        });
    };

    formBtnHandler = event => {
        event.preventDefault();

        if (this.state.selectedFiles) {
            const photos = new FormData();
            this.state.selectedFiles.forEach(elm =>
                photos.append("photos", elm)
            );

            API.uploadPhotos(photos)
                .then(res => {
                    console.log(res);
                    // localStorage.clear();
                    // localStorage.setItem("token", res.data.token);
                    // localStorage.setItem("username", res.data.username);
                    // window.location.pathname =
                    //     "/user/" + localStorage.getItem("username");
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
                                accept="image/*"
                                onChange={this.fileSelectionHandler}
                                multiple
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
                        <button
                            className="btn btn"
                            onClick={this.formBtnHandler}>
                            <i
                                className="fa fa-cloud-upload-alt"
                                aria-hidden="true"
                            />{" "}
                            Upload
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default PhotosForm;