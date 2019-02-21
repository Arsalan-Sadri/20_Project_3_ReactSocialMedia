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
                            <aside className="welcome-msg">
                                <h3>Welcome to Expoterest</h3>
                                <ul>
                                    <li>
                                        A minimal social media web app where users can
                                        sign up, upload pictures, create profiles and
                                        events, make friends, and look for events nearby!
                                    </li>
                                    <li>
                                        Just fill out the form on the leftd, hit the Sign
                                        up, and you are in!
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default SignUpPg;
