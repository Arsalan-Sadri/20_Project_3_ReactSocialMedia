import React from "react";
import "./CreateEventPg.css";
import Navbar from "../../components/Navbar";
import EventForm from "../../components/EventForm";
import Footer from "../../components/Footer";
import SignUpPg from "../SignUpPg";

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
                <div className="container-fluid bg-light py-5 main-container">
                    <div className="row mb-5 justify-content-md-center">
                        <div className="col-md-7">
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
