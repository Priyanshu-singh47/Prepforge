const rateLimit = require("express-rate-limit");

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: {
        message: "Too many login attempts. Please try again later.",
    },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = authLimiter;