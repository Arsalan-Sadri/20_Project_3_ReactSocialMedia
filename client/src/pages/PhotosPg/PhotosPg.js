import React from "react";
// import API from "../../utils/api/API";
import Navbar from "../../components/Navbar";
// import PreviewCard from "../../components/PreviewCard";
import Footer from "../../components/Footer";
import SignUpPg from "../SignUpPg";
import "./PhotosPg.css";

class PhotosPg extends React.Component {
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
                    <div className="row" />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default PhotosPg;
