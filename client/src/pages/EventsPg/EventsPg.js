import React from "react";
import Navbar from "../../components/Navbar";
import EventCard from "../../components/EventCard";
import Footer from "../../components/Footer";
import NoEvent from "../../components/NoEvent";
import "./EventsPg.css";
import API from "../../utils/api/API";

class EventsPg extends React.Component {
    state = {
        events: [],
        renderNoEvent: false
    };

    componentDidMount() {
        API.user
            .getUserEvents(localStorage.getItem("username"))
            .then(res => {
                if (res.data.events.length === 0) this.setState({ renderNoEvent: true });
                else this.setState({ events: res.data.events });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container-fluid bg-light py-5">
                    <div className="row mb-5">
                        <div className="col-md">
                            {this.state.renderNoEvent ? (
                                <NoEvent />
                            ) : (
                                this.state.events.map(event => (
                                    <EventCard
                                        key={event._id}
                                        name={event.name}
                                        category={event.category}
                                        capacity={event.capacity}
                                        date={event.data}
                                        time={event.time}
                                        city={event.city}
                                        state={event.state}
                                        zipCode={event.zipCode}
                                        description={event.description}
                                        photoURL={`http://${window.location.host}/${
                                            event.photoURL
                                        }`}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default EventsPg;
