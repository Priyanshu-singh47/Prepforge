const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
    {
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        type: {
            type: String,
            required: true,
            enum: ["Learning", "Notes", "Interview", "Practice"],
        },
        platform: {
            type: String,
            required: true,
            trim: true,
        },
        url: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Resource", resourceSchema);