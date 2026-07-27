import { useEffect, useState } from "react";
import { User } from "lucide-react";
import toast from "react-hot-toast";

import api from "../../services/api";
import { useUser } from "../../context/UserContext";


const ProfileCard = () => {


const { user, updateUser } = useUser();



const [formData,setFormData]=useState({

name:"",
email:"",
branch:"Computer Science",

});



const [loading,setLoading]=useState(true);

const [saving,setSaving]=useState(false);





useEffect(()=>{


if(user){


setFormData({

name:user.name || "",

email:user.email || "",

branch:user.branch || "Computer Science",

});


setLoading(false);


}


},[user]);






const handleChange=(e)=>{


setFormData(prev=>({

...prev,

[e.target.name]:e.target.value,

}));

};






const handleSubmit=async(e)=>{


e.preventDefault();



try{


setSaving(true);



await api.put(

"/settings/profile",

{

name:formData.name,

branch:
formData.branch || "Computer Science",

}

);





const updatedUser={


...user,


name:formData.name,


branch:
formData.branch || "Computer Science",


};





updateUser(updatedUser);





toast.success(
"Profile updated successfully"
);



}

catch(error){


console.error(error);



toast.error(

error.response?.data?.message ||

"Profile update failed"

);


}

finally{


setSaving(false);


}



};






if(loading){


return(

<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">


<p className="text-gray-500">
Loading...
</p>


</div>

);


}






return(


<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">



<div className="mb-5 flex items-center gap-3">


<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">

<User className="h-5 w-5 text-blue-600"/>

</div>



<div>


<h2 className="text-base font-semibold text-gray-900 dark:text-white">

Profile Information

</h2>


<p className="text-sm text-gray-500">

Update your personal information.

</p>


</div>


</div>







<form

onSubmit={handleSubmit}

className="max-w-lg space-y-4"

>





<div>


<label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">

Full Name

</label>



<input

type="text"

name="name"

value={formData.name}

onChange={handleChange}

className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"

/>


</div>







<div>


<label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">

Email Address

</label>



<input

type="email"

value={formData.email}

readOnly

className="w-full cursor-not-allowed rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400"

/>


</div>







<div>


<label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">

Branch

</label>



<input

type="text"

name="branch"

value={formData.branch}

onChange={handleChange}

placeholder="Computer Science"

className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"

/>


</div>







<button

type="submit"

disabled={saving}

className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700 disabled:opacity-60"

>


{
saving
?
"Saving..."
:
"Save Changes"
}


</button>





</form>




</div>


);


};



export default ProfileCard;