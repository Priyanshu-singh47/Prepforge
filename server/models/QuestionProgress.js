const mongoose = require("mongoose");

const questionProgressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },

    status: {
      type: String,
      enum: ["Not Started", "Done", "Review Later"],
      default: "Not Started",
    },

    isBookmarked: {
      type: Boolean,
      default: false,
    },

    notes: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// One progress document per user per question
questionProgressSchema.index(
  { user: 1, question: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "QuestionProgress",
  questionProgressSchema
);