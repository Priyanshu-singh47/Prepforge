import {useEffect,useRef,useState} from "react";
import {
FiBell,
FiChevronDown,
FiSearch,
FiSettings,
FiLogOut,
FiMoon,
FiSun,
} from "react-icons/fi";
import {useNavigate} from "react-router-dom";

import api from "../../services/api";
import ConfirmModal from "../common/ConfirmModal";

import {useTheme} from "../../context/ThemeContext";
import {useUser} from "../../context/UserContext";


function Navbar(){

const navigate=useNavigate();

const {darkMode,toggleTheme}=useTheme();

const {user}=useUser();


const [notifications,setNotifications]=useState([]);
const [showNotifications,setShowNotifications]=useState(false);
const [showProfile,setShowProfile]=useState(false);
const [confirmLogout,setConfirmLogout]=useState(false);

const [search,setSearch]=useState("");
const [results,setResults]=useState([]);
const [showSearch,setShowSearch]=useState(false);


const notificationRef=useRef(null);
const profileRef=useRef(null);


useEffect(()=>{

fetchNotifications();

const handleClickOutside=(e)=>{

if(notificationRef.current&&!notificationRef.current.contains(e.target))
setShowNotifications(false);

if(profileRef.current&&!profileRef.current.contains(e.target))
setShowProfile(false);

if(!e.target.closest(".search-box"))
setShowSearch(false);

};

document.addEventListener("mousedown",handleClickOutside);

return()=>document.removeEventListener("mousedown",handleClickOutside);

},[]);



const fetchNotifications=async()=>{

try{

const {data}=await api.get("/notifications");

setNotifications(data.notifications||[]);

}
catch(error){

console.error(error);

}

};



const handleSearch=async(e)=>{

const value=e.target.value;

setSearch(value);


if(value.trim().length<2){

setResults([]);

setShowSearch(false);

return;

}


try{

const {data}=await api.get(
"/search",
{
params:{
query:value,
},
}
);


setResults(
(data.results||[]).slice(0,5)
);

setShowSearch(true);


}
catch(error){

console.error(error);

setResults([]);

setShowSearch(false);

}

};



const dismissNotification=async(id)=>{

try{

await api.patch(
`/notifications/${id}/dismiss`
);


setNotifications(prev=>
prev.filter(item=>item.id!==id)
);


}
catch(error){

console.error(error);

}

};



const logout=()=>{

localStorage.removeItem("token");

localStorage.removeItem("user");

navigate("/login");

};



return(

<header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 dark:border-gray-700 dark:bg-gray-900">


<div className="search-box relative w-80">


<FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>


<input
value={search}
onChange={handleSearch}
placeholder="Search..."
className="h-10 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-16 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
/>



{showSearch&&(

<div className="absolute top-12 left-0 z-[100] max-h-96 w-full overflow-y-auto rounded-xl border bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-800">


{results.length===0?(

<p className="p-2 text-sm text-gray-500">
No results found
</p>

):

results.map(item=>(

<div
key={item._id||item.path}
onClick={()=>{

if(item.path)
navigate(item.path);

setSearch("");

setShowSearch(false);

}}

className="cursor-pointer rounded-lg p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
>

<p className="text-sm font-medium">
{item.title}
</p>

<p className="text-xs text-gray-400">
{item.type}
</p>

</div>

))

}

</div>

)}

</div>



<div className="flex items-center gap-3">


<div
ref={notificationRef}
className="relative"
>

<button
onClick={()=>setShowNotifications(prev=>!prev)}
className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700"
>

<FiBell/>

{notifications.length>0&&(
<span className="absolute -right-1 -top-1 rounded-full bg-red-600 px-2 text-xs text-white">
{notifications.length}
</span>
)}

</button>



{showNotifications&&(

<div className="absolute right-0 top-12 z-[100] w-80 rounded-xl border bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-gray-800">


<h3 className="mb-3 font-semibold dark:text-white">
Notifications
</h3>


{notifications.length===0?(

<p className="py-6 text-center text-sm text-gray-500">
🎉 You're all caught up!
</p>

):

notifications.map(item=>(

<button
key={item.id}
onClick={()=>dismissNotification(item.id)}
className="mb-2 w-full rounded-lg border p-3 text-left dark:border-gray-700"
>

<p className="text-sm font-medium dark:text-white">
{item.title}
</p>

<p className="text-xs text-gray-500">
{item.message}
</p>

</button>

))

}

</div>

)}

</div>



<div className="h-7 w-px bg-gray-200 dark:bg-gray-700"/>



<div
ref={profileRef}
className="relative"
>


<button
onClick={()=>setShowProfile(!showProfile)}
className="flex items-center gap-3 rounded-lg p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800"
>


<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">

{user?.name?.charAt(0)?.toUpperCase()||"U"}

</div>


<div>

<p className="text-sm font-semibold dark:text-white">
{user?.name||"User"}
</p>

<p className="text-xs text-gray-500">
{user?.branch||"Computer Engineering"}
</p>

</div>


<FiChevronDown/>

</button>



{showProfile&&(

<div className="absolute right-0 top-14 z-[100] w-56 rounded-xl border bg-white p-2 shadow-xl dark:border-gray-700 dark:bg-gray-800">


<button
onClick={toggleTheme}
className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
>

{darkMode?<FiSun/>:<FiMoon/>}

{darkMode?"Light Mode":"Dark Mode"}

</button>


<button
onClick={()=>navigate("/settings")}
className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
>

<FiSettings/>

Settings

</button>


<button
onClick={()=>setConfirmLogout(true)}
className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50"
>

<FiLogOut/>

Logout

</button>


</div>

)}

</div>


</div>



<ConfirmModal
open={confirmLogout}
title="Logout"
message="Are you sure you want to logout?"
confirmText="Logout"
onCancel={()=>setConfirmLogout(false)}
onConfirm={logout}
/>


</header>

);

}

export default Navbar;