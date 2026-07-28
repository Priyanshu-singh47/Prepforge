const asyncHandler=require("express-async-handler");
const mongoose=require("mongoose");

const Question=require("../models/Question");
const Topic=require("../models/Topic");
const QuestionProgress=require("../models/QuestionProgress");
const User=require("../models/User");


// GET All Questions
const getAllQuestions=asyncHandler(async(req,res)=>{

const questions=await Question.find()
.populate({
path:"topic",
select:"name subject",
populate:{
path:"subject",
select:"name",
},
})
.sort({order:1});


const progress=await QuestionProgress.find({
user:req.user._id,
});


const progressMap={};

progress.forEach(item=>{
progressMap[item.question.toString()]=item;
});


const result=questions.map(question=>{

const userProgress=progressMap[question._id.toString()];


return {
...question.toObject(),
status:userProgress?.status||"Not Started",
isBookmarked:userProgress?.isBookmarked||false,
notes:userProgress?.notes||"",
};

});


res.status(200).json(result);

});



// GET Questions by Topic
const getQuestions=asyncHandler(async(req,res)=>{

const {topicId}=req.params;


if(!mongoose.Types.ObjectId.isValid(topicId)){
res.status(400);
throw new Error("Invalid Topic ID");
}


const topic=await Topic.findById(topicId);


if(!topic){
res.status(404);
throw new Error("Topic not found");
}



const questions=await Question.find({
topic:topicId,
}).sort({order:1});



const progress=await QuestionProgress.find({
user:req.user._id,
question:{
$in:questions.map(q=>q._id),
},
});


const progressMap={};


progress.forEach(item=>{
progressMap[item.question.toString()]=item;
});



const result=questions.map(question=>{

const userProgress=progressMap[question._id.toString()];


return {
...question.toObject(),
status:userProgress?.status||"Not Started",
isBookmarked:userProgress?.isBookmarked||false,
notes:userProgress?.notes||"",
};

});


res.status(200).json(result);

});



// GET Single Question
const getQuestion=asyncHandler(async(req,res)=>{

const {questionId}=req.params;


if(!mongoose.Types.ObjectId.isValid(questionId)){
res.status(400);
throw new Error("Invalid Question ID");
}


const question=await Question.findById(questionId)
.populate("topic");


if(!question){
res.status(404);
throw new Error("Question not found");
}


const progress=await QuestionProgress.findOne({
user:req.user._id,
question:questionId,
});


res.status(200).json({

...question.toObject(),

status:progress?.status||"Not Started",

isBookmarked:progress?.isBookmarked||false,

notes:progress?.notes||"",

});

});



// PATCH Status
const updateStatus=asyncHandler(async(req,res)=>{

const {questionId}=req.params;
const {status}=req.body;


const allowedStatus=[
"Done",
"Review Later",
"Not Started",
];


if(!allowedStatus.includes(status)){
res.status(400);
throw new Error("Invalid status");
}



if(!mongoose.Types.ObjectId.isValid(questionId)){
res.status(400);
throw new Error("Invalid Question ID");
}



const question=await Question.findById(questionId);


if(!question){
res.status(404);
throw new Error("Question not found");
}



const progress=await QuestionProgress.findOneAndUpdate(

{
user:req.user._id,
question:questionId,
},

{
status,
},

{
new:true,
upsert:true,
setDefaultsOnInsert:true,
}

);



if(status==="Done"){

const user=await User.findById(req.user._id);


const today=new Date();
today.setHours(0,0,0,0);



if(!user.lastActiveDate){

user.currentStreak=1;
user.lastActiveDate=today;

}
else{

const lastActive=new Date(user.lastActiveDate);
lastActive.setHours(0,0,0,0);


const diffDays=Math.floor(
(today-lastActive)/(1000*60*60*24)
);


if(diffDays===1){

user.currentStreak+=1;
user.lastActiveDate=today;

}
else if(diffDays>1){

user.currentStreak=1;
user.lastActiveDate=today;

}

}


await user.save();

}



res.status(200).json(progress);

});




// PATCH Bookmark
const updateBookmark=asyncHandler(async(req,res)=>{

const {questionId}=req.params;
const {isBookmarked}=req.body;


if(typeof isBookmarked!=="boolean"){
res.status(400);
throw new Error("Invalid bookmark value");
}


if(!mongoose.Types.ObjectId.isValid(questionId)){
res.status(400);
throw new Error("Invalid Question ID");
}


const question=await Question.findById(questionId);


if(!question){
res.status(404);
throw new Error("Question not found");
}



const progress=await QuestionProgress.findOneAndUpdate(

{
user:req.user._id,
question:questionId,
},

{
isBookmarked,
},

{
new:true,
upsert:true,
setDefaultsOnInsert:true,
}

);



res.status(200).json(progress);

});




// PATCH Notes
const updateNotes=asyncHandler(async(req,res)=>{

const {questionId}=req.params;
const {notes}=req.body;


if(!mongoose.Types.ObjectId.isValid(questionId)){
res.status(400);
throw new Error("Invalid Question ID");
}



const question=await Question.findById(questionId);


if(!question){
res.status(404);
throw new Error("Question not found");
}



const progress=await QuestionProgress.findOneAndUpdate(

{
user:req.user._id,
question:questionId,
},

{
notes:notes ? notes.trim() : "",
},

{
new:true,
upsert:true,
setDefaultsOnInsert:true,
}

);



res.status(200).json(progress);

});



module.exports={
getAllQuestions,
getQuestions,
getQuestion,
updateStatus,
updateBookmark,
updateNotes,
};