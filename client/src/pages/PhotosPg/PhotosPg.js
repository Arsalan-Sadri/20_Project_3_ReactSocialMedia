import React from "react";
import "./PhotosPg.css";
import API from "../../utils/API";
import Navbar from "../../components/Navbar";
import PhotosForm from "../../components/PhotosForm";
import PreviewCard from "../../components/PreviewCard";
import Footer from "../../components/Footer";

class ProfilePg extends React.Component {
    state = {
        selectedFiles: [],
        selectedFilesSrc: [],
        fileBrowserDisplayVal: "Upload your picture(s)..."
    };

    componentWillMount() {
        if (!localStorage.getItem("username")) window.location.href = "/";
    }

    fileSelectionHandler = event => {
        let fileListObj = event.target.files;
        let photos = [];
        for (var i = 0; i < fileListObj.length; i++) {
            var file = fileListObj[i];

            if (!file.type.startsWith("image/")) continue;

            var fReader = new FileReader();
            // Attahcing a src property to each file: file.src = event.target.result
            fReader.onload = (function(anImg) {
                return function(event) {
                    anImg.src = event.target.result;
                };
            })(file);
            fReader.readAsDataURL(file);
            photos.push(file);
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
                        {/* <PreviewCard
                            alt={this.state.}
                            scr={} /> */}
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProfilePg;
