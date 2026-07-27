const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID
);


// ======================================
// Signup
// ======================================
const signup = asyncHandler(async(req,res)=>{

    const {name,email,password}=req.body;

    const trimmedName=name.trim();
    const trimmedEmail=email.trim().toLowerCase();


    const existingUser=await User.findOne({
        email:trimmedEmail,
    });


    if(existingUser){
        res.status(400);
        throw new Error("User already exists");
    }


    const hashedPassword=await bcrypt.hash(
        password,
        10
    );


    await User.create({

        name:trimmedName,

        email:trimmedEmail,

        password:hashedPassword,

        provider:"local",

    });


    res.status(201).json({

        message:"User registered successfully",

    });

});



// ======================================
// Login
// ======================================
const login=asyncHandler(async(req,res)=>{

    const {email,password}=req.body;


    const trimmedEmail=email
        .trim()
        .toLowerCase();



    const user=await User.findOne({
        email:trimmedEmail,
    }).select("+password");



    if(!user){

        res.status(400);
        throw new Error("Invalid credentials");

    }



    if(user.provider==="google"){

        res.status(400);
        throw new Error(
            "Please login using Google"
        );

    }



    const isMatch=await bcrypt.compare(

        password,

        user.password

    );



    if(!isMatch){

        res.status(400);
        throw new Error("Invalid credentials");

    }



    if(!process.env.JWT_SECRET){

        throw new Error(
            "JWT Secret missing"
        );

    }



    const token=jwt.sign(

        {
            id:user._id,
        },

        process.env.JWT_SECRET,

        {
            expiresIn:"7d",
        }

    );



    const {
        password:pass,
        ...userData
    }=user._doc;



    res.status(200).json({

        message:"Login successful",

        token,

        user:userData,

    });

});




// ======================================
// Google Login / Signup
// ======================================
const googleLogin=asyncHandler(async(req,res)=>{

    const {token}=req.body;


    if(!token){

        res.status(400);

        throw new Error(
            "Google token missing"
        );

    }



    const ticket=await client.verifyIdToken({

        idToken:token,

        audience:
        process.env.GOOGLE_CLIENT_ID,

    });



    const payload=ticket.getPayload();



    const {
        email,
        name,
        sub:googleId,
    }=payload;



    let user=await User.findOne({
        email,
    });



    // Existing user

    if(user){


        // Link Google with local account

        if(user.provider==="local"){

            user.googleId=googleId;

            user.provider="google";

            await user.save();

        }


    }

    // New Google user

    else{


        user=await User.create({

            name,

            email,

            googleId,

            provider:"google",

        });


    }




    if(!process.env.JWT_SECRET){

        throw new Error(
            "JWT Secret missing"
        );

    }



    const jwtToken=jwt.sign(

        {
            id:user._id,
        },

        process.env.JWT_SECRET,

        {
            expiresIn:"7d",
        }

    );



    const {
        password,
        ...userData
    }=user._doc;



    res.status(200).json({

        message:"Google login successful",

        token:jwtToken,

        user:userData,

    });

});



module.exports={

    signup,

    login,

    googleLogin,

};