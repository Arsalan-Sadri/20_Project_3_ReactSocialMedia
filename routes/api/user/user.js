const router = require("express").Router();
const userController = require("../../../controllers/userController");
const middleware = require("../../../middleware");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "./uploads/"),
    filename: (req, file, cb) =>
        cb(null, new Date().toISOString() + "-" + file.originalname)
});
const upload = multer({ storage });

/* 
        /api/user
 */

 router
    .route("/sign-up")
    .post(upload.single("photo"), userController.signUp);

router
    .route("/sign-in")
    .post(userController.signIn);


router
    .use(middleware.verifyToken);

router
    .route("/:username")
    .get(userController.findOneAndReturn);

router
    .route("/:username/update-profile")
    .post(upload.single("photo"), userController.updateOneAndReturn);
    
router
    .route("/:username/upload-photos")
    .post(upload.array("photos", 10));

router
    .route("/:username/events")
    .get(userController.getUserEvents)

module.exports = router;
