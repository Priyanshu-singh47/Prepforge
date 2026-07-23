const express = require("express");

const router = express.Router();

const {
    getAllResources,
    getResourcesBySubject,
} = require("../controllers/resourceController");

router.get("/", getAllResources);

router.get("/:subjectName", getResourcesBySubject);

module.exports = router;