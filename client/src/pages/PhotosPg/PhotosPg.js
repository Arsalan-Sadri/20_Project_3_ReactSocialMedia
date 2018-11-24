import React from "react";
import "./PhotosPg.css";
import API from "../../utils/API";
import Navbar from "../../components/Navbar";
import PhotosForm from "../../components/PhotosForm";
import Footer from "../../components/Footer";

class ProfilePg extends React.Component {
    state = {
        selectedFiles: [],
        fileBrowserDisplayVal: "Upload your picture(s)..."
    };

    componentWillMount() {
        if (!localStorage.getItem("username")) window.location.href = "/";
    }

    fileSelectionHandler = event => {
        let fileListObj = event.target.files;
        let photos = [];
        for (var i = 0; i < fileListObj.length; i++) {
            photos.push(fileListObj[i]);
        }

        this.setState({
            selectedFiles: photos,
            fileBrowserDisplayVal: photos.length + " files selected."
        });
    };

    formBtnHandler = event => {
        event.preventDefault();
        console.log(this.state.selectedFiles);
        if (!(this.state.selectedFiles === [])) {
            const photos = new FormData();
            this.state.selectedFiles.forEach(elm => photos.append("photos", elm));

            API.uploadPhotos(photos)
                .then(res => {
                    window.location.pathname =
                        "/user/" + localStorage.getItem("username");
                })
                .catch(err => console.log(err));
        } else alert(`WARNING!\nPlease upload at least 1 photo!`);
    };

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container-fluid bg-light py-5">
                    <div className="row">
                        <div className="col-md-auto">
                            <PhotosForm
                                fileBrowserDisplayVal={this.state.fileBrowserDisplayVal}
                                fileSelectionHandler={this.fileSelectionHandler}
                                formBtnHandler={this.formBtnHandler}
                            />
                        </div>
                        <div id="preview" className="col-md-auto" />
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProfilePg;
