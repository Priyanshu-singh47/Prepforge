const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },

        shortName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },

        color: {
            type: String,
            default: "#3B82F6",
        },

        icon: {
            type: String,
            default: "BookOpen",
        },

        order: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Subject", subjectSchema);