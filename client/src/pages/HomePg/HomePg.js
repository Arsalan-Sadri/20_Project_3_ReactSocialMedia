import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./HomePg.css";

class HomePg extends React.Component {
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
            return (window.location.pathname = "/");
        return (
            <React.Fragment>
                <Navbar />
                <div className="container-fluid bg-light py-5 main-container">
                    <div className="row">
                        <div className="col-md-4">-- CONTENT --</div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default HomePg;
