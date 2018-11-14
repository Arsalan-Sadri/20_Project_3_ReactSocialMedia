const router = require("express").Router();
const userControlller = require("../../../controllers/userController");
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
    .post(upload.single("profilePic"), userControlller.signUp);


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
