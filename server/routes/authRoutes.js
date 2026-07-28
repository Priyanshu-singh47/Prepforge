const express=require("express");
const router=express.Router();

const authLimiter=require("../middleware/rateLimiter");
const validate=require("../middleware/validate");

const {
signupSchema,
loginSchema,
verifyEmailSchema,
}=require("../validators/authValidator");

const {
signup,
verifyEmail,
resendOTP,
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
validate(verifyEmailSchema),
verifyEmail
);


router.post(
"/resend-otp",
authLimiter,
resendOTP
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