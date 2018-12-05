import React from "react";
import "./PhotosForm.css";

const PhotosForm = props => (
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
                        onChange={props.fileSelectionHandler}
                        multiple
                    />
                    <label className="custom-file-label" htmlFor="validatedCustomFile">
                        {props.fileBrowserDisplayVal}
                    </label>
                </div>
            </div>
        </div>
        <div className="form-row mb-5">
            <div className="col-md">
                <button className="btn photos-form-btn" onClick={props.uploadBtnHandler}>
                    <i className="fas fa-cloud-upload-alt" aria-hidden="true" /> Upload
                </button>
            </div>
        </div>
    </form>
);

export default PhotosForm;
