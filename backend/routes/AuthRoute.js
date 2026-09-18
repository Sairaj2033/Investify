const { Signup } = require("../Controllers/AuthController");
const router = require("express").Router();
const { userVerification } = require("../Middlewares/AuthMiddleware");
const { Login } = require("../Controllers/AuthController");

router.post("/verify", userVerification);
router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;
