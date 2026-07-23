const Joi = require("joi");

const updateProgressSchema = Joi.object({

    status: Joi.string()
        .valid("Done", "Review Later", "Not Started"),

    isBookmarked: Joi.boolean(),

    notes: Joi.string()
        .trim()
        .allow("")
        .max(5000),

}).min(1);

module.exports = {
    updateProgressSchema,
};