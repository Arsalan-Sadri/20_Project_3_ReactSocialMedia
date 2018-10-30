import React from "react";
import "./Friend.css";
import API from "../../utils/API";
import img1 from "../Profile/avatar.png"

class Friend extends React.Component {
    state = {
        persons: []
    };

    componentDidMount() {
        API.getAllUsers().then(allDbUser =>
            this.setState({
                persons: allDbUser.data
            })
        );
    }

    render() {
        return this.state.persons.map(user => (
            <React.Fragment>
                <div className="card img-fluid">
                    <img className="card-img-top" src={img1} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">
                            {user.firstName} {user.lastName}
                        </h4>
                        <p className="card-text">{user.email}</p>
                        <a
                            href={window.location.pathname + "/create-event"}
                            className="btn btn-info"
                            onClick={this.createEventHander}>
                            Create event
                        </a>
                    </div>
                </div>
                <br />
            </React.Fragment>
        ));
    }
}

export default Friend;
