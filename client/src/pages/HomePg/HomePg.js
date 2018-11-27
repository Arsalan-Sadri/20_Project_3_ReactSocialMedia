import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SignUpPg from "../SignUpPg";
import "./HomePg.css";

class HomePg extends React.Component {
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
                        <div className="col-md-4">-- CONTENT --</div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default HomePg;
