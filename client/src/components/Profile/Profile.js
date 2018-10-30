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
                {/* <div className="img-container">
                    <img alt={props.name} src={props.image} />
                </div> */}
                <div className="content">
                    <ul>
                        <li>
                            <strong>First name:</strong> {this.state.firstName}
                        </li>
                        <li>
                            <strong>Last name:</strong> {this.state.lastName}
                        </li>
                        <li>
                            <strong>Email:</strong> {this.state.email}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Profile;
