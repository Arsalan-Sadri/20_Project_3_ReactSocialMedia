import React from "react";
import "./ProfilePg.css";
import Navbar from "../../components/Navbar";
import ProfileCard from "../../components/ProfileCard";
import Footer from "../../components/Footer";
import PhotoCarousel from "../../components/PhotoCarousel";
import SignUpPg from "../SignUpPg";
import SignUpForm from "../../components/SignUpForm";
import API from "../../utils/API";

class ProfilePg extends React.Component {
    state = {
        updateFormIsShown: false,
        firstName: "",
        lastName: "",
        jobTitle: "",
        city: "",
        state: "",
        username: "",
        email: ""
    };

    componentDidMount() {
        setTimeout(() => {
            localStorage.clear();
        }, 600000);
    }

    updateProfileBtnHandler = () => {
        this.setState({
            updateFormIsShown: true
        });

        /*  Make api call to get user's info and 
            have them displayed as placeholders in the form
            then, update the state
        */
        API.getDbUser(localStorage.getItem("username")).then(res =>
            this.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                jobTitle: res.data.jobTitle,
                city: res.data.city,
                state: res.data.state,
                username: res.data.username,
                email: res.data.email,
                photoURL: res.data.photoURL
            })
        );
    };

    updateBtnHandler = userNewInfo => {
        // Code to handle submit button to update user info in DB
        console.log(userNewInfo);
        // API.updateUser(userNewInfo)
        //     .then(res => {
        //         localStorage.setItem("username", res.data.username);
        //         window.location.pathname = "/profile/" + localStorage.getItem("username");
        //     })
        //     .catch(err => console.log(err));
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
                        <div className="col-md-2" />
                        <div className="col-md-6">
                            {this.state.updateFormIsShown ? (
                                <SignUpForm
                                    btnValue="Update"
                                    formBtnHandler={this.updateBtnHandler}
                                    firstName={this.state.firstName}
                                    lastName={this.state.lastName}
                                    jobTitle={this.state.jobTitle}
                                    city={this.state.city}
                                    state={this.state.state}
                                    username={this.state.username}
                                    email={this.state.email}
                                    password="********"
                                    confirmPass="********"
                                />
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
