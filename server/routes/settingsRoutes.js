const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
    updateProfileSchema,
    updatePasswordSchema,
} = require("../validators/settingsValidator");

const {
    getSettings,
    updateProfile,
    updatePassword,
    deleteAccount,
} = require("../controllers/settingsController");

router.use(authMiddleware);

router.get("/", getSettings);

router.put(
    "/profile",
    validate(updateProfileSchema),
    updateProfile
);

router.put(
    "/password",
    validate(updatePasswordSchema),
    updatePassword
);

router.delete("/account", deleteAccount);

module.exports = router;