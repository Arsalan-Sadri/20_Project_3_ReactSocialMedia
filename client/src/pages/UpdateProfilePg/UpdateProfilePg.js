import React from "react";
import "./UpdateProfilePg.css";
import Navbar from "../../components/Navbar";
import UpdateForm from "../../components/UpdateForm";
import Footer from "../../components/Footer";
import SignUpPg from "../SignUpPg";

class UpdateProfilePg extends React.Component {
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
                    <div className="row">
                        <div className="col-md-3" />
                        <div className="col-md-6">
                            <h5>Edit any field and hit the update button:</h5>
                            <UpdateForm />
                        </div>
                        <div className="col-md-3" />
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default UpdateProfilePg;
