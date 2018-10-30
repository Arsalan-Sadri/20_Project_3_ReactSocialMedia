const middleware = require("../../../middleware");
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
    .use(middleware.verifyToken);

router
    .route("/:username")
    .get(userControlller.findAndReturn);

router
    .route("/search-friends")
    .get(userControlller.findAll);

module.exports = router;
