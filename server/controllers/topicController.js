const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const Topic = require("../models/Topic");
const Subject = require("../models/Subject");
const Question = require("../models/Question");
const QuestionProgress = require("../models/QuestionProgress");

// Get Topics of a Subject
const getTopics = asyncHandler(async (req, res) => {
    const { subjectId } = req.params;
    const userId = req.user._id;

    if (!mongoose.Types.ObjectId.isValid(subjectId)) {
        res.status(400);
        throw new Error("Invalid Subject ID");
    }

    const subject = await Subject.findById(subjectId);

    if (!subject) {
        res.status(404);
        throw new Error("Subject not found");
    }

    const topics = await Topic.find({
        subject: subjectId,
    }).sort({ order: 1 });

    const topicsData = await Promise.all(
        topics.map(async (topic) => {
            const questions = await Question.find({
                topic: topic._id,
            }).select("_id");

            const questionIds = questions.map((q) => q._id);

            const totalQuestions = questionIds.length;

            const solved = await QuestionProgress.countDocuments({
                user: userId,
                question: { $in: questionIds },
                status: "Done",
            });

            const progress =
                totalQuestions === 0
                    ? 0
                    : Math.round((solved / totalQuestions) * 100);

            return {
                _id: topic._id,
                name: topic.name,
                description: topic.description,
                icon: topic.icon,
                order: topic.order,
                estimatedQuestions: topic.estimatedQuestions,
                totalQuestions,
                solved,
                progress,
            };
        })
    );

    res.status(200).json({
        subject,
        topics: topicsData,
    });
});

// Get Single Topic
const getTopic = asyncHandler(async (req, res) => {
    const { topicId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(topicId)) {
        res.status(400);
        throw new Error("Invalid Topic ID");
    }

    const topic = await Topic.findById(topicId).populate("subject");

    if (!topic) {
        res.status(404);
        throw new Error("Topic not found");
    }

    res.status(200).json(topic);
});

module.exports = {
    getTopics,
    getTopic,
};