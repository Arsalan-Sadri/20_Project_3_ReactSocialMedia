import React from "react";
import "./EventCard.css";

class EventCard extends React.Component {
    render() {
        return (
            <div className="card event-card">
                <img className="card-img-top" src={this.props.photoURL} alt="card" />
                <div className="card-body">
                    <h4 className="card-title">{this.props.name}</h4>
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-auto">
                                    <i className="fas fa-male pl-1 text-secondary" />
                                    <br />
                                    <i className="fas fa-map-marker-alt text-primary" />
                                    <br />
                                    <i className="fas fa-info-circle text-info" />
                                </div>
                                <div className="col-auto pl-0">
                                    {this.props.capacity + " going"}
                                    <br />
                                    {this.props.street}
                                    <br />
                                    {this.props.city}
                                    {","} {this.props.state} {this.props.zipCode}
                                    <br />
                                    {this.props.description}
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-auto">
                                    <i className="far fa-calendar-alt text-warning" />
                                    <br />
                                    <i className="far fa-clock text-danger" />
                                </div>
                                <div className="col-auto pl-0">
                                    {this.props.date}
                                    <br />
                                    {this.props.time}
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <a className="btn my-2 mr-2 event-card" href="/modify-event">
                        <i className="far fa-edit" /> Modify event
                    </a>
                    <a className="btn event-card" href="/delete-event">
                        <i className="far fa-calendar-times" /> Delete event
                    </a>
                </div>
            </div>
        );
    }
}

export default EventCard;
