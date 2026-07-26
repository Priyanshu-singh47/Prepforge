const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },

    
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      default: null,
    },

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    content: {
      type: String,
      required: true,
      trim: true,
      maxlength: 5000,
    },

    tags: [
      {
        type: String,
        trim: true,
      },
    ],

    isPinned: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

noteSchema.index({ user: 1, updatedAt: -1 });
noteSchema.index({ user: 1, subject: 1 });
noteSchema.index({ user: 1, question: 1 });

module.exports = mongoose.model("Note", noteSchema);