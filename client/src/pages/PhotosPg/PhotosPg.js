import React from "react";
import "./PhotosPg.css";
import Navbar from "../../components/Navbar";
// import ProfileCard from "../../components/Photos";
import PhotosForm from "../../components/PhotosForm";

class ProfilePg extends React.Component {
    componentWillMount() {
        if (!localStorage.getItem("username")) window.location.href = "/";
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container-fluid bg-light py-5">
                    <div className="row">
                        <div className="col-md-auto">
                            <PhotosForm />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProfilePg;
