import React from "react";
import "./UpdatePg.css";
import Navbar from "../../components/Navbar";
import UpdateForm from "../../components/UpdateForm";
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
                    <div className="row">
                        <div className="col-md-3" />
                        <div className="col-md-6">
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

export default ProfilePg;
