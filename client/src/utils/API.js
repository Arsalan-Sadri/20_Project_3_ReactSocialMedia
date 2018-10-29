import axios from "axios";

export default {
    signUp: function(newUser) {
        return axios.post("/sign-up", newUser);
    },
    signIn: function(User) {
        return axios.post("/sign-in", User);
    }
};

