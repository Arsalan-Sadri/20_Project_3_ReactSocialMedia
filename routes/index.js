const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const middleware = require("../middleware");

router
    .route("/")
    .get((req, res) =>
        res.sendFile(path.join(__dirname, "../client/build/index.html"))
    );

router
    .use("/api", apiRoutes);

router
    .use(middleware.verifyToken);

router
    .use((req, res) =>
        res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
