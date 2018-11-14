import React from "react";
import "./Profile.css";
import API from "../../utils/API";
import profPic from "./avatar.png";

class Profile extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: ""
    };

    componentDidMount() {
        API.getDbUser().then(res =>
            this.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email
            })
        );
    }

    createEventBtnHandler = e => {
        window.location.pathname = "/user/" + this.state.username;
    };

    render() {
        return (
            <div className="card img-fluid">
                <img className="card-img-top" src={profPic} alt="card" />
                <div className="card-body">
                    <h4 className="card-title">
                        {this.state.firstName} {this.state.lastName}
                    </h4>
                    <p className="card-text">{this.state.email}</p>
                    <a
                        href={window.location.pathname + "/create-event"}
                        className="btn btn-info"
                        onClick={this.createEventBtnHandler}>
                        Create event
                    </a>
                </div>
            </div>
        );
    }
}

export default Profile;
