const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    getNotifications,
    dismissNotification,
} = require("../controllers/notificationController");


router.use(authMiddleware);


// GET /api/notifications

router.get(
    "/",
    getNotifications
);


// PATCH /api/notifications/:id/dismiss

router.patch(
    "/:id/dismiss",
    dismissNotification
);


module.exports = router;