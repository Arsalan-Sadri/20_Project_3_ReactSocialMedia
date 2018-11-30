const router = require("express").Router();
const eventController = require("../../../controllers/eventController");
const middleware = require("../../../middleware");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "./uploads/"),
    filename: (req, file, cb) =>
        cb(null, new Date().toISOString() + "-" + file.originalname)
});
const upload = multer({ storage });

/* 
        /api/event
 */

router
    .use(middleware.verifyToken);

 router
    .route("/create-event")
    .post(upload.single("photo"), eventController.createEvent);

module.exports = router;
