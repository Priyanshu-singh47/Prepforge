const asyncHandler = require("express-async-handler");

const User = require("../models/User");
const Question = require("../models/Question");
const QuestionProgress = require("../models/questionProgressModel");
const PlannerTask = require("../models/PlannerTask");

const getDashboard = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id).select("-password");

    const totalQuestions = await Question.countDocuments();

    const progress = await QuestionProgress.find({
        user: req.user._id,
    });

    const planner = await PlannerTask.find({
        user: req.user._id,
    })
    .sort({ dueDate: 1 })
    .limit(5);

    const solved = progress.filter(
        item => item.status === "Done"
    ).length;

    const reviewLater = progress.filter(
        item => item.status === "Review Later"
    ).length;

    const bookmarked = progress.filter(
        item => item.isBookmarked
    ).length;

    const notes = progress.filter(
        item => item.notes !== ""
    ).length;

    const completionPercentage =
        totalQuestions === 0
            ? 0
            : Number(((solved / totalQuestions) * 100).toFixed(2));

    res.status(200).json({

        user,

        statistics: {
            totalQuestions,
            solved,
            reviewLater,
            bookmarked,
            notes,
            completionPercentage,
        },

        planner,

    });

});

module.exports = {
    getDashboard,
};