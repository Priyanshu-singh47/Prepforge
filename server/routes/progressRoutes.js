const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
    updateProgressSchema,
} = require("../validators/progressValidator");

const {
    getProgress,
    getTopicProgress,
    updateProgress,
    getProgressStats,
} = require("../controllers/progressController");

router.use(authMiddleware);

router.get("/", getProgress);

router.get("/stats", getProgressStats);

router.get("/topic/:topicId", getTopicProgress);

router.patch(
    "/:questionId",
    validate(updateProgressSchema),
    updateProgress
);

module.exports = router;