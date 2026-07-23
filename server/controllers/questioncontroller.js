const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const Question = require("../models/Question");
const Topic = require("../models/Topic");
const QuestionProgress = require("../models/questionProgressModel");

// ======================================
// GET Questions
// ======================================
const getQuestions = asyncHandler(async (req, res) => {

    const { topicId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(topicId)) {
        res.status(400);
        throw new Error("Invalid Topic ID");
    }

    const topic = await Topic.findById(topicId);

    if (!topic) {
        res.status(404);
        throw new Error("Topic not found");
    }

    const questions = await Question.find({
        topic: topicId,
    }).sort({
        order: 1,
    });

    const progress = await QuestionProgress.find({
        user: req.user._id,
        question: {
            $in: questions.map((question) => question._id),
        },
    });

    const progressMap = {};

    progress.forEach((item) => {
        progressMap[item.question.toString()] = item;
    });

    const result = questions.map((question) => {

        const userProgress = progressMap[question._id.toString()];

        return {
            ...question.toObject(),
            status: userProgress?.status || "Not Started",
            isBookmarked: userProgress?.isBookmarked || false,
            notes: userProgress?.notes || "",
        };

    });

    res.status(200).json(result);

});

// ======================================
// GET Single Question
// ======================================
const getQuestion = asyncHandler(async (req, res) => {

    const { questionId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(questionId)) {
        res.status(400);
        throw new Error("Invalid Question ID");
    }

    const question = await Question.findById(questionId).populate("topic");

    if (!question) {
        res.status(404);
        throw new Error("Question not found");
    }

    const progress = await QuestionProgress.findOne({
        user: req.user._id,
        question: questionId,
    });

    const result = {
        ...question.toObject(),
        status: progress?.status || "Not Started",
        isBookmarked: progress?.isBookmarked || false,
        notes: progress?.notes || "",
    };

    res.status(200).json(result);

});

// ======================================
// PATCH Question Status
// ======================================
const updateStatus = asyncHandler(async (req, res) => {

    const { questionId } = req.params;
    const { status } = req.body;

    if (!mongoose.Types.ObjectId.isValid(questionId)) {
        res.status(400);
        throw new Error("Invalid Question ID");
    }

    const question = await Question.findById(questionId);

    if (!question) {
        res.status(404);
        throw new Error("Question not found");
    }

    const progress = await QuestionProgress.findOneAndUpdate(
        {
            user: req.user._id,
            question: questionId,
        },
        {
            status,
        },
        {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true,
        }
    );

    res.status(200).json(progress);

});

// ======================================
// PATCH Bookmark
// ======================================
const updateBookmark = asyncHandler(async (req, res) => {

    const { questionId } = req.params;
    const { isBookmarked } = req.body;

    if (!mongoose.Types.ObjectId.isValid(questionId)) {
        res.status(400);
        throw new Error("Invalid Question ID");
    }

    const question = await Question.findById(questionId);

    if (!question) {
        res.status(404);
        throw new Error("Question not found");
    }

    const progress = await QuestionProgress.findOneAndUpdate(
        {
            user: req.user._id,
            question: questionId,
        },
        {
            isBookmarked,
        },
        {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true,
        }
    );

    res.status(200).json(progress);

});

// ======================================
// PATCH Question Notes
// ======================================
const updateNotes = asyncHandler(async (req, res) => {

    const { questionId } = req.params;
    const { notes } = req.body;

    if (!mongoose.Types.ObjectId.isValid(questionId)) {
        res.status(400);
        throw new Error("Invalid Question ID");
    }

    const question = await Question.findById(questionId);

    if (!question) {
        res.status(404);
        throw new Error("Question not found");
    }

    const progress = await QuestionProgress.findOneAndUpdate(
        {
            user: req.user._id,
            question: questionId,
        },
        {
            notes: notes.trim(),
        },
        {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true,
        }
    );

    res.status(200).json(progress);

});

module.exports = {
    getQuestions,
    getQuestion,
    updateStatus,
    updateBookmark,
    updateNotes,
};