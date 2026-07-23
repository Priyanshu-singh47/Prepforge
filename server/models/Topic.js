const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema(
    {
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
            required: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            default: "",
            trim: true,
        },

        icon: {
            type: String,
            default: "",
            trim: true,
        },

        order: {
            type: Number,
            required: true,
        },

        estimatedQuestions: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

topicSchema.index({ subject: 1, name: 1 }, { unique: true });

module.exports = mongoose.model("Topic", topicSchema);