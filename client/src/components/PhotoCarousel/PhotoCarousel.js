import React from "react";
import "./PhotoCarousel.css";

const PhotoCarousel = props => (
    <div id="sample-carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#sample-carousel" data-slide-to="0" className="active" />
            <li data-target="#sample-carousel" data-slide-to="1" />
            <li data-target="#sample-carousel" data-slide-to="2" />
        </ol>

        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src={""} alt="First slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={""} alt="Second slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={""} alt="Third slide" />
            </div>
        </div>

        <a
            className="carousel-control-prev"
            href="#sample-carousel"
            role="button"
            data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
        </a>
        <a
            className="carousel-control-next"
            href="#sample-carousel"
            role="button"
            data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
        </a>
    </div>
);

export default PhotoCarousel;
