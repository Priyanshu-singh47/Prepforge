const asyncHandler = require("express-async-handler");

const Question = require("../models/Question");
const QuestionProgress = require("../models/questionProgressModel");

// ======================================
// GET /api/notes
// ======================================
const getNotes = asyncHandler(async (req, res) => {

    const notes = await QuestionProgress.find({
        user: req.user._id,
        notes: { $ne: "" },
    }).populate({
        path: "question",
        select: "title difficulty topic",
        populate: {
            path: "topic",
            select: "name",
        },
    });

    res.status(200).json(notes);

});

// ======================================
// POST /api/notes
// ======================================
const createNote = asyncHandler(async (req, res) => {

    const { questionId, notes } = req.body;

    const question = await Question.findById(questionId);

    if (!question) {
        res.status(404);
        throw new Error("Question not found");
    }

    let progress = await QuestionProgress.findOne({
        user: req.user._id,
        question: questionId,
    });

    if (!progress) {

        progress = await QuestionProgress.create({
            user: req.user._id,
            question: questionId,
            notes,
        });

    } else {

        progress.notes = notes;

        await progress.save();

    }

    res.status(201).json(progress);

});

// ======================================
// PUT /api/notes/:questionId
// ======================================
const updateNote = asyncHandler(async (req, res) => {

    const { notes } = req.body;

    const progress = await QuestionProgress.findOne({
        user: req.user._id,
        question: req.params.questionId,
    });

    if (!progress) {
        res.status(404);
        throw new Error("Note not found");
    }

    progress.notes = notes;

    await progress.save();

    res.status(200).json(progress);

});

// ======================================
// DELETE /api/notes/:questionId
// ======================================
const deleteNote = asyncHandler(async (req, res) => {

    const progress = await QuestionProgress.findOne({
        user: req.user._id,
        question: req.params.questionId,
    });

    if (!progress) {
        res.status(404);
        throw new Error("Note not found");
    }

    progress.notes = "";

    await progress.save();

    res.status(200).json({
        message: "Note deleted successfully",
    });

});

module.exports = {
    getNotes,
    createNote,
    updateNote,
    deleteNote,
};