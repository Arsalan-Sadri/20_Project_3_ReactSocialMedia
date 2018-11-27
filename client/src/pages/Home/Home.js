import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Home.css";

const Home = () => (
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

export default Home;
