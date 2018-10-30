import React from "react";
import "./Profile.css";
import axios from "axios";

class Profile extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: ""
    };

    // componentDidMount () {

    //     let config = {
    //         headers: {
    //           header1: value,
    //         }
    //       }
          
    //       let data = {
    //         'HTTP_CONTENT_LANGUAGE': self.language
    //       }
          
    //       axios.post(URL, data, config).then(...)



    //     var instance = axios.create({
    //         baseURL: 'https://some-domain.com/api/',
    //         timeout: 1000,
    //         headers: {'X-Custom-Header': 'foobar'}
    //       });


    //     axios({
    //         method: "post",
    //         url: "/profile",
    //         data: {
    //             firstName: 'Fred',
    //             lastName: 'Flintstone'
    //         }
    //     });

    // }

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
