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
        if (!localStorage.getItem("token")) return <SignUpPg />;
        return (
            <React.Fragment>
                <Navbar />
                <div className="container-fluid bg-light py-5">
                    <div className="row">
                        <div className="col-md">
                            <UpdateForm />
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProfilePg;
