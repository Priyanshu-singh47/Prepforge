const asyncHandler = require("express-async-handler");

const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ======================================
// Signup
// ======================================
const signup = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({
        email: trimmedEmail,
    });

    if (existingUser) {
        res.status(400);
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        name: trimmedName,
        email: trimmedEmail,
        password: hashedPassword,
    });

    res.status(201).json({
        message: "User registered successfully",
    });

});

// ======================================
// Login
// ======================================
const login = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const trimmedEmail = email.trim().toLowerCase();

    const user = await User.findOne({
        email: trimmedEmail,
    });

    if (!user) {
        res.status(400);
        throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!isMatch) {
        res.status(400);
        throw new Error("Invalid credentials");
    }

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT Secret missing");
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        }
    );

    const { password: pass, ...userData } = user._doc;

    res.status(200).json({
        message: "Login successful",
        token,
        user: userData,
    });

});

module.exports = {
    signup,
    login,
};