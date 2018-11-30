import React from "react";
import "./ProfileCard.css";
import API from "../../utils/API";

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
        API.getDbUser(localStorage.getItem("username"))
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
            <div className="card">
                <img className="card-img-top" src={this.state.photoURL} alt="card" />
                <div className="card-body">
                    <h4 className="card-title">
                        {this.state.firstName} {this.state.lastName}
                    </h4>
                    <p className="my-0">{this.state.jobTitle}</p>
                    <p className="my-0">
                        <i className="fas fa-map-marker-alt" aria-hidden="true" />{" "}
                        {this.state.city}
                        {","} {this.state.state}
                    </p>
                    <p className="my-0">
                        <i className="fas fa-envelope" aria-hidden="true" />{" "}
                        <i>{this.state.email}</i>
                    </p>
                </div>
                <div className="card-footer">
                    <a className="btn my-2 mx-1" href="/create-event">
                        <i className="fas fa-plus-circle" /> Create event
                    </a>
                    <a className="btn ml-1" href="/update-profile">
                        <i className="fas fa-edit" /> Update profile
                    </a>
                </div>
            </div>
        );
    }
}

export default Profile;
