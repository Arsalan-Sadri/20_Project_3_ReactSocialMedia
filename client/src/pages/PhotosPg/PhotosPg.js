import React from "react";
import API from "../../utils/API";
import Navbar from "../../components/Navbar";
import PhotosForm from "../../components/PhotosForm";
import PreviewCard from "../../components/PreviewCard";
import Footer from "../../components/Footer";
import SignUpPg from "../SignUpPg";
import "./PhotosPg.css";

class ProfilePg extends React.Component {
    state = {
        selectedFiles: [],
        fileBrowserDisplayVal: "Select your picture(s)..."
    };

    componentDidMount() {
        setTimeout(() => {
            localStorage.clear();
        }, 600000);
    }

    fileSelectionHandler = event => {
        let fileListObj = event.target.files;
        let photos = [];

        for (var i = 0; i < fileListObj.length; i++) {
            var file = fileListObj[i];
            if (!file.type.startsWith("image/")) continue;
            file.key = new Date().toISOString() + "-" + file.name;

            var fReader = new FileReader();
            fReader.onload = function(aFile) {
                return function(event) {
                    aFile.dataURL = event.target.result;
                    this.setState({
                        selectedFiles: photos,
                        fileBrowserDisplayVal: photos.length + " files selected."
                    });
                }.bind(this);
            }.bind(this)(file);
            photos.push(file);
            fReader.readAsDataURL(file);
        }
    };

    formBtnHandler = event => {
        event.preventDefault();

        if (!(this.state.selectedFiles === [])) {
            const photos = new FormData();
            this.state.selectedFiles.forEach(elm => photos.append("photos", elm));

            API.uploadPhotos(photos)
                .then(res => {
                    window.location.pathname =
                        "/profile/" + localStorage.getItem("username");
                })
                .catch(err => console.log(err));
        } else alert(`WARNING!\nPlease upload at least 1 photo!`);
    };

    render() {
        if (!localStorage.getItem("token")) return <SignUpPg />;
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
                    </div>
                    <div className="row">
                        <div className="col-md">
                            {this.state.selectedFiles.map(file => (
                                <PreviewCard
                                    key={file.key}
                                    alt={file.name}
                                    dataURL={file.dataURL}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProfilePg;
