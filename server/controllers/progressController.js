const asyncHandler = require("express-async-handler");

const Question = require("../models/Question");
const QuestionProgress = require("../models/questionProgressModel");

// ======================================
// GET /api/progress
// ======================================
const getProgress = asyncHandler(async (req, res) => {

    const progress = await QuestionProgress.find({
        user: req.user._id,
    }).populate({
        path: "question",
        select: "title difficulty topic",
        populate: {
            path: "topic",
            select: "name",
        },
    });

    res.status(200).json(progress);

});

// ======================================
// GET /api/progress/topic/:topicId
// ======================================
const getTopicProgress = asyncHandler(async (req, res) => {

    const { topicId } = req.params;

    const questions = await Question.find({
        topic: topicId,
    }).select("_id");

    const questionIds = questions.map(question => question._id);

    const progress = await QuestionProgress.find({
        user: req.user._id,
        question: {
            $in: questionIds,
        },
    }).populate("question", "title difficulty");

    res.status(200).json(progress);

});

// ======================================
// PATCH /api/progress/:questionId
// ======================================
const updateProgress = asyncHandler(async (req, res) => {

    const { questionId } = req.params;

    const {
        status,
        isBookmarked,
        notes,
    } = req.body;

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
        });

    }

    if (status !== undefined) {
        progress.status = status;
    }

    if (isBookmarked !== undefined) {
        progress.isBookmarked = isBookmarked;
    }

    if (notes !== undefined) {
        progress.notes = notes;
    }

    await progress.save();

    res.status(200).json(progress);

});

// ======================================
// GET /api/progress/stats
// ======================================
const getProgressStats = asyncHandler(async (req, res) => {

    const progress = await QuestionProgress.find({
        user: req.user._id,
    });

    const total = await Question.countDocuments();

    const done = progress.filter(
        item => item.status === "Done"
    ).length;

    const reviewLater = progress.filter(
        item => item.status === "Review Later"
    ).length;

    const notStarted = total - done - reviewLater;

    const bookmarked = progress.filter(
        item => item.isBookmarked
    ).length;

    const completionPercentage =
        total === 0
            ? 0
            : Number(((done / total) * 100).toFixed(2));

    res.status(200).json({
        totalQuestions: total,
        done,
        reviewLater,
        notStarted,
        bookmarked,
        completionPercentage,
    });

});

module.exports = {
    getProgress,
    getTopicProgress,
    updateProgress,
    getProgressStats,
};