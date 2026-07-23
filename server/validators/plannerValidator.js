const Joi = require("joi");

const createPlannerSchema = Joi.object({

    title: Joi.string()
        .trim()
        .required(),

    description: Joi.string()
        .trim()
        .allow("")
        .optional(),

    dueDate: Joi.date()
        .required(),

});

const updatePlannerSchema = Joi.object({

    title: Joi.string()
        .trim(),

    description: Joi.string()
        .trim()
        .allow(""),

    dueDate: Joi.date(),

    completed: Joi.boolean(),

}).min(1);

module.exports = {
    createPlannerSchema,
    updatePlannerSchema,
};