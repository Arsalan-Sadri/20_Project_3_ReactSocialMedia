import React from "react";
import "./ProfilePg.css";
import Navbar from "../../components/Navbar";
import ProfileCard from "../../components/ProfileCard";

const ProfilePg = () => (
    <React.Fragment>
        <Navbar />
        <div className="container-fluid bg-light py-5">
            <div className="row">
                <div className="col-md">
                    <ProfileCard />
                </div>
                <div className="col-md">right col</div>
            </div>
        </div>
    </React.Fragment>
);

export default ProfilePg;
