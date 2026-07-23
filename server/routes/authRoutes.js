const express = require("express");

const router = express.Router();

const authLimiter = require("../middleware/rateLimiter");
const validate = require("../middleware/validate");

const {
    signupSchema,
    loginSchema,
} = require("../validators/authValidator");

const {
    signup,
    login,
} = require("../controllers/authController");

router.post(
    "/signup",
    authLimiter,
    validate(signupSchema),
    signup
);

router.post(
    "/login",
    authLimiter,
    validate(loginSchema),
    login
);

module.exports = router;