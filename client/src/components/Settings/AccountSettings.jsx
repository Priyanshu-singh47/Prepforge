import { useState } from "react";
import { Lock } from "lucide-react";
import toast from "react-hot-toast";

import api from "../../services/api";


const AccountSettings = () => {


const [formData,setFormData]=useState({

currentPassword:"",
newPassword:"",
confirmPassword:"",

});


const [showForm,setShowForm]=useState(false);

const [saving,setSaving]=useState(false);

const [error,setError]=useState("");



const handleChange=(e)=>{

setError("");

setFormData(prev=>({

...prev,

[e.target.name]:e.target.value,

}));

};




const handleSubmit=async(e)=>{

e.preventDefault();



if(formData.newPassword.length<6){

return setError(
"Password must be at least 6 characters."
);

}



if(formData.newPassword!==formData.confirmPassword){

return setError(
"Passwords do not match."
);

}




try{


setSaving(true);



await api.put(

"/settings/password",

{

currentPassword:formData.currentPassword,

newPassword:formData.newPassword,

}

);



toast.success(
"Password updated successfully"
);



setFormData({

currentPassword:"",

newPassword:"",

confirmPassword:"",

});



setShowForm(false);



}

catch(err){


toast.error(

err.response?.data?.message ||
"Failed to update password."

);


setError(

err.response?.data?.message ||
"Failed to update password."

);


}

finally{

setSaving(false);

}


};





return (

<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">


<div className="mb-5 flex items-center gap-3">


<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">

<Lock className="h-5 w-5 text-blue-600"/>

</div>


<div>

<h2 className="text-base font-semibold text-gray-900 dark:text-white">
Account
</h2>


<p className="text-sm text-gray-500">
Manage your account security.
</p>


</div>


</div>



{!showForm ? (

<button

onClick={()=>setShowForm(true)}

className="flex w-full items-center justify-between rounded-xl border border-gray-200 px-4 py-3 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"

>


<div className="text-left">

<p className="font-medium text-gray-900 dark:text-white">
Change Password
</p>

<p className="text-sm text-gray-500">
Update your account password.
</p>

</div>


<Lock className="h-5 w-5 text-gray-500"/>


</button>


):(


<form
onSubmit={handleSubmit}
className="space-y-4"
>


{error && (

<div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">

{error}

</div>

)}



{
[
{
label:"Current Password",
name:"currentPassword"
},
{
label:"New Password",
name:"newPassword"
},
{
label:"Confirm Password",
name:"confirmPassword"
},
].map(field=>(


<div key={field.name}>


<label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">

{field.label}

</label>


<input

type="password"

name={field.name}

value={formData[field.name]}

onChange={handleChange}

className="w-full rounded-xl border border-gray-300 px-4 py-2.5 dark:border-gray-700 dark:bg-gray-900 dark:text-white"

required

/>


</div>


))

}



<div className="flex gap-3">


<button

disabled={saving}

className="rounded-xl bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700 disabled:opacity-60"

>

{
saving
?
"Updating..."
:
"Update Password"
}

</button>



<button

type="button"

onClick={()=>{

setShowForm(false);

setError("");

}}

className="rounded-xl border px-5 py-2.5 dark:border-gray-700 dark:text-white"

>

Cancel

</button>


</div>


</form>


)}



</div>

);


};


export default AccountSettings;