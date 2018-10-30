const middleware = require("../../../middleware");
const path = require("path");
const router = require("express").Router();
const userControlller = require("../../../controllers/userController");

/* 
        /api/user
 */

 router
    .route("/sign-up")
    .post(userControlller.createAndSignIn);


router
    .route("/sign-in")
    .post(userControlller.signIn);
    

router
    .route("/:username")
    .get((req, res) => {
        // token is in the req headers
        res.send("Hiiii");
    });

module.exports = router;
