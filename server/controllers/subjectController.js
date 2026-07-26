const asyncHandler = require("express-async-handler");

const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const Question = require("../models/Question");
const QuestionProgress = require("../models/QuestionProgress");

const getSubjects = asyncHandler(async (req, res) => {
    const userId = req.user._id;

    const subjects = await Subject.find().sort({ order: 1 });

    const subjectData = await Promise.all(
        subjects.map(async (subject) => {

            const topics = await Topic.find({
                subject: subject._id,
            }).select("_id");

            const topicIds = topics.map(topic => topic._id);

            const totalQuestions = await Question.countDocuments({
                topic: { $in: topicIds },
            });

            const questionIds = await Question.find({
                topic: { $in: topicIds },
            }).select("_id");

            const ids = questionIds.map(q => q._id);

            const solved = await QuestionProgress.countDocuments({
                user: userId,
                question: { $in: ids },
                status: "Done",
            });

            const progress =
                totalQuestions === 0
                    ? 0
                    : Math.round((solved / totalQuestions) * 100);

            return {
                _id: subject._id,
                name: subject.name,
                shortName: subject.shortName,
                color: subject.color,
                icon: subject.icon,
                order: subject.order,
                topics: topics.length,
                totalQuestions,
                solved,
                progress,
            };
        })
    );

    res.status(200).json(subjectData);
});

module.exports = {
    getSubjects,
};