const asyncHandler=require("express-async-handler");
const User=require("../models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const {OAuth2Client}=require("google-auth-library");
const sendEmail=require("../utils/sendEmail");
const generateOTP=require("../utils/generateOTP");

const client=new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


const createToken=(id)=>{

return jwt.sign(
{id},
process.env.JWT_SECRET,
{
expiresIn:"7d",
}
);

};



// Signup
const signup=asyncHandler(async(req,res)=>{

const {name,email,password}=req.body;

const trimmedName=name.trim();

const trimmedEmail=email.trim().toLowerCase();



const existingUser=await User.findOne({
email:trimmedEmail,
});



if(existingUser){


if(existingUser.isVerified){

res.status(400);

throw new Error("User already exists");

}



// resend OTP for unverified account

const otp=generateOTP();


existingUser.verificationOTP=otp;

existingUser.verificationOTPExpire=
Date.now()+10*60*1000;


if(!existingUser.branch){

existingUser.branch="Computer Science";

}


await existingUser.save();



await sendEmail({

email:trimmedEmail,

subject:"PrepForge Email Verification",

message:`Your PrepForge verification OTP is ${otp}. It expires in 10 minutes.`,

});



return res.status(200).json({

message:"OTP sent to your email",

email:trimmedEmail,

});


}



const otp=generateOTP();



const user=await User.create({

name:trimmedName,

email:trimmedEmail,

password:await bcrypt.hash(password,10),

branch:"Computer Science",

provider:"local",

isVerified:false,

verificationOTP:otp,

verificationOTPExpire:Date.now()+10*60*1000,

});



await sendEmail({

email:trimmedEmail,

subject:"PrepForge Email Verification",

message:`Your PrepForge verification OTP is ${otp}. It expires in 10 minutes.`,

});



res.status(201).json({

message:"OTP sent to your email",

email:user.email,

});

});





// Verify Email
const verifyEmail=asyncHandler(async(req,res)=>{

const {email,otp}=req.body;


const user=await User.findOne({

email:email.trim().toLowerCase(),

}).select("+password");



if(!user){

res.status(404);

throw new Error("User not found");

}



if(user.isVerified){

res.status(400);

throw new Error("Email already verified");

}



if(user.verificationOTP!==otp){

res.status(400);

throw new Error("Invalid OTP");

}



if(user.verificationOTPExpire<Date.now()){

res.status(400);

throw new Error("OTP expired");

}



user.isVerified=true;

user.verificationOTP=null;

user.verificationOTPExpire=null;


if(!user.branch){

user.branch="Computer Science";

}


await user.save();



const token=createToken(user._id);



res.status(200).json({

message:"Email verified successfully",

token,

user:{

_id:user._id,

name:user.name,

email:user.email,

branch:user.branch,

provider:user.provider,

},

});

});





// Login
const login=asyncHandler(async(req,res)=>{

const {email,password}=req.body;



const user=await User.findOne({

email:email.trim().toLowerCase(),

}).select("+password");



if(!user){

res.status(400);

throw new Error("Invalid credentials");

}



if(!user.isVerified){

res.status(400);

throw new Error("Please verify your email first");

}



if(user.provider==="google"){

res.status(400);

throw new Error("Please login using Google");

}



const isMatch=await bcrypt.compare(
password,
user.password
);



if(!isMatch){

res.status(400);

throw new Error("Invalid credentials");

}



if(!user.branch){

user.branch="Computer Science";

await user.save();

}



const token=createToken(user._id);



res.status(200).json({

message:"Login successful",

token,

user:{

_id:user._id,

name:user.name,

email:user.email,

branch:user.branch,

provider:user.provider,

},

});

});





// Google Login
const googleLogin=asyncHandler(async(req,res)=>{

const {token}=req.body;


if(!token){

res.status(400);

throw new Error("Google token missing");

}



const ticket=await client.verifyIdToken({

idToken:token,

audience:process.env.GOOGLE_CLIENT_ID,

});



const payload=ticket.getPayload();



const {
email,
name,
sub:googleId,
}=payload;



const googleEmail=email.toLowerCase();



let user=await User.findOne({

email:googleEmail,

});




// Existing user
if(user){


if(user.provider==="local"){

res.status(400);

throw new Error(
"This email is registered with password. Please login using email and password."
);

}



}



// New Google user
else{


user=await User.create({

name,

email:googleEmail,

googleId,

branch:"Computer Science",

provider:"google",

isVerified:true,

});


}




if(!user.branch){

user.branch="Computer Science";

await user.save();

}



const jwtToken=createToken(user._id);



res.status(200).json({

message:"Google login successful",

token:jwtToken,

user:{

_id:user._id,

name:user.name,

email:user.email,

branch:user.branch,

provider:user.provider,

},

});


});



module.exports={
signup,
verifyEmail,
login,
googleLogin,
};