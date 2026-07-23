const asyncHandler = require("express-async-handler");

const PlannerTask = require("../models/PlannerTask");

// ======================================
// GET /api/planner
// ======================================
const getPlanner = asyncHandler(async (req, res) => {

    const tasks = await PlannerTask.find({
        user: req.user._id,
    }).sort({
        dueDate: 1,
    });

    res.status(200).json(tasks);

});

// ======================================
// POST /api/planner
// ======================================
const createPlannerTask = asyncHandler(async (req, res) => {

    const {
        title,
        description,
        dueDate,
    } = req.body;

    const task = await PlannerTask.create({
        user: req.user._id,
        title,
        description,
        dueDate,
    });

    res.status(201).json(task);

});

// ======================================
// PUT /api/planner/:id
// ======================================
const updatePlannerTask = asyncHandler(async (req, res) => {

    const { id } = req.params;

    const task = await PlannerTask.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }

    const {
        title,
        description,
        dueDate,
        completed,
    } = req.body;

    if (title !== undefined) {
        task.title = title;
    }

    if (description !== undefined) {
        task.description = description;
    }

    if (dueDate !== undefined) {
        task.dueDate = dueDate;
    }

    if (completed !== undefined) {
        task.completed = completed;
    }

    await task.save();

    res.status(200).json(task);

});

// ======================================
// DELETE /api/planner/:id
// ======================================
const deletePlannerTask = asyncHandler(async (req, res) => {

    const { id } = req.params;

    const task = await PlannerTask.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }

    await task.deleteOne();

    res.status(200).json({
        message: "Task deleted successfully",
    });

});

module.exports = {
    getPlanner,
    createPlannerTask,
    updatePlannerTask,
    deletePlannerTask,
};