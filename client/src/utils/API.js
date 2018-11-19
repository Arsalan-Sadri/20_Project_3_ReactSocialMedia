import axios from "axios";

export default {
    signUp: function(newUser) {
        return axios.post("/api/user/sign-up", newUser);
    },
    signIn: function(userCredential) {
        return axios.post("/api/user/sign-in", userCredential);
    },
    getHTML: function(url) {
        return axios({
            method: "get",
            url: url,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    },
    verifyMe: function() {
        return axios({
            method: "get",
            url: "",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    },
    getDbUser: function() {
        return axios({
            method: "get",
            url: "/api/user/" + localStorage.getItem("username"),
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    },
    uploadPhotos: function(photos) {
        return axios({
            method: "post",
            url: "/api/user/" + localStorage.getItem("username") + "/photos",
            data: photos,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    },
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
