import { X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";


function AddTaskModal({open,onClose,refreshTasks}){


const [subjects,setSubjects]=useState([]);

const [error,setError]=useState("");



const [formData,setFormData]=useState({

title:"",
description:"",
subject:"",
dueDate:"",
priority:"Medium",

});





useEffect(()=>{

if(open){

fetchSubjects();

setError("");

}

},[open]);






const fetchSubjects=async()=>{

try{

const {data}=await api.get("/subjects");

setSubjects(data);

}

catch(error){

console.error(error);

}

};






const handleChange=(e)=>{

setError("");

setFormData(prev=>({

...prev,

[e.target.name]:e.target.value,

}));

};







const handleSubmit=async()=>{


if(!formData.title.trim()){

setError("Task title is required.");

return;

}



if(!formData.subject){

setError("Please select a subject.");

return;

}



if(!formData.dueDate){

setError("Please select a due date.");

return;

}




const selectedDate=new Date(formData.dueDate);

const today=new Date();


today.setHours(0,0,0,0);

selectedDate.setHours(0,0,0,0);



if(selectedDate < today){

setError("Past dates are not allowed.");

return;

}




try{


await api.post(
"/planner",
formData
);



toast.success(
"Task added successfully"
);



setFormData({

title:"",
description:"",
subject:"",
dueDate:"",
priority:"Medium",

});



setError("");

refreshTasks();

onClose();


}

catch(error){


console.error(error);



toast.error(

error.response?.data?.message ||
"Failed to add task"

);



setError(

error.response?.data?.message ||
"Failed to add task."

);


}


};






if(!open) return null;





return(


<div className="
fixed 
inset-0 
z-50 
flex 
items-center 
justify-center 
bg-black/40 
p-3 
sm:p-4
">



<div className="
w-full 
max-w-lg
max-h-[90vh]
overflow-y-auto
rounded-2xl 
bg-white 
p-4
sm:p-6
shadow-xl 
dark:bg-gray-800
">





<div className="
mb-5
flex 
items-center 
justify-between
gap-3
">



<h2 className="
text-xl
sm:text-2xl 
font-semibold 
text-gray-900 
dark:text-white
">

Add Study Task

</h2>




<button

onClick={()=>{

setError("");

onClose();

}}

className="
shrink-0
rounded-lg 
p-1 
hover:bg-gray-100 
dark:hover:bg-gray-700
"

>

<X 
size={24} 
className="dark:text-white"
/>


</button>



</div>






<div className="space-y-4">





{error && (

<div className="
rounded-xl 
border 
border-red-200 
bg-red-50 
px-4 
py-3 
text-sm 
text-red-700
">

{error}

</div>

)}







<input

name="title"

value={formData.title}

onChange={handleChange}

type="text"

placeholder="Task title"

className="
w-full 
rounded-xl 
border 
border-gray-300 
bg-white 
px-4 
py-3 
text-gray-900 
outline-none 
focus:border-blue-500 
dark:border-gray-700 
dark:bg-gray-900 
dark:text-white
"

/>







<select

name="subject"

value={formData.subject}

onChange={handleChange}

className="
w-full 
rounded-xl 
border 
border-gray-300 
bg-white 
px-4 
py-3 
text-gray-900 
outline-none 
focus:border-blue-500 
dark:border-gray-700 
dark:bg-gray-900 
dark:text-white
"

>


<option value="">

Select Subject

</option>



{subjects.map(subject=>(


<option

key={subject._id}

value={subject._id}

>

{subject.shortName}

</option>


))}



</select>








<textarea

rows={3}

name="description"

value={formData.description}

onChange={handleChange}

placeholder="Description (optional)"

className="
w-full 
resize-none 
rounded-xl 
border 
border-gray-300 
bg-white 
px-4 
py-3 
text-gray-900 
outline-none 
focus:border-blue-500 
dark:border-gray-700 
dark:bg-gray-900 
dark:text-white
"

/>








<input

type="date"

name="dueDate"

value={formData.dueDate}

onChange={handleChange}

className="
w-full 
rounded-xl 
border 
border-gray-300 
bg-white 
px-4 
py-3 
text-gray-900 
outline-none 
focus:border-blue-500 
dark:border-gray-700 
dark:bg-gray-900 
dark:text-white
"

/>








<select

name="priority"

value={formData.priority}

onChange={handleChange}

className="
w-full 
rounded-xl 
border 
border-gray-300 
bg-white 
px-4 
py-3 
text-gray-900 
outline-none 
focus:border-blue-500 
dark:border-gray-700 
dark:bg-gray-900 
dark:text-white
"

>


<option value="Low">

Low Priority

</option>


<option value="Medium">

Medium Priority

</option>


<option value="High">

High Priority

</option>


</select>









<div className="
flex 
flex-col-reverse
gap-3
pt-2
sm:flex-row
sm:justify-end
">





<button

onClick={()=>{

setError("");

onClose();

}}

className="
rounded-xl 
border 
border-gray-300 
px-5 
py-2.5 
font-medium 
hover:bg-gray-100 
dark:border-gray-700 
dark:text-white 
dark:hover:bg-gray-700
"

>

Cancel

</button>






<button

onClick={handleSubmit}

className="
rounded-xl 
bg-blue-600 
px-5 
py-2.5 
font-medium 
text-white 
hover:bg-blue-700
"

>

Add Task

</button>



</div>





</div>




</div>



</div>


);


}


export default AddTaskModal;