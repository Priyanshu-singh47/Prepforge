const mongoose=require("mongoose");
const asyncHandler=require("express-async-handler");

const PlannerTask=require("../models/PlannerTask");


const validateDate=(date)=>{

const selectedDate=new Date(date);

if(isNaN(selectedDate)){
return false;
}

const today=new Date();

today.setHours(0,0,0,0);
selectedDate.setHours(0,0,0,0);

return selectedDate>=today;

};



// GET /api/planner
const getPlanner=asyncHandler(async(req,res)=>{

const tasks=await PlannerTask.find({

user:req.user._id,

})
.populate("subject","name shortName")
.sort({dueDate:1});


res.status(200).json(tasks);

});




// POST /api/planner
const createPlannerTask=asyncHandler(async(req,res)=>{

const {
title,
description,
subject,
dueDate,
priority,
}=req.body;



if(!title?.trim()){

res.status(400);
throw new Error("Title is required");

}



if(!validateDate(dueDate)){

res.status(400);
throw new Error("Invalid due date");

}



const allowedPriority=[
"Low",
"Medium",
"High"
];


if(priority && !allowedPriority.includes(priority)){

res.status(400);
throw new Error("Invalid priority");

}



const task=await PlannerTask.create({

user:req.user._id,

title:title.trim(),

description:description?.trim()||"",

subject:subject||null,

dueDate,

priority:priority||"Medium",

});



const createdTask=await PlannerTask.findById(task._id)
.populate("subject","name shortName");


res.status(201).json(createdTask);

});




// PUT /api/planner/:id
const updatePlannerTask=asyncHandler(async(req,res)=>{

const {id}=req.params;


if(!mongoose.Types.ObjectId.isValid(id)){

res.status(400);
throw new Error("Invalid task ID");

}



const task=await PlannerTask.findOne({

_id:id,

user:req.user._id,

});



if(!task){

res.status(404);
throw new Error("Task not found");

}



const {
title,
description,
subject,
dueDate,
priority,
status,
}=req.body;



if(dueDate!==undefined){

if(!validateDate(dueDate)){

res.status(400);
throw new Error("Invalid due date");

}

task.dueDate=dueDate;

}



if(title!==undefined)
task.title=title.trim();



if(description!==undefined)
task.description=description.trim();



if(subject!==undefined)
task.subject=subject||null;



if(priority!==undefined){

const allowedPriority=[
"Low",
"Medium",
"High"
];

if(!allowedPriority.includes(priority)){

res.status(400);
throw new Error("Invalid priority");

}

task.priority=priority;

}



if(status!==undefined){

const allowedStatus=[
"Pending",
"Completed"
];


if(!allowedStatus.includes(status)){

res.status(400);
throw new Error("Invalid status");

}


task.status=status;


task.completedAt=
status==="Completed"
?
new Date()
:
null;

}



await task.save();



const updatedTask=await PlannerTask.findById(task._id)
.populate("subject","name shortName");


res.status(200).json(updatedTask);

});




// DELETE /api/planner/:id
const deletePlannerTask=asyncHandler(async(req,res)=>{

const {id}=req.params;


if(!mongoose.Types.ObjectId.isValid(id)){

res.status(400);
throw new Error("Invalid task ID");

}



const task=await PlannerTask.findOne({

_id:id,

user:req.user._id,

});



if(!task){

res.status(404);
throw new Error("Task not found");

}



await task.deleteOne();


res.status(200).json({

message:"Task deleted successfully",

});

});



module.exports={
getPlanner,
createPlannerTask,
updatePlannerTask,
deletePlannerTask,
};