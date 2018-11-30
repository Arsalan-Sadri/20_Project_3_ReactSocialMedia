import React from "react";
import "./EventPg.css";
import Navbar from "../../components/Navbar";
import EventForm from "../../components/EventForm";
import Footer from "../../components/Footer";
import SignUpPg from "../../pages/SignUpPg";

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
            return <SignUpPg />;
        return (
            <React.Fragment>
                <Navbar />
                <div className="container-fluid bg-light py-5">
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <h1>
                                <i className="fas fa-calendar-alt" aria-hidden="true" />{" "}
                                Create Event
                            </h1>
                            <EventForm />
                        </div>
                        <div className="col-md-6">-Event list goes here-</div>
                    </div>
                    <div className="row">
                        <div className="col-md event-map">-Map Goes here-</div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProfilePg;
