import React from "react";
import "./Profile.css";

class Profile extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: ""
    };

    render() {
        return (
            <div className="card">
                {/* <div className="img-container">
                    <img alt={props.name} src={props.image} />
                </div> */}
                <div className="content">
                    <ul>
                        <li>
                            <strong>Name:</strong> {this.state.firstName}
                        </li>
                        <li>
                            <strong>Occupation:</strong> {this.state.lastName}
                        </li>
                        <li>
                            <strong>Location:</strong> {this.state.email}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Profile;
