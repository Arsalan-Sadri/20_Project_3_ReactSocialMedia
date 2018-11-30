const db = require("../models");

module.exports = {
    createEvent: (req, res) => {
        req.body.photoURL = req.file.path;
        db.Event.create(req.body)
            .then(dbEvent => res.send(dbEvent))
            .catch(err => res.send(err));
    }
};
