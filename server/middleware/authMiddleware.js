const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const authMiddleware = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401);
        throw new Error("No token provided");
    }

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT Secret missing");
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            res.status(401);
            throw new Error("User not found");
        }

        req.user = user;

        next();
    } catch (error) {
        res.status(401);
        throw new Error("Invalid or expired token");
    }
});

module.exports = authMiddleware;