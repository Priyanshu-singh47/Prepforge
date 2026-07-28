const asyncHandler=require("express-async-handler");

const User=require("../models/User");
const Subject=require("../models/Subject");
const Topic=require("../models/Topic");
const Question=require("../models/Question");
const QuestionProgress=require("../models/QuestionProgress");
const PlannerTask=require("../models/PlannerTask");


const getDashboard=asyncHandler(async(req,res)=>{

const userId=req.user._id;


const [
user,
totalSubjects,
totalTopics,
totalQuestions,
solved,
reviewLater,
bookmarked,
notes,
planner,
recentActivity,

]=await Promise.all([


User.findById(userId).select(
"name email currentStreak"
),


Subject.countDocuments(),


Topic.countDocuments(),


Question.countDocuments(),


QuestionProgress.countDocuments({

user:userId,

status:"Done",

}),


QuestionProgress.countDocuments({

user:userId,

status:"Review Later",

}),


QuestionProgress.countDocuments({

user:userId,

isBookmarked:true,

}),


QuestionProgress.countDocuments({

user:userId,

notes:{
$ne:"",
},

}),



PlannerTask.find({

user:userId,

status:"Pending",

dueDate:{
$gte:new Date(
new Date().setHours(0,0,0,0)
),
},

})
.populate(
"subject",
"name"
)
.sort({
dueDate:1,
})
.limit(5),





QuestionProgress.find({

user:userId,

status:{
$in:[
"Done",
"Review Later",
],
},

})
.populate({

path:"question",

select:"title difficulty",

populate:{
path:"topic",
select:"name",
},

})
.sort({

updatedAt:-1,

})
.limit(5),


]);



if(!user){

res.status(404);

throw new Error("User not found");

}




const completionPercentage=

totalQuestions===0

?

0

:

Number(
((solved/totalQuestions)*100).toFixed(2)
);





const weeklyActivity=[];



for(let i=6;i>=0;i--){


const start=new Date();

start.setHours(0,0,0,0);


start.setDate(
start.getDate()-i
);



const end=new Date(start);

end.setDate(
end.getDate()+1
);




const solvedCount=await QuestionProgress.countDocuments({

user:userId,

status:"Done",

updatedAt:{
$gte:start,
$lt:end,
},

});




weeklyActivity.push({

day:start.toLocaleDateString(
"en-US",
{
weekday:"short",
}
),

solved:solvedCount,

});


}





res.status(200).json({


user:{

name:user.name,

email:user.email,

currentStreak:user.currentStreak||0,

},




statistics:{

totalSubjects,

totalTopics,

totalQuestions,

solved,

reviewLater,

bookmarked,

notes,

completionPercentage,

},




weeklyActivity,


planner,


recentActivity,


});


});



module.exports={
getDashboard,
};