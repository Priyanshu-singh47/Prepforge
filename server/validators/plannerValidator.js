const Joi = require("joi");

const createPlannerSchema = Joi.object({

    subject: Joi.string()
        .allow(null)
        .optional(),

    title: Joi.string()
        .trim()
        .required(),

    description: Joi.string()
        .trim()
        .allow("")
        .optional(),

    dueDate: Joi.date()
        .required(),

    priority: Joi.string()
        .valid("Low", "Medium", "High")
        .optional(),

});

const updatePlannerSchema = Joi.object({

    subject: Joi.string()
        .allow(null),

    title: Joi.string()
        .trim(),

    description: Joi.string()
        .trim()
        .allow(""),

    dueDate: Joi.date(),

    priority: Joi.string()
        .valid("Low", "Medium", "High"),

    status: Joi.string()
        .valid("Pending", "Completed"),

}).min(1);

module.exports = {
    createPlannerSchema,
    updatePlannerSchema,
};