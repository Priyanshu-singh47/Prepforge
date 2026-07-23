const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

// ======================================
// GET /api/settings
// ======================================
const getSettings = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id)
        .select("-password");

    res.status(200).json(user);

});

// ======================================
// PUT /api/settings/profile
// ======================================
const updateProfile = asyncHandler(async (req, res) => {

    const { name, email } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }

    if (name) {
        user.name = name.trim();
    }

    if (email) {

        const trimmedEmail = email.trim().toLowerCase();

        const existingUser = await User.findOne({
            email: trimmedEmail,
        });

        if (
            existingUser &&
            existingUser._id.toString() !== user._id.toString()
        ) {
            res.status(400);
            throw new Error("Email already in use");
        }

        user.email = trimmedEmail;

    }

    await user.save();

    const { password, ...userData } = user._doc;

    res.status(200).json({
        message: "Profile updated successfully",
        user: userData,
    });

});

// ======================================
// PUT /api/settings/password
// ======================================
const updatePassword = asyncHandler(async (req, res) => {

    const {
        currentPassword,
        newPassword,
    } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(
        currentPassword,
        user.password
    );

    if (!isMatch) {
        res.status(400);
        throw new Error("Current password is incorrect");
    }

    user.password = await bcrypt.hash(
        newPassword,
        10
    );

    await user.save();

    res.status(200).json({
        message: "Password updated successfully",
    });

});

// ======================================
// DELETE /api/settings/account
// ======================================
const deleteAccount = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id);

    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }

    await user.deleteOne();

    res.status(200).json({
        message: "Account deleted successfully",
    });

});

module.exports = {
    getSettings,
    updateProfile,
    updatePassword,
    deleteAccount,
};