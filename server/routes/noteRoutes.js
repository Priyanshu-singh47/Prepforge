const express = require("express");
const {
    getNotes,
    createNote,
    updateNote,
    deleteNote,
    getQuestionNote,
    saveQuestionNote,
} = require("../controllers/noteController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.use(protect);

// Notes CRUD
router.route("/")
    .get(getNotes)
    .post(createNote);

// Question Notes
router.route("/question/:questionId")
    .get(getQuestionNote)
    .post(saveQuestionNote);

// Update/Delete Note
router.route("/:id")
    .put(updateNote)
    .delete(deleteNote);

module.exports = router;