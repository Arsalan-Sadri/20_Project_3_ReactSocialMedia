import axios from "axios";

export default {
    createEvent: (newEvent) =>
        axios({
            method: "post",
            url: "/api/event/create-event",
            data: newEvent,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
};
