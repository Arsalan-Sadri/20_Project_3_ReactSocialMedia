import React from "react";
import "./ProfilePg.css";
import Navbar from "../../components/Navbar";
import ProfileCard from "../../components/ProfileCard";
import Footer from "../../components/Footer";
import PhotoCarousel from "../../components/PhotoCarousel";
import SignUpPg from "../SignUpPg";
import SignUpForm from "../../components/SignUpForm";

class ProfilePg extends React.Component {
    state = {
        updateProfile: false
    };

    componentDidMount() {
        setTimeout(() => {
            localStorage.clear();
        }, 600000);
        console.log("didMount()");
    }

    updateProfileBtnHandler = () => {
        this.setState({
            updateProfile: true
        });
    };

    render() {
        if (!localStorage.getItem("token")) return <SignUpPg />;
        return (
            <React.Fragment>
                <Navbar />
                <div className="container-fluid bg-light py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <ProfileCard
                                updateProfileBtnHandler={this.updateProfileBtnHandler}
                            />
                        </div>
                        <div className="col-md-8">
                            {this.state.updateProfile ? (
                                <SignUpForm />
                            ) : (
                                <PhotoCarousel />
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProfilePg;
