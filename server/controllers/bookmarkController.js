const asyncHandler = require("express-async-handler");

const QuestionProgress = require("../models/questionProgressModel");

const getBookmarks = asyncHandler(async (req, res) => {

    const bookmarks = await QuestionProgress.find({
        user: req.user._id,
        isBookmarked: true,
    })
        .populate({
            path: "question",
            select: "title difficulty topic",
            populate: {
                path: "topic",
                select: "name",
            },
        })
        .lean();

    const validBookmarks = bookmarks.filter(
        (bookmark) => bookmark.question
    );

    res.status(200).json(validBookmarks);

});

module.exports = {
    getBookmarks,
};