import React from "react";
import "./Profile.css";
import axios from "axios";

class Profile extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: ""
    };

    componentDidMount() {
        axios({
            method: "get",
            url: "/api" + window.location.pathname, // /api/user/username
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then(res =>
            this.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email
            })
        );
    }

    render() {
        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src="./avatar.png"
                    alt="Card image"
                />
                <div className="card-body">
                    <h4 className="card-title">
                        {this.state.firstName} {this.state.lastName}
                    </h4>
                    <p className="card-text">{this.state.email}</p>
                    <a href="#" className="btn btn-info">
                        Update profile
                    </a>
                </div>
            </div>
        );
    }
}

export default Profile;
