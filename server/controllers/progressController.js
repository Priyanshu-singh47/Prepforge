const asyncHandler = require("express-async-handler");

const Question = require("../models/Question");
const QuestionProgress = require("../models/QuestionProgress");
const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const User = require("../models/User");


// ======================================
// GET /api/progress
// ======================================
const getProgress = asyncHandler(async (req, res) => {

    const progress = await QuestionProgress.find({
        user: req.user._id,
    }).populate({
        path: "question",
        select: "title difficulty topic",
        populate: {
            path: "topic",
            select: "name subject",
            populate: {
                path: "subject",
                select: "name shortName color",
            },
        },
    });

    res.status(200).json(progress);

});


// ======================================
// GET /api/progress/topic/:topicId
// ======================================
const getTopicProgress = asyncHandler(async (req, res) => {

    const { topicId } = req.params;

    const questions = await Question.find({
        topic: topicId,
    }).select("_id");


    const questionIds = questions.map(
        question => question._id
    );


    const progress = await QuestionProgress.find({
        user: req.user._id,
        question:{
            $in:questionIds,
        },
    }).populate(
        "question",
        "title difficulty"
    );


    res.status(200).json(progress);

});


// ======================================
// PATCH /api/progress/:questionId
// ======================================
const updateProgress = asyncHandler(async (req, res) => {

    const { questionId } = req.params;


    const {
        status,
        isBookmarked,
        notes,
    } = req.body;



    const question = await Question.findById(
        questionId
    );


    if(!question){

        res.status(404);

        throw new Error(
            "Question not found"
        );

    }




    let progress = await QuestionProgress.findOne({

        user:req.user._id,

        question:questionId,

    });



    if(!progress){

        progress = await QuestionProgress.create({

            user:req.user._id,

            question:questionId,

        });

    }




    if(status!==undefined){

        progress.status=status;

    }



    if(isBookmarked!==undefined){

        progress.isBookmarked=isBookmarked;

    }



    if(notes!==undefined){

        progress.notes=notes;

    }



    await progress.save();





    // ===========================
    // STREAK UPDATE
    // ===========================

    if(status==="Done"){


        const user = await User.findById(
            req.user._id
        );



        const today = new Date();

        today.setHours(
            0,
            0,
            0,
            0
        );



        if(!user.lastActiveDate){


            user.currentStreak=1;

            user.lastActiveDate=today;


        }

        else{


            const lastDate = new Date(
                user.lastActiveDate
            );


            lastDate.setHours(
                0,
                0,
                0,
                0
            );



            const daysDifference =
                Math.floor(
                    (today-lastDate) /
                    (1000*60*60*24)
                );



            if(daysDifference===1){


                user.currentStreak += 1;

                user.lastActiveDate=today;


            }


            else if(daysDifference>1){


                user.currentStreak=1;

                user.lastActiveDate=today;


            }



        }



        await user.save();


    }





    res.status(200).json(progress);

});




// ======================================
// GET /api/progress/stats
// ======================================
const getProgressStats = asyncHandler(async (req, res) => {

    const userId=req.user._id;


    const totalQuestions =
        await Question.countDocuments();



    const progress =
        await QuestionProgress.find({

            user:userId,

        }).populate({

            path:"question",

            select:"difficulty topic",

            populate:{

                path:"topic",

                select:"subject",

                populate:{

                    path:"subject",

                    select:"name shortName color",

                },

            },

        });




    const done =
        progress.filter(
            item=>item.status==="Done"
        ).length;



    const reviewLater =
        progress.filter(
            item=>item.status==="Review Later"
        ).length;



    const bookmarked =
        progress.filter(
            item=>item.isBookmarked
        ).length;



    const notStarted =
        Math.max(
            totalQuestions-done-reviewLater,
            0
        );



    const completionPercentage =
        totalQuestions===0
        ?
        0
        :
        Number(
            ((done/totalQuestions)*100)
            .toFixed(2)
        );




    const subjects =
        await Subject.find()
        .sort({
            order:1
        });



    const subjectProgress=[];



    for(const subject of subjects){


        const topics =
            await Topic.find({
                subject:subject._id,
            })
            .select("_id");



        const topicIds =
            topics.map(
                topic=>topic._id
            );



        const total =
            await Question.countDocuments({

                topic:{
                    $in:topicIds,
                },

            });




        const completed =
            progress.filter(

                item=>
                item.status==="Done" &&
                item.question?.topic?.subject?._id?.toString()
                ===subject._id.toString()

            ).length;



        subjectProgress.push({

            subject:subject.name,

            shortName:subject.shortName,

            color:subject.color,

            completed,

            total,

            percentage:
            total===0
            ?
            0
            :
            Math.round(
                (completed/total)*100
            ),

        });


    }





    const difficulties=[
        "Easy",
        "Medium",
        "Hard"
    ];



    const difficultyProgress={};



    for(const difficulty of difficulties){


        const total =
            await Question.countDocuments({
                difficulty,
            });



        const completed =
            progress.filter(

                item=>
                item.status==="Done" &&
                item.question?.difficulty===difficulty

            ).length;



        difficultyProgress[difficulty]={

            completed,

            total,

            percentage:
            total===0
            ?
            0
            :
            Math.round(
                (completed/total)*100
            ),

        };


    }





    const weeklyActivity=[];


    const days=[
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];



    for(let i=6;i>=0;i--){


        const date=new Date();

        date.setHours(
            0,
            0,
            0,
            0
        );


        date.setDate(
            date.getDate()-i
        );



        const nextDay=new Date(date);


        nextDay.setDate(
            nextDay.getDate()+1
        );



        const count =
            await QuestionProgress.countDocuments({

                user:userId,

                status:"Done",

                updatedAt:{
                    $gte:date,
                    $lt:nextDay,
                },

            });



        weeklyActivity.push({

            day:days[date.getDay()],

            count,

        });


    }




    res.status(200).json({

        totalQuestions,

        done,

        reviewLater,

        notStarted,

        bookmarked,

        completionPercentage,

        subjectProgress,

        difficultyProgress,

        weeklyActivity,

    });


});



module.exports={

    getProgress,

    getTopicProgress,

    updateProgress,

    getProgressStats,

};