import axios from "axios";

export default {
    signUp: newUser => axios.post("/api/user/sign-up", newUser),
    signIn: userCredential => axios.post("/api/user/sign-in", userCredential),
    getDbUser: username =>
        axios({
            method: "get",
            url: "/api/user/" + username,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }),
    updateProfile: userNewInfo =>
        axios({
            method: "post",
            url: "/api/user/" + userNewInfo.get("username") + "/update-profile",
            data: userNewInfo,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }),
    uploadPhotos: photos =>
        axios({
            method: "post",
            url: "/api/user/" + localStorage.getItem("username") + "/upload-photos",
            data: photos,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }),
    createEvent: newEvent => axios.post("/api/event/create-event", newEvent),
    getAllUsers: function() {
        return axios({
            method: "get",
            url: "/api/user/search-friends",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }
};
