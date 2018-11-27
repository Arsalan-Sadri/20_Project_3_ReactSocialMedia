import React from "react";
import "./PreviewCard.css";

const PreviewCard = props => (
    <div className="card preview-card">
        <img className="card-img-top" alt={props.alt} src={props.dataURL} />
    </div>
);

export default PreviewCard;
