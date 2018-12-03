import React from "react";
import "./EventCard.css";

class EventCard extends React.Component {
    render() {
        return (
            <div className="card event-card m-5">
                <img className="card-img-top" src={this.props.photoURL} alt="card" />
                <div className="card-body">
                    <h4 className="card-title">{this.props.name}</h4>
                    <p className="my-0">
                        <i className="far fa-calendar-alt" /> {this.props.date}
                        {", "}
                        <i className="far fa-clock" /> {this.props.time}
                    </p>
                    <p className="my-0">
                        <i className="fas fa-male" /> {this.props.capacity}
                    </p>
                    <p className="my-0">
                        <i className="fas fa-map-marker-alt" /> {this.props.city}
                        {","} {this.props.state} {this.props.zipCode}
                    </p>
                    <p className="my-0">
                        <i className="fas fa-info-circle text-info" />{" "}
                        {this.props.description}
                    </p>
                </div>
                <div className="card-footer">
                    <a className="btn my-2 mx-1" href="/modify-event">
                        <i className="far fa-edit" /> Modify event
                    </a>
                    <a className="btn ml-1" href="/delete-event">
                        <i className="far fa-calendar-times" /> Delete event
                    </a>
                </div>
            </div>
        );
    }
}

export default EventCard;
