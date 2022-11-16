const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/api").get(controllers.getAllUser).post(controllers.createUser);
router.route("/api/googleRegister").post(controllers.createGoogleUser);
router.route("/api/googleLogin").post(controllers.googleCheckLogin);
router.route("/api/checkUser").post(controllers.checkLogin);

module.exports = router;
