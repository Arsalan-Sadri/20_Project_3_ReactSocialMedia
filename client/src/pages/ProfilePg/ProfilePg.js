import React from "react";
import "./ProfilePg.css";
import Navbar from "../../components/Navbar";
import ProfileCard from "../../components/ProfileCard";
import Footer from "../../components/Footer";
import PhotoCarousel from "../../components/PhotoCarousel";
import SignUpPg from "../../pages/SignUpPg";
import Modal from "../../components/Modal";

class ProfilePg extends React.Component {
    state = {
        modalIsOpen: false,
        modalIsClose: true
    };

    closeModal = () => {
        this.setState({ modalIsClose: false });
        setTimeout(() => {
            this.setState({ modalIsOpen: false });
            this.setState({ modalIsClose: true });
        }, 600000);
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ modalIsOpen: true });
            localStorage.clear();
        }, 5000);
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
                    <div className="row">
                        <div className="col-md-4">
                            <ProfileCard />
                        </div>
                        <div className="col-md-8">
                            <PhotoCarousel />
                        </div>
                    </div>
                </div>
                <Footer />
                <Modal
                    modalIsOpen={this.state.modalIsOpen}
                    modalIsClose={this.state.modalIsClose}
                    closeModal={this.closeModal}
                />
            </React.Fragment>
        );
    }
}

export default ProfilePg;
