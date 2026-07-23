const express = require("express");

const router = express.Router();

const { getSubjects } = require("../controllers/subjectController");
const { getTopics } = require("../controllers/topicController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getSubjects);

router.get("/:subjectId/topics", authMiddleware, getTopics);

module.exports = router;