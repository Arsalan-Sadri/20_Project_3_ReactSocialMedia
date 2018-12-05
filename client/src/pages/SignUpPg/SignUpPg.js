import React from "react";
import "./SignUpPg.css";
import NavbarSignUpPg from "../../components/NavbarSignUpPg";
import SignUpForm from "../../components/SignUpForm";
import Footer from "../../components/Footer";

class SignUpPg extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavbarSignUpPg />
                <div className="container-fluid py-5 bg-light sign-up-page-container">
                    <div className="row">
                        <div className="col-md-5">
                            <section>
                                <SignUpForm />
                            </section>
                        </div>
                        <div className="col-md-7">
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
