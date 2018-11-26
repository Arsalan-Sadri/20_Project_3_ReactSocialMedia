import React from "react";
import "./PreviewCard.css";

const PreviewCard = props => (
    <div className="card preview-card">
        <img alt={props.alt} src={props.src} />
    </div>
);

export default PreviewCard;
