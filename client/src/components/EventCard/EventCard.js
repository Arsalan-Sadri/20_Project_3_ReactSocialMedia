import React from "react";
import "./EventCard.css";

class EventCard extends React.Component {
    render() {
        return (
            <div className="card event-card m-5">
                <img className="card-img-top" src={this.props.photoURL} alt="card" />
                <div className="card-body">
                    <h4 className="card-title">{this.props.name}</h4>
                    <div className="row">
                        <div className="col-auto pr-0">
                            <i className="far fa-calendar-alt text-warning" />
                        </div>
                        <div className="col-auto pl-2 pr-4">
                            <p className="my-0">{this.props.date}</p>
                        </div>
                        <div className="col-auto px-0">
                            <i className="far fa-clock text-danger" />
                        </div>
                        <div className="col-auto pl-1">{this.props.time}</div>
                    </div>
                    <div className="row">
                        <div className="col-auto pr-0">
                            <i className="fas fa-male pl-1 text-secondary" />
                            <br />
                            <i className="fas fa-map-marker-alt text-primary" />
                            <br />
                            <br />
                            <i className="fas fa-info-circle text-info" />
                        </div>
                        <div className="col-auto pl-2">
                            <p className="my-0">{this.props.capacity}</p>
                            <p className="my-0">
                                {this.props.street}
                                <br />
                                {this.props.city}
                                {","} {this.props.state} {this.props.zipCode}
                            </p>
                            <p className="my-0"> {this.props.description}</p>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <a className="btn my-2 ml-1 mr-2 event-card-btn" href="/modify-event">
                        <i className="far fa-edit" /> Modify event
                    </a>
                    <a className="btn ml event-card-btn" href="/delete-event">
                        <i className="far fa-calendar-times" /> Delete event
                    </a>
                </div>
            </div>
        );
    }
}

export default EventCard;
