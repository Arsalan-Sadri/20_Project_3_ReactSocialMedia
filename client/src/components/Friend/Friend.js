import React from "react";
import "./Friend.css";

class Friend extends React.Component {

    state = {
        persons: []
    };

    // componentDidMount() {
    //     axios({
    //         method: "get",
    //         url: "/api" + window.location.pathname, // /api/user/username/search-friends
    //         headers: {
    //             Authorization: "Bearer " + localStorage.getItem("token")
    //         }
    //     }).then(res => this.setState({}));
    // }

    render() {
        return (
            this.state.persons.map((user) =>
                <React.Fragment>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                {user.firstName} {user.lastName}
                            </h4>
                            <p className="card-text">{user.email}</p>
                            <a href={window.location.pathname + "/create-event"} className="btn btn-info" onClick={this.createEventHander}>
                                Create event
                    </a>
                        </div>
                    </div>
                    <br></br>
                </React.Fragment>
            )
        );
    }
}

export default Friend;
