import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

import { GoogleLogin } from "@react-oauth/google";


function SignupForm({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  onGoogleSignup,
  loading,
}) {

const [showPassword,setShowPassword]=useState(false);


return(

<form
onSubmit={onSubmit}
className="space-y-4"
>


<GoogleLogin

onSuccess={(credentialResponse)=>{
onGoogleSignup(
credentialResponse.credential
);
}}

onError={()=>{
console.log("Google Login Failed");
}}

/>



<div className="flex items-center gap-3">

<div className="h-px flex-1 bg-gray-200"/>

<span className="text-xs font-medium uppercase text-gray-400">
OR
</span>

<div className="h-px flex-1 bg-gray-200"/>

</div>



<div>

<label className="mb-1.5 block text-sm font-medium text-gray-700">
Full Name
</label>

<div className="relative">

<User
size={18}
className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
/>

<input
type="text"
required
placeholder="Enter your full name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
/>

</div>

</div>



<div>

<label className="mb-1.5 block text-sm font-medium text-gray-700">
Email
</label>

<div className="relative">

<Mail
size={18}
className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
/>

<input
type="email"
required
placeholder="Enter your email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
/>

</div>

</div>




<div>

<label className="mb-1.5 block text-sm font-medium text-gray-700">
Password
</label>


<div className="relative">

<Lock
size={18}
className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
/>


<input
type={showPassword ? "text" : "password"}
required
minLength="6"
placeholder="Create a password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-11 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
/>



<button
type="button"
onClick={()=>setShowPassword(!showPassword)}
className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600"
>

{
showPassword
?
<EyeOff size={18}/>
:
<Eye size={18}/>
}

</button>


</div>

</div>




<button
type="submit"
disabled={loading}
className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
>

{
loading
?
"Creating Account..."
:
"Create Account →"
}

</button>




<p className="text-center text-sm text-gray-500">

Already have an account?{" "}

<Link
to="/login"
className="font-medium text-blue-600"
>
Login
</Link>

</p>


</form>

);

}

export default SignupForm;