import axios from "axios";

export default {
    signUp: function(newUser) {
        return axios.post("/api/user/sign-up", newUser);
    },
    signIn: function(userCredential) {
        return axios.post("/api/user/sign-in", userCredential);
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
