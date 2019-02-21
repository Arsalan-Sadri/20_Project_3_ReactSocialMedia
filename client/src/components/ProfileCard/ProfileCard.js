import React from "react";
import "./ProfileCard.css";
import API from "../../utils/api/API";

class Profile extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        jobTitle: "",
        city: "",
        state: "",
        email: "",
        photoURL: ""
    };

    componentDidMount() {
        API.user
            .getDbUser(localStorage.getItem("username"))
            .then(res =>
                this.setState({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    jobTitle: res.data.jobTitle,
                    city: res.data.city,
                    state: res.data.state,
                    email: res.data.email,
                    photoURL: res.data.photoURL
                })
            )
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="card profile-card">
                <img className="card-img-top" src={this.state.photoURL} alt="card" />
                <div className="card-body">
                    <h4 className="card-title">
                        {this.state.firstName} {this.state.lastName}
                    </h4>
                    <p className="my-0">{this.state.jobTitle}</p>
                    <div className="row">
                        {/* ********** ICON COLUMN ********** */}
                        <div className="col-auto pr-0">
                            <i className="fas fa-map-marker-alt text-primary" />
                            <br />
                            <i className="fas fa-envelope text-info" />
                        </div>
                        {/* ********** DATA COLUMN ********** */}
                        <div className="col-auto pl-2">
                            <p className="my-0">
                                {this.state.city}
                                {","} {this.state.state}
                            </p>
                            <p className="my-0">
                                <i>{this.state.email}</i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <a className="btn my-2 mr-2 profile-card" href="/update-profile">
                        <i className="fas fa-edit" /> Update profile
                    </a>
                    <a className="btn profile-card" href="/delete-profile">
                        <i className="fas fa-user-minus" /> Delete profile
                    </a>
                </div>
            </div>
        );
    }
}

export default Profile;
