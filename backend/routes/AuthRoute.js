const { Signup } = require("../Controllers/AuthController");
const router = require("express").Router();
const { userVerification } = require("../Middlewares/AuthMiddleware");
const { Login } = require("../Controllers/AuthController");
const { Logout} = require("../Controllers/AuthController");

router.post("/verify", userVerification);
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout",Logout);

module.exports = router;
