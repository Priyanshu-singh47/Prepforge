const express = require("express");

const router = express.Router();

const {
    getTopic,
} = require("../controllers/topicController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/:topicId", authMiddleware, getTopic);

module.exports = router;