const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
    createPlannerSchema,
    updatePlannerSchema,
} = require("../validators/plannerValidator");

const {
    getPlanner,
    createPlannerTask,
    updatePlannerTask,
    deletePlannerTask,
} = require("../controllers/plannerController");

router.use(authMiddleware);

router.get("/", getPlanner);

router.post(
    "/",
    validate(createPlannerSchema),
    createPlannerTask
);

router.put(
    "/:id",
    validate(updatePlannerSchema),
    updatePlannerTask
);

router.delete("/:id", deletePlannerTask);

module.exports = router;