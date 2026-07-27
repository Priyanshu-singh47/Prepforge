import { Plus } from "lucide-react";
import { useEffect,useMemo,useState } from "react";

import api from "../services/api";

import PlannerCalendar from "../components/Planner/PlannerCalendar";
import TodayTasks from "../components/Planner/TodayTasks";
import UpcomingTasks from "../components/Planner/UpcomingTasks";
import AddTaskModal from "../components/Planner/AddTaskModal";

function Planner(){

const [tasks,setTasks]=useState([]);
const [loading,setLoading]=useState(true);
const [openModal,setOpenModal]=useState(false);



const fetchTasks=async()=>{

try{

const {data}=await api.get("/planner");

setTasks(data);

}
catch(error){

console.error(error);

}
finally{

setLoading(false);

}

};



useEffect(()=>{

fetchTasks();

},[]);



const todayTasks=useMemo(()=>{

const today=new Date();

today.setHours(0,0,0,0);


return tasks.filter(task=>{

if(!task.dueDate || task.status==="Completed")
return false;


const date=new Date(task.dueDate);

date.setHours(0,0,0,0);


return date.getTime()===today.getTime();


});

},[tasks]);




const upcomingTasks=useMemo(()=>{

const today=new Date();

today.setHours(0,0,0,0);


return tasks.filter(task=>{

if(!task.dueDate || task.status==="Completed")
return false;


const date=new Date(task.dueDate);

date.setHours(0,0,0,0);


return date>today;


});

},[tasks]);




if(loading){

return(

<div className="flex h-96 items-center justify-center">

<p className="text-gray-500 dark:text-gray-400">
Loading planner...
</p>

</div>

);

}



return(

<div className="space-y-5">


<div className="flex items-center justify-between">


<div>

<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
Planner
</h1>


<p className="mt-1 text-gray-600 dark:text-gray-400">
Organize your study schedule and stay on track.
</p>


</div>



<button
onClick={()=>setOpenModal(true)}
className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
>

<Plus size={18}/>

Add Task

</button>


</div>



<div className="grid grid-cols-1 gap-5 xl:grid-cols-3">


<PlannerCalendar />


<TodayTasks
tasks={todayTasks}
refreshTasks={fetchTasks}
/>


<UpcomingTasks
tasks={upcomingTasks}
refreshTasks={fetchTasks}
/>


</div>



<AddTaskModal
open={openModal}
onClose={()=>setOpenModal(false)}
refreshTasks={fetchTasks}
/>


</div>

);

}

export default Planner;