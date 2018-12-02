const db = require("../models");
const userController = require("./userController");

module.exports = {
    createEvent: (req, res) => {
        req.body.photoURL = req.file.path;
        db.Event.create(req.body)
            .then(dbEvent => {
                userController
                    .updateUserEvents(req.body.username, dbEvent._id, req.headers.host)
                    .then(dbUser => res.send(dbUser))
                    .catch(err => console.log(err));
            })
            .catch(err => res.send(err));
    }
};
