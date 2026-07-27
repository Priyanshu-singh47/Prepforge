const express=require("express");

const router=express.Router();

const authLimiter=require("../middleware/rateLimiter");
const validate=require("../middleware/validate");

const {
signupSchema,
loginSchema,
}=require("../validators/authValidator");

const {
signup,
verifyEmail,
login,
googleLogin,
}=require("../controllers/authController");



router.post(
"/signup",
authLimiter,
validate(signupSchema),
signup
);



router.post(
"/verify-email",
authLimiter,
verifyEmail
);



router.post(
"/login",
authLimiter,
validate(loginSchema),
login
);



router.post(
"/google",
authLimiter,
googleLogin
);



module.exports=router;