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
        <div className="container-fluid py-5 bg-light container-sign-up-page">
          <div className="row">
            <div className="col-md-5">
              <section>
                <SignUpForm />
              </section>
            </div>
            <div className="col-md-7">
              <aside className="welcome-msg">
                <h3>Welcome to React Social App</h3>
                <ul>
                  <li>
                    A minimalistic social media web app where users can sign up,
                    upload pictures, create profiles and events, make friends,
                    and look for events nearby!
                  </li>
                  <li>
                    Just fill out the form, hit the Sign up, and you are in!
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
