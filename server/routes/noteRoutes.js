const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
    createNoteSchema,
    updateNoteSchema,
} = require("../validators/noteValidator");

const {
    getNotes,
    createNote,
    updateNote,
    deleteNote,
} = require("../controllers/noteController");

router.use(authMiddleware);

router.get("/", getNotes);

router.post(
    "/",
    validate(createNoteSchema),
    createNote
);

router.put(
    "/:questionId",
    validate(updateNoteSchema),
    updateNote
);

router.delete("/:questionId", deleteNote);

module.exports = router;