const Joi = require("joi");

const createNoteSchema = Joi.object({
    questionId: Joi.string()
        .trim()
        .required(),

    notes: Joi.string()
        .trim()
        .max(5000)
        .required(),
});

const updateNoteSchema = Joi.object({
    notes: Joi.string()
        .trim()
        .max(5000)
        .required(),
});

module.exports = {
    createNoteSchema,
    updateNoteSchema,
};