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
                        <div className="col-auto">
                            <p className="my-0">
                                <i className="fas fa-male pl-1 text-secondary mr-2" />
                                {this.props.capacity + " going"}
                            </p>

                            <p className="my-0">
                                <i className="fas fa-map-marker-alt text-primary mr-2" />
                                {this.props.street}
                                <br />
                                {this.props.city}
                                {","} {this.props.state} {this.props.zipCode}
                            </p>
                            <p className="my-0">
                                <i className="fas fa-info-circle text-info mr-2" />
                                {this.props.description}
                            </p>
                        </div>
                        <div className="col-auto pr-0">
                            <p className="my-0">
                                <i className="far fa-calendar-alt text-warning mr-2" />
                                {this.props.date}
                            </p>
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

{
    /* <p className="my-0">
                                <i className="far fa-clock text-danger" />{" "}
                                {this.props.time}{" "}
                            </p> */
}
