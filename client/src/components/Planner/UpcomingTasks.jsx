import { Trash2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";
import ConfirmModal from "../Common/ConfirmModal";


function UpcomingTasks({tasks,refreshTasks}){

const [expanded,setExpanded]=useState(false);

const [confirmOpen,setConfirmOpen]=useState(false);

const [selectedTaskId,setSelectedTaskId]=useState(null);

const [deleteLoading,setDeleteLoading]=useState(false);


const visibleTasks=expanded?tasks:tasks.slice(0,3);



const completeTask=async(task)=>{

try{

await api.put(
`/planner/${task._id}`,
{
status:"Completed",
}
);

toast.success("Task completed successfully");

refreshTasks();

}
catch(error){

console.error(error);

toast.error("Failed to complete task");

}

};



const deleteTask=async()=>{

try{

setDeleteLoading(true);

await api.delete(
`/planner/${selectedTaskId}`
);


toast.success("Task deleted successfully");


setConfirmOpen(false);

setSelectedTaskId(null);

refreshTasks();


}
catch(error){

console.error(error);

toast.error("Failed to delete task");

}
finally{

setDeleteLoading(false);

}

};



return(
<>

<div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">


<h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
Upcoming Tasks
</h2>



{tasks.length===0?(

<div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-gray-300 dark:border-gray-700">

<p className="text-sm text-gray-500">
No upcoming tasks.
</p>

</div>

):(


<div className="space-y-3">


{visibleTasks.map((task)=>(

<div
key={task._id}
className="rounded-xl border border-gray-100 p-3 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
>


<div className="flex justify-between gap-3">


<div>

<p className="text-sm font-semibold text-gray-900 dark:text-white">
{task.title}
</p>


<p className="text-xs text-gray-500">
{task.subject?.shortName || "General"}
</p>

</div>



<p className="text-xs font-semibold text-blue-600">

{new Date(task.dueDate).toLocaleDateString()}

</p>


</div>



<div className="mt-3 flex items-center justify-between">


<span
className={`rounded-full px-2.5 py-1 text-xs font-medium ${
task.priority==="High"
?"bg-red-100 text-red-700"
:task.priority==="Medium"
?"bg-yellow-100 text-yellow-700"
:"bg-green-100 text-green-700"
}`}
>

{task.priority}

</span>




<div className="flex items-center gap-2">


<button
onClick={()=>completeTask(task)}
className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700"
>
Complete
</button>



<button
onClick={()=>{

setSelectedTaskId(task._id);

setConfirmOpen(true);

}}
className="rounded-lg p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
>

<Trash2 size={16}/>

</button>


</div>


</div>


</div>


))}




{tasks.length>3 && (

<button
onClick={()=>setExpanded(!expanded)}
className="mt-3 w-full rounded-lg border border-gray-200 py-2 text-sm text-blue-600 transition hover:bg-blue-50 dark:border-gray-700 dark:hover:bg-blue-900/20"
>

{expanded?"Show Less":`View All (${tasks.length})`}

</button>

)}


</div>


)}


</div>




<ConfirmModal
open={confirmOpen}
title="Delete Task"
message="Are you sure you want to delete this task? This action cannot be undone."
confirmText="Delete"
loading={deleteLoading}
onCancel={()=>{

setConfirmOpen(false);

setSelectedTaskId(null);

}}
onConfirm={deleteTask}
/>


</>
);

}


export default UpcomingTasks;