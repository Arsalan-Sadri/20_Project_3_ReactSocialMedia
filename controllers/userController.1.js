const db = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
if (process.env.NODE_ENV !== 'production') require("dotenv").load();

module.exports = {

    create: function(req, res) {
        bcrypt.hash(req.body.password, 10, function(err, encrypted) {
            if (err) res.sendStatus(400);
            else {
                req.body.password = encrypted;
                db.User
                    .create(req.body)
                    .then(addedUser => res.json(addedUser))
                    .catch(err => res.send(err));
            }
        });
    },
    signIn: function(req, res) {
        db.User
            .findOne({
                email: req.body.email
            }).then(function (dbUser) {
                bcrypt.compare(req.body.password, dbUser.password, function (err, passVerified) {
                    if (err) res.send(err);
                    else if (passVerified) {
                        jwt.sign({
                            email: dbUser.email
                        }, process.env.JWT_KEY, {
                                expiresIn: "1h"
                            }, function (err, token) {
                                if (err) res.send(err);
                                else {
                                    res.send(token);
                                }
                            });

                    } else res.send("Wrong password!"); 
                });
            }).catch(function (err) {
                res.send("Email not found!");
            });
    }
};