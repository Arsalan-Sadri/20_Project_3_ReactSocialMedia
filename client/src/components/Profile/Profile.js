import React from "react";
import "./Profile.css";

class Profile extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: ""
    };

    componentDidMount () {
        
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
