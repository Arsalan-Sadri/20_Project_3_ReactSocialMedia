const db = require("../models");

module.exports = {
    createEvent: (req, res) => {
        db.Event.create(req.body)
            .then(dbEvent => res.send(dbEvent))
            .catch(err => res.send(err));
    }
};
