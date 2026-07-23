const Joi = require("joi");

const updateProfileSchema = Joi.object({

    name: Joi.string()
        .trim()
        .min(2)
        .max(50),

    email: Joi.string()
        .trim()
        .email(),

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