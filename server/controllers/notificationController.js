const asyncHandler = require("express-async-handler");

const PlannerTask = require("../models/PlannerTask");
const QuestionProgress = require("../models/QuestionProgress");
const User = require("../models/User");


// ======================================
// GET /api/notifications
// ======================================

const getNotifications = asyncHandler(async (req, res) => {

    const notifications = [];


    const user = await User.findById(
        req.user._id
    );


    const dismissed =
        user.dismissedNotifications || [];



    // ==============================
    // Planner
    // ==============================

    const tasks = await PlannerTask.find({
        user: req.user._id,
        status: "Pending",
        dueDate: {
            $ne: null,
        },
    });


    const today = new Date();

    today.setHours(0,0,0,0);


    const tomorrow = new Date(today);

    tomorrow.setDate(
        tomorrow.getDate() + 1
    );



    tasks.forEach((task)=>{

        const id = `task-${task._id}`;


        if(dismissed.includes(id)){
            return;
        }


        const due = new Date(task.dueDate);

        due.setHours(0,0,0,0);



        if(due < today){

            notifications.push({
                id,
                type:"warning",
                title:"Overdue Task",
                message:`${task.title} is overdue.`,
                priority:1,
            });

        }
        else if(
            due.getTime() === today.getTime()
        ){

            notifications.push({
                id,
                type:"info",
                title:"Due Today",
                message:`${task.title} is due today.`,
                priority:2,
            });

        }
        else if(
            due.getTime() === tomorrow.getTime()
        ){

            notifications.push({
                id,
                type:"info",
                title:"Due Tomorrow",
                message:`${task.title} is due tomorrow.`,
                priority:3,
            });

        }

    });



    // ==============================
    // Streak
    // ==============================

    if(
        user.currentStreak > 0 &&
        !dismissed.includes("streak")
    ){

        notifications.push({

            id:"streak",

            type:"success",

            title:"Maintain Streak",

            message:
            `Complete one question today to maintain your ${user.currentStreak} day streak.`,

            priority:4,

        });

    }



    // ==============================
    // Bookmarks
    // ==============================

    const bookmarkCount =
        await QuestionProgress.countDocuments({
            user:req.user._id,
            isBookmarked:true,
        });



    if(
        bookmarkCount > 0 &&
        !dismissed.includes("bookmark")
    ){

        notifications.push({

            id:"bookmark",

            type:"bookmark",

            title:"Bookmarked Questions",

            message:
            `You have ${bookmarkCount} bookmarked questions to revisit.`,

            priority:5,

        });

    }



    notifications.sort(
        (a,b)=>
        a.priority-b.priority
    );


    res.status(200).json({
        count: notifications.length,
        notifications,
    });

});



// ======================================
// PATCH /api/notifications/:id/dismiss
// ======================================

const dismissNotification = asyncHandler(
async(req,res)=>{

    const { id } = req.params;


    await User.findByIdAndUpdate(
        req.user._id,
        {
            $addToSet:{
                dismissedNotifications:id,
            },
        }
    );


    res.status(200).json({
        message:"Notification dismissed",
    });

});


module.exports = {
    getNotifications,
    dismissNotification,
};