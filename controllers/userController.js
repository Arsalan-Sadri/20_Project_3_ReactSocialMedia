const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

module.exports = {
    signUp: (req, res) => {
        bcrypt.hash(req.body.password, 10, function(err, encrypted) {
            if (err) res.sendStatus(400);
            else {
                req.body.password = encrypted;
                req.body.photoURL = req.file.path;
                db.User.create(req.body)
                    .then(dbUser => {
                        jwt.sign(
                            {
                                email: dbUser.email
                            },
                            process.env.JWT_KEY,
                            {
                                expiresIn: 600000
                            },
                            function(err, token) {
                                if (err) res.send(err);
                                else {
                                    res.json({
                                        token: token,
                                        username: dbUser.username,
                                        firstName: dbUser.firstName
                                    });
                                }
                            }
                        );
                    })
                    .catch(err => {
                        console.log(err);
                        res.send(err);
                    });
            }
        });
    },
    signIn: (req, res) => {
        db.User.findOne({
            email: req.body.email
        })
            .then(function(dbUser) {
                bcrypt.compare(req.body.password, dbUser.password, function(
                    err,
                    passVerified
                ) {
                    if (err) res.send(err);
                    else if (passVerified) {
                        jwt.sign(
                            {
                                email: dbUser.email
                            },
                            process.env.JWT_KEY,
                            {
                                expiresIn: 600000
                            },
                            function(err, token) {
                                if (err) res.send(err);
                                else {
                                    res.json({
                                        token: token,
                                        username: dbUser.username,
                                        firstName: dbUser.firstName
                                    });
                                }
                            }
                        );
                    } else res.send("Wrong password!");
                });
            })
            .catch(function(err) {
                res.send("Email not found!");
            });
    },
    findOneAndReturn: (req, res) => {
        db.User.findOne({
            username: req.params.username
        })
            .then(dbUser => {
                delete dbUser.password;
                res.send(dbUser);
            })
            .catch(err => res.send("User not found!"));
    },
    updateOneAndReturn: (req, res) => {
        db.User.findOneAndUpdate({ username: req.params.username }, req.body, {
            new: true
        })
            .then(dbUser => {
                delete dbUser.password;
                dbUser.photoURL = `http://${req.headers.host}/${dbUser.photoURL}`;
                res.send(dbUser);
            })
            .catch(err => res.send("User not found!"));
    },
    createUserEvent: (username, eventID, host) =>
        db.User.findOneAndUpdate(
            { username: username },
            { $push: { events: eventID } },
            { new: true }
        ).then(dbUser => {
            delete dbUser.password;
            dbUser.photoURL = `http://${host}/${dbUser.photoURL}`;
            return dbUser;
        }),
    getUserEvents: (req, res) => {
        db.User.findOne({ username: req.params.username })
            .populate("events")
            .then(dbUser => {
                delete dbUser.password;
                dbUser.photoURL = `http://${req.headers.host}/${dbUser.photoURL}`;
                res.send(dbUser);
            })
            .catch(err => {
                console.log(err);
                res.send(err);
            });
    },
    findAll: (req, res) =>
        db.User.find({})
            .then(allDbUsers => res.json(allDbUsers))
            .catch(err => res.send("User not found!"))
};
