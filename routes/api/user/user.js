const middleware = require("../../../middleware");
const path = require("path");
const router = require("express").Router();
const userControlller = require("../../../controllers/userController");

router
    .route("/sign-up")
    .post(userControlller.createAndSignIn);

router
    .route("/sign-in")
    .post(userControlller.signIn);
    
// Matches with "/api/user/:username"
router
    .route("/:username")
    .get((req, res) => {
        // token is in req headers
        res.send("Hiiii");
    });

module.exports = router;
