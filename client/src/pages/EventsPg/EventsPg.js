import React from "react";
import Navbar from "../../components/Navbar";
import EventCard from "../../components/EventCard";
import Footer from "../../components/Footer";
import "./EventsPg.css";

class EventsPg extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container-fluid bg-light py-5">
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <EventCard />
                        </div>
                        <div className="col-md-6">
                            <EventCard />
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default EventsPg;
