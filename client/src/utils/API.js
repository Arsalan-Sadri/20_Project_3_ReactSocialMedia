import axios from "axios";

export default {
    signUp: function(newUser) {
        return axios.post("/api/user/sign-up", newUser);
    },
    signIn: function(User) {
        return axios.post("/api/user/sign-in", User);
    },
    getProfile: function (token) {

    }
};
