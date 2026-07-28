const express = require("express");
const cors = require("cors");

const app = express();


// Render proxy fix for express-rate-limit
app.set("trust proxy", 1);



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

const notificationRoutes = require("./routes/notificationRoutes");
const searchRoutes = require("./routes/searchRoutes");

const healthRoutes = require("./routes/healthRoutes");

const errorHandler = require("./middleware/errorMiddleware");



app.use(
cors({
    origin:[
        "http://localhost:5173",
        "https://prepforge-tau.vercel.app"
    ],
    credentials:true,
})
);


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
app.use("/api/notifications",notificationRoutes);
app.use("/api/search", searchRoutes);



app.get("/", (req,res)=>{

res.json({
    message:"Welcome to PrepForge Backend!",
});

});



app.use(errorHandler);



module.exports = app;