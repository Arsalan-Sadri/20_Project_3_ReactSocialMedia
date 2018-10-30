const middleware = require("../../../middleware");
const path = require("path");
const router = require("express").Router();
const userControlller = require("../../../controllers/userController");

router
    .route("/sign-up")
    .get((req, res) => res.sendFile(path.join(__dirname, "../../../client/build/index.html")))
    .post(userControlller.createAndSignIn);

router
    .route("/sign-in")
    .get((req, res) => res.sendFile(path.join(__dirname, "../../../client/build/index.html")))
    .post(userControlller.signIn);

// router
//     .use(middleware.verifyToken);

router
    .route("/profile")
    .get((req, res) => res.sendFile(path.join(__dirname, "../../../client/build/index.html")))
    .post(middleware.verifyToken, (req, res) => {

    });
    

module.exports = router;
