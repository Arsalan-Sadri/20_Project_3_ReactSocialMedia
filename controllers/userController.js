const db = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").load();

module.exports = {
    signUp: (req, res) => {
        bcrypt.hash(req.body.password, 10, function(err, encrypted) {
            if (err) res.sendStatus(400);
            else {
                req.body.password = encrypted;
                req.body.picPath = req.file.path;
                db.User.create(req.body)
                    .then(dbUser => {
                        jwt.sign(
                            {
                                email: dbUser.email
                            },
                            process.env.JWT_KEY,
                            {
                                expiresIn: "1h"
                            },
                            function(err, token) {
                                if (err) res.send(err);
                                else {
                                    res.json({
                                        token: token,
                                        username: dbUser.username
                                    });
                                }
                            }
                        );
                    })
                    .catch(err => res.send(err));
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
                                expiresIn: "1h"
                            },
                            function(err, token) {
                                if (err) res.send(err);
                                else {
                                    res.json({
                                        token: token,
                                        username: dbUser.username
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
    findAndReturn: (req, res) => {
        db.User.findOne({
            username: req.params.username
        })
            .then(function(dbUser) {
                res.send({
                    firstName: dbUser.firstName,
                    lastName: dbUser.lastName,
                    jobTitle: dbUser.jobTitle,
                    city: dbUser.city,
                    state: dbUser.state,
                    username: dbUser.username,
                    email: dbUser.email,
                    picPath: "http://" + req.headers.host + "/" + dbUser.picPath
                });
            })
            .catch(function(err) {
                res.send("User not found!");
            });
    },
    findAll: (req, res) =>
        db.User.find({})
            .then(allDbUsers => res.json(allDbUsers))
            .catch(err => res.send("User not found!"))
};
