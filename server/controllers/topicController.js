const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const Topic = require("../models/Topic");
const Subject = require("../models/Subject");

// Get Topics of a Subject
const getTopics = asyncHandler(async (req, res) => {
    const { subjectId } = req.params;

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

    res.status(200).json(topics);
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