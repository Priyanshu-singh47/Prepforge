const Joi = require("joi");

const updateStatusSchema = Joi.object({

    status: Joi.string()
        .valid("Not Started", "Done", "Review Later")
        .required(),

});

const updateBookmarkSchema = Joi.object({

    isBookmarked: Joi.boolean()
        .required(),

});

const updateNotesSchema = Joi.object({

    notes: Joi.string()
        .trim()
        .allow("")
        .max(5000)
        .required(),

});

module.exports = {
    updateStatusSchema,
    updateBookmarkSchema,
    updateNotesSchema,
};