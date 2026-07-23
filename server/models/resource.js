const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    platform: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Resource", resourceSchema);