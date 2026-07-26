const Joi = require("joi");

const createNoteSchema = Joi.object({
    title: Joi.string()
        .trim()
        .min(1)
        .max(200)
        .required()
        .messages({
            "string.empty": "Title is required",
            "string.min": "Title is required",
            "string.max": "Title cannot exceed 200 characters",
            "any.required": "Title is required",
        }),

    content: Joi.string()
        .trim()
        .min(1)
        .max(5000)
        .required()
        .messages({
            "string.empty": "Content is required",
            "string.min": "Content is required",
            "string.max": "Content cannot exceed 5000 characters",
            "any.required": "Content is required",
        }),

    subject: Joi.string()
        .trim()
        .required()
        .messages({
            "string.empty": "Subject is required",
            "any.required": "Subject is required",
        }),

    tags: Joi.array()
        .items(Joi.string().trim())
        .default([]),

    isPinned: Joi.boolean().default(false),
});

const updateNoteSchema = Joi.object({
    title: Joi.string()
        .trim()
        .min(1)
        .max(200)
        .required(),

    content: Joi.string()
        .trim()
        .min(1)
        .max(5000)
        .required(),

    subject: Joi.string()
        .trim()
        .required(),

    tags: Joi.array()
        .items(Joi.string().trim())
        .default([]),

    isPinned: Joi.boolean().default(false),
});

module.exports = {
    createNoteSchema,
    updateNoteSchema,
};