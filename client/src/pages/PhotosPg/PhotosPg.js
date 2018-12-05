import React from "react";
import Navbar from "../../components/Navbar";
import NoPhoto from "../../components/NoPhoto";
import Footer from "../../components/Footer";
import SignUpPg from "../SignUpPg";
import "./PhotosPg.css";
// import API from "../../utils/api/API";

class PhotosPg extends React.Component {
    state = {
        renderNoPhoto: true
    };

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
                    <div className="row">
                        {this.state.renderNoPhoto ? <NoPhoto /> : 1}
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default PhotosPg;
