import React from "react";
import "./PreviewCard.css";

const PreviewCard = props => (
    <div className="card my-preview-card">
        <div className="img-container">
            <img alt={this.props.name} src={this.props.photoURL} />
        </div>
    </div>
);

export default PreviewCard;
