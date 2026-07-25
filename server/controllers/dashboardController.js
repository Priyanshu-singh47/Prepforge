const asyncHandler = require("express-async-handler");

const User = require("../models/User");
const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const Question = require("../models/Question");
const QuestionProgress = require("../models/questionProgressModel");
const PlannerTask = require("../models/PlannerTask");

const getDashboard = asyncHandler(async (req, res) => {
    const userId = req.user._id;

    const [
        user,
        totalSubjects,
        totalTopics,
        totalQuestions,
        solved,
        reviewLater,
        bookmarked,
        notes,
        planner,
        recentActivity,
    ] = await Promise.all([

        User.findById(userId).select("name email"),

        Subject.countDocuments(),

        Topic.countDocuments(),

        Question.countDocuments(),

        QuestionProgress.countDocuments({
            user: userId,
            status: "Done",
        }),

        QuestionProgress.countDocuments({
            user: userId,
            status: "Review Later",
        }),

        QuestionProgress.countDocuments({
            user: userId,
            isBookmarked: true,
        }),

        QuestionProgress.countDocuments({
            user: userId,
            notes: { $ne: "" },
        }),

        PlannerTask.find({
            user: userId,
        })
            .populate("subject", "name")
            .sort({ dueDate: 1 })
            .limit(5),

        QuestionProgress.find({
            user: userId,
            status: { $ne: "Not Started" },
        })
            .populate({
                path: "question",
                select: "title difficulty",
                populate: {
                    path: "topic",
                    select: "name",
                },
            })
            .sort({ updatedAt: -1 })
            .limit(5),
    ]);

    const completionPercentage =
        totalQuestions === 0
            ? 0
            : Number(((solved / totalQuestions) * 100).toFixed(2));

    res.status(200).json({
        user,

        statistics: {
            totalSubjects,
            totalTopics,
            totalQuestions,
            solved,
            reviewLater,
            bookmarked,
            notes,
            completionPercentage,
        },

        planner,

        recentActivity,
    });
});

module.exports = {
    getDashboard,
};