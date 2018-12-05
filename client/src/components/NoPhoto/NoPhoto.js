import React from "react";
import "./NoPhoto.css";

const NoEvent = () => (
    <div className="no-photo-div">
        <div className="text-danger font-weight-bold">Oops!</div>
        <div className="font-italic">You do not have any photos!</div>
        <a className="btn add-photos-link" href="/upload-photos">
            Add photos
        </a>
    </div>
);

export default NoEvent;
