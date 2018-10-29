// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const userAuth = require("../../../middleware/user-auth");
// const db = require("../../../models/user");
// if (process.env.NODE_ENV !== 'production') require("dotenv").load();

const router = require("express").Router();
const userControlller = require("../../../controllers/userController");

router
    .route("/")
    .get(function (req, res, next) {
        res.send("It just works!");
    });

router
    .route("/sign-up")
    .post(userControlller.create);

router
    .route("/sign-in")
    .post(userControlller.signIn);


module.exports = router;
