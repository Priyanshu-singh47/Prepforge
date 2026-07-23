const asyncHandler = require("express-async-handler");

const Resource = require("../models/Resource");
const Subject = require("../models/Subject");

// @desc    Get all resources
// @route   GET /api/resources
// @access  Public
const getAllResources = asyncHandler(async (req, res) => {

    const resources = await Resource.find()
        .populate("subject", "name");

    res.status(200).json(resources);

});

// @desc    Get resources by subject
// @route   GET /api/resources/:subjectName
// @access  Public
const getResourcesBySubject = asyncHandler(async (req, res) => {

    const subject = await Subject.findOne({
        name: req.params.subjectName,
    });

    if (!subject) {
        res.status(404);
        throw new Error("Subject not found");
    }

    const resources = await Resource.find({
        subject: subject._id,
    });

    res.status(200).json(resources);

});

module.exports = {
    getAllResources,
    getResourcesBySubject,
};