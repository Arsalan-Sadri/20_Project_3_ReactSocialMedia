import React from "react";
import "./ProfilePg.css";
import Navbar from "../../components/Navbar";
import ProfileCard from "../../components/ProfileCard";
import Footer from "../../components/Footer";
import Photos from "../../components/Photos";

const ProfilePg = () => (
    <React.Fragment>
        <Navbar />
        <div className="container-fluid bg-light py-5">
            <div className="row">
                <div className="col-md-5">
                    <ProfileCard />
                </div>
                <div className="col-md-7"><Photos /></div>
            </div>
        </div>
        <Footer />
    </React.Fragment>
);

export default ProfilePg;
