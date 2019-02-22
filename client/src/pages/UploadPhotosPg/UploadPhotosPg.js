import React from "react";
import API from "../../utils/api/API";
import Navbar from "../../components/Navbar";
import UploadPhotosForm from "../../components/UploadPhotosForm";
import PreviewCard from "../../components/PreviewCard";
import Footer from "../../components/Footer";
import "./UploadPhotosPg.css";

class UploadPhotosPg extends React.Component {
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
            fReader.onload = function(selectedFileImg) {
                return function(event) {
                    selectedFileImg.dataURL = event.target.result;
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

    uploadBtnHandler = event => {
        event.preventDefault();

        if (!(this.state.selectedFiles === [])) {
            const photos = new FormData();
            this.state.selectedFiles.forEach(elm => photos.append("photos", elm));

            API.user
                .uploadPhotos(photos)
                .then(res => {
                    window.location.pathname =
                        "/profile/" + localStorage.getItem("username");
                })
                .catch(err => console.log(err));
        } else alert(`WARNING!\nPlease upload at least 1 photo!`);
    };

    render() {
        if (
            !localStorage.getItem("token") ||
            localStorage.getItem("token") === "undefined"
        )
            return (window.location.pathname = "/");
        return (
            <React.Fragment>
                <Navbar />
                <div className="container-fluid bg-light py-5 main-container">
                    <div className="row">
                        <div className="col-sm-auto">
                            <UploadPhotosForm
                                fileBrowserDisplayVal={this.state.fileBrowserDisplayVal}
                                fileSelectionHandler={this.fileSelectionHandler}
                                uploadBtnHandler={this.uploadBtnHandler}
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

export default UploadPhotosPg;
