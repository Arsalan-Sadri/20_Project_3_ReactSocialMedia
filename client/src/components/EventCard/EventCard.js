import React from "react";
import "./EventCard.css";

class EventCard extends React.Component {
    state = {
        name: "",
        category: "",
        capacity: "",
        city: "",
        state: "",
        zipCode: "",
        description: "",
        photoURL: ""
    };

    componentDidMount() {
        // API call
    }

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.state.photoURL} alt="card" />
                <div className="card-body">
                    <h4 className="card-title">{this.state.name}</h4>
                    <p className="my-0">
                        <span>{this.state.category}</span>{" "}
                        <span>
                            <i className="fas fa-male" /> {this.state.capacity}
                        </span>
                    </p>
                    <p className="my-0">
                        <i className="fas fa-map-marker-alt" aria-hidden="true" />{" "}
                        {this.state.city}
                        {","} {this.state.state} {this.state.zipCode}
                    </p>
                    <p className="my-0">
                        <i className="fas fa-info-circle" aria-hidden="true" />{" "}
                        {this.state.description}
                    </p>
                </div>
                <div className="card-footer">
                    <a className="btn my-2 mx-1" href="/create-event">
                        <i className="far fa-edit" /> Modify event
                    </a>
                    <a className="btn ml-1" href="/update-profile">
                        <i className="far fa-calendar-times" /> Delete event
                    </a>
                </div>
            </div>
        );
    }
}

export default EventCard;
