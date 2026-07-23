const asyncHandler = require("express-async-handler");

const Subject = require("../models/Subject");

// Get All Subjects
const getSubjects = asyncHandler(async (req, res) => {
    const subjects = await Subject.find().sort({ order: 1 });

    res.status(200).json(subjects);
});

module.exports = {
    getSubjects,
};