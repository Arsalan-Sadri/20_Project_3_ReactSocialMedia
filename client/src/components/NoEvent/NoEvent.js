import React from "react";
import "./NoEvent.css";

const NoEvent = () => (
    <div className="no-event-div">
        <div className="text-danger font-weight-bold">Oops!</div>
        <div className="font-italic">No event has been created yet.</div>
        <a className="btn my-2" href="/create-event">
            <i className="fas fa-plus-circle" /> Create event
        </a>
    </div>
);

export default NoEvent;
