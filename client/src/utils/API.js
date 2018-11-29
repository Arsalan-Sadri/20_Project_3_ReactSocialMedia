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
    updateUser: userNewInfo =>
        axios({
            method: "post",
            url: "/api/user/update-user/" + userNewInfo.username,
            data: userNewInfo,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }),
    uploadPhotos: photos =>
        axios({
            method: "post",
            url: "/api/user/" + localStorage.getItem("username") + "/photos",
            data: photos,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }),
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
