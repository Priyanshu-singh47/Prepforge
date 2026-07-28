import {
  BookOpen,
  CircleHelp,
  Bookmark,
  Clock3,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


function Statistics({ dashboardData }) {

const navigate = useNavigate();


const stats = dashboardData?.statistics || {
  totalSubjects:0,
  solved:0,
  totalQuestions:0,
  bookmarked:0,
  reviewLater:0,
};



const statCards = [

{
icon:BookOpen,
title:"Subjects",
value:stats.totalSubjects,
color:"bg-blue-100 text-blue-600",
},

{
icon:CircleHelp,
title:"Solved",
value:`${stats.solved}/${stats.totalQuestions}`,
color:"bg-green-100 text-green-600",
},

{
icon:Bookmark,
title:"Bookmarks",
value:stats.bookmarked,
color:"bg-orange-100 text-orange-600",
},

{
icon:Clock3,
title:"Review Later",
value:stats.reviewLater,
color:"bg-purple-100 text-purple-600",
},

];



return (

<div className="
rounded-xl 
border 
border-gray-200 
bg-white 
p-3 
sm:p-4
shadow-sm 
transition-all 
duration-300 
hover:shadow-md 
dark:border-gray-700 
dark:bg-gray-800
">


<h2 className="
mb-3 
text-base 
sm:text-lg 
font-semibold 
text-gray-900 
dark:text-white
">

Statistics

</h2>




<div className="
grid 
grid-cols-1 
xs:grid-cols-2 
sm:grid-cols-2 
gap-3
">


{statCards.map((item)=>{


const Icon=item.icon;


return(

<div

key={item.title}

className="
group 
flex 
items-center 
gap-3 
rounded-lg 
border 
border-gray-100 
p-3
transition-all 
duration-300 
hover:-translate-y-0.5 
hover:border-blue-200 
hover:shadow-md 
dark:border-gray-700 
dark:hover:border-blue-500
"

>


<div

className={`
flex 
h-9 
w-9 
shrink-0
items-center 
justify-center 
rounded-lg 
transition-transform 
duration-300 
group-hover:scale-110 
${item.color}
`}

>


<Icon size={18}/>


</div>




<div className="min-w-0">

<p className="truncate text-xs text-gray-500">

{item.title}

</p>


<h3 className="
text-sm 
sm:text-base
font-bold 
text-gray-900 
dark:text-white
">

{item.value}

</h3>


</div>



</div>

);

})}


</div>




<div className="
my-4 
border-t 
border-gray-100 
dark:border-gray-700
"/>



<button

onClick={()=>navigate("/progress")}

className="
group 
flex 
w-full 
items-center 
justify-center
sm:justify-start
gap-2 
rounded-lg 
px-2 
py-2 
text-sm 
font-medium 
text-blue-600 
transition 
hover:bg-blue-50 
dark:hover:bg-blue-900/20
"

>


<span>
View Detailed Progress
</span>


<ArrowRight

size={18}

className="
transition-transform 
duration-200 
group-hover:translate-x-1
"

/>


</button>



</div>

);

}


export default Statistics;