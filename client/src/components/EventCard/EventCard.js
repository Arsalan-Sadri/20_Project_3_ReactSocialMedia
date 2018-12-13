import React from "react";
import "./EventCard.css";

class EventCard extends React.Component {
    render() {
        return (
            <div className="card event-card mb-5">
                <img className="card-img-top" src={this.props.photoURL} alt="card" />
                <div className="card-body">
                    <h4 className="card-title">{this.props.name}</h4>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-auto">
                                    <i className="far fa-calendar-alt" />
                                    <br />
                                    <i className="far fa-clock" />
                                    <br />
                                    <i className="fas fa-map-marker-alt text-secondary" />
                                </div>
                                <div className="col pl-0">
                                    {this.props.startDate}
                                    <br />
                                    <span className="">{this.props.startTime}</span>
                                    <span>{" - "}</span>
                                    <span className="">{this.props.endTime}</span>
                                    <br />
                                    <span className="text-secondary">
                                        {this.props.street}
                                        <br />
                                        {this.props.city}
                                        {","} {this.props.state} {this.props.zipCode}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 pt-3 pt-md-0">
                            <div className="row">
                                <div className="col-auto">
                                    <i
                                        className={
                                            this.props.isEventfree
                                                ? "hide"
                                                : "fas fa-dollar-sign pl-1"
                                        }
                                    />
                                    <br />
                                    <i className="fas fa-male pl-1" />
                                    <br />
                                    <i className="fas fa-info-circle text-info" />
                                </div>
                                <div className="col pl-0">
                                    {this.props.isEventfree ? "Free" : this.props.cost}
                                    <br />
                                    {this.props.capacity + " going"}
                                    <br />
                                    {this.props.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-card-footer">
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
