const express = require("express");
const cors = require("cors");

const app = express();

const authRoutes = require("./routes/authRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const topicRoutes = require("./routes/topicRoutes");
const questionRoutes = require("./routes/questionRoutes");
const progressRoutes = require("./routes/progressRoutes");
const bookmarkRoutes = require("./routes/bookmarkRoutes");
const noteRoutes = require("./routes/noteRoutes");
const plannerRoutes = require("./routes/plannerRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const settingsRoutes = require("./routes/settingsRoutes");
const resourceRoutes = require("./routes/resourceRoutes");

const healthRoutes = require("./routes/healthRoutes");

const errorHandler = require("./middleware/errorMiddleware");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/topics", topicRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/bookmarks", bookmarkRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/planner", plannerRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/health", healthRoutes);


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to PrepForge Backend!",
    });
});

app.use(errorHandler);

module.exports = app;