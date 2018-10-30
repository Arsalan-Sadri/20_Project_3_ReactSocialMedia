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
        }).then(res => {
            console.log(res);
        });
    }

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src="#" alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">(John Doe)</h4>
                    <p className="card-text">
                        email
                    </p>
                    <a href="#" className="btn btn-info">
                        Update profile
                    </a>
                </div>
            </div>
        );
    }
}

export default Profile;
