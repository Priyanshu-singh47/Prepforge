const Joi = require("joi");

const updateProfileSchema = Joi.object({

    name: Joi.string()
        .trim()
        .min(2)
        .max(50),

    branch: Joi.string()
        .trim()
        .max(100)
        .allow(""),

}).min(1);

const updatePasswordSchema = Joi.object({

    currentPassword: Joi.string()
        .required(),

    newPassword: Joi.string()
        .min(6)
        .required(),

});

module.exports = {
    updateProfileSchema,
    updatePasswordSchema,
};