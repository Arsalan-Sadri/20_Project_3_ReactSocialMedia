import React from "react";
import "./SignUpPg.css";
import NavbarLanPg from "../../components/NavbarLanPg";
import SignUpForm from "../../components/SignUpForm";
import Footer from "../../components/Footer";

class SignUpPg extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                <NavbarLanPg />
                <div className="container-fluid py-5 bg-light">
                    <div className="row">
                        <div className="col-5">
                            <section>
                                <SignUpForm />
                            </section>
                        </div>
                        <div className="col-7">
                            <aside className="mx-auto">[Welcome!]</aside>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default SignUpPg;
