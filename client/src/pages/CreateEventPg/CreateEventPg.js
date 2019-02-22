import React from "react";
import "./CreateEventPg.css";
import Navbar from "../../components/Navbar";
import EventForm from "../../components/EventForm";
import Footer from "../../components/Footer";

class ProfilePg extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            localStorage.clear();
        }, 600000);
    }

    render() {
        if (
            !localStorage.getItem("token") ||
            localStorage.getItem("token") === "undefined"
        )
            return (window.location.pathname = "/");
        return (
            <React.Fragment>
                <Navbar />
                <div className="container-fluid bg-light py-5 main-container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-6">
                            <h1>
                                <i className="fas fa-calendar-alt" aria-hidden="true" />{" "}
                                Create Event
                            </h1>
                            <EventForm />
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProfilePg;
