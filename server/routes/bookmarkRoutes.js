const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    getBookmarks,
} = require("../controllers/bookmarkController");

router.use(authMiddleware);

router.get("/", getBookmarks);

module.exports = router;