const express = require("express");

const router = express.Router();

const {
    getQuestions,
    getQuestion,
    updateStatus,
    updateBookmark,
    updateNotes,
} = require("../controllers/questionController");

const authMiddleware = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
    updateStatusSchema,
    updateBookmarkSchema,
    updateNotesSchema,
} = require("../validators/questionValidator");

router.get(
    "/topic/:topicId",
    authMiddleware,
    getQuestions
);

router.get(
    "/:questionId",
    authMiddleware,
    getQuestion
);

router.patch(
    "/:questionId/status",
    authMiddleware,
    validate(updateStatusSchema),
    updateStatus
);

router.patch(
    "/:questionId/bookmark",
    authMiddleware,
    validate(updateBookmarkSchema),
    updateBookmark
);

router.patch(
    "/:questionId/notes",
    authMiddleware,
    validate(updateNotesSchema),
    updateNotes
);

module.exports = router;