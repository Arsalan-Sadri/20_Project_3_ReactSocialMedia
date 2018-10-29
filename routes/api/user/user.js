const middleware = require("../../../middleware");

const router = require("express").Router();
const userControlller = require("../../../controllers/userController");

router
    .use((req, res, next) => {
        console.log("\n**********\nGateway middleware is hit!\n**********\n");
        next();
    });

router
    .route("/")
    .get((req, res, next) => res.send("It just works!")
    );

router
    .route("/sign-up")
    .post(userControlller.createAndSignIn);

router
    .route("/sign-in")
    .post(userControlller.signIn);

router
    .route("/posts")
    .post(middleware.verifyToken, (req, res, next) => res.send("Posted!!!"));

module.exports = router;
