const router = require("express").Router();
const userRoutes = require("./user");
const eventRoutes = require("./event");

router.use("/user", userRoutes);
router.use("/event", eventRoutes);

module.exports = router;
