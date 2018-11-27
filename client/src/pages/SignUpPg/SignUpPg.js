import React from "react";
import "./SignUpPg.css";
import NavbarLanPg from "../../components/NavbarLanPg";
import SignUpForm from "../../components/SignUpForm";
import Footer from "../../components/Footer";
import API from "../../utils/API";

class SignUpPg extends React.Component {
    signUpBtnHandler = userInfo => {
        API.signUp(userInfo)
            .then(res => {
                localStorage.clear();
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("username", res.data.username);
                window.location.pathname = "/profile/" + localStorage.getItem("username");
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <React.Fragment>
                <NavbarLanPg />
                <div className="container-fluid py-5 bg-light">
                    <div className="row">
                        <div className="col-md-5">
                            <section>
                                <SignUpForm
                                    firstName="First name"
                                    lastName="Last name"
                                    jobTitle="Job title"
                                    city="City"
                                    state="State"
                                    username="Username"
                                    email="Email"
                                    password="Password"
                                    confirmPass="Confirm password"
                                    btnValue="Sign up"
                                    formBtnHandler={this.signUpBtnHandler}
                                />
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
