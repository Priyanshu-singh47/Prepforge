const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        url: {
            type: String,
            trim: true,
        },
    },
    { _id: false }
);

const questionSchema = new mongoose.Schema(
    {
        topic: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Topic",
            required: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        difficulty: {
            type: String,
            enum: ["Easy", "Medium", "Hard"],
            required: true,
        },

        // Mainly for DSA
        pattern: {
            type: String,
            default: "",
            trim: true,
        },

        // DSA Questions
        source: linkSchema,

        // Theory Subjects (DBMS, OS, OOP, CN, LLD)
        article: linkSchema,

        // Aptitude
        practice: linkSchema,

        order: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Question", questionSchema);