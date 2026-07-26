const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const Note = require("../models/Note");
const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const Question = require("../models/Question");

// ======================================
// GET /api/notes
// ======================================
const getNotes = asyncHandler(async (req, res) => {
    const { search = "", subject = "" } = req.query;

    const query = {
        user: req.user._id,
    };

    if (subject) {
        if (!mongoose.Types.ObjectId.isValid(subject)) {
            res.status(400);
            throw new Error("Invalid Subject ID");
        }

        query.subject = subject;
    }

    if (search.trim()) {
        query.$or = [
            {
                title: {
                    $regex: search,
                    $options: "i",
                },
            },
            {
                content: {
                    $regex: search,
                    $options: "i",
                },
            },
        ];
    }

    const notes = await Note.find(query)
        .populate("subject", "name")
        .sort({
            updatedAt: -1,
        });

    res.status(200).json(notes);
});

// ======================================
// POST /api/notes
// ======================================
const createNote = asyncHandler(async (req, res) => {
    const { subject, question, title, content, tags } = req.body;

    if (!mongoose.Types.ObjectId.isValid(subject)) {
        res.status(400);
        throw new Error("Invalid Subject ID");
    }

    const subjectExists = await Subject.findById(subject);

    if (!subjectExists) {
        res.status(404);
        throw new Error("Subject not found");
    }

    const note = await Note.create({
        user: req.user._id,
        title: title.trim(),
        content: content.trim(),
        subject,
        tags: tags || [],
    });

    const populatedNote = await Note.findById(note._id).populate(
        "subject",
        "name"
    );

    res.status(201).json(populatedNote);
});

// ======================================
// PUT /api/notes/:id
// ======================================
const updateNote = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, content, subject, tags } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error("Invalid Note ID");
    }

    if (!mongoose.Types.ObjectId.isValid(subject)) {
        res.status(400);
        throw new Error("Invalid Subject ID");
    }

    const subjectExists = await Subject.findById(subject);

    if (!subjectExists) {
        res.status(404);
        throw new Error("Subject not found");
    }

    const note = await Note.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!note) {
        res.status(404);
        throw new Error("Note not found");
    }

    note.title = title.trim();
    note.content = content.trim();
    note.subject = subject;
    note.tags = tags || [];

    await note.save();

    const updatedNote = await Note.findById(note._id).populate(
        "subject",
        "name"
    );

    res.status(200).json(updatedNote);
});

// ======================================
// DELETE /api/notes/:id
// ======================================
const deleteNote = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error("Invalid Note ID");
    }

    const note = await Note.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!note) {
        res.status(404);
        throw new Error("Note not found");
    }

    await note.deleteOne();

    res.status(200).json({
        message: "Note deleted successfully",
    });
});

// ======================================
// GET /api/notes/question/:questionId
// ======================================
const getQuestionNote = asyncHandler(async (req, res) => {
    const { questionId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(questionId)) {
        res.status(400);
        throw new Error("Invalid question ID");
    }

    const note = await Note.findOne({
        user: req.user._id,
        question: questionId,
    });

    res.status(200).json(note);
});

// ======================================
// POST /api/notes/question/:questionId
// ======================================
const saveQuestionNote = asyncHandler(async (req, res) => {
    const { questionId } = req.params;
    const { content } = req.body;

    if (!mongoose.Types.ObjectId.isValid(questionId)) {
        res.status(400);
        throw new Error("Invalid question ID");
    }

    if (!content || !content.trim()) {
        res.status(400);
        throw new Error("Content is required");
    }

    const question = await Question.findById(questionId).populate("topic");

    if (!question) {
        res.status(404);
        throw new Error("Question not found");
    }

    let note = await Note.findOne({
        user: req.user._id,
        question: questionId,
    });

    if (note) {
        note.content = content;
        await note.save();

        return res.status(200).json(note);
    }

    note = await Note.create({
        user: req.user._id,
        subject: question.topic.subject,
        question: questionId,
        title: question.title,
        content,
        tags: [],
    });

    res.status(201).json(note);
});

module.exports = {
    getNotes,
    createNote,
    updateNote,
    deleteNote,
    getQuestionNote,
    saveQuestionNote,
};