import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../services/api";
import AuthLayout from "../components/Auth/AuthLayout";
import SignupForm from "../components/Auth/SignupForm";

import { useUser } from "../context/UserContext";


function Signup(){

const navigate=useNavigate();

const {updateUser}=useUser();


const [name,setName]=useState("");

const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [loading,setLoading]=useState(false);



const handleSubmit=async(e)=>{

e.preventDefault();


if(!name.trim()){

toast.error("Name is required");

return;

}


if(!email.trim()){

toast.error("Email is required");

return;

}



try{

setLoading(true);



const {data}=await api.post(
"/auth/signup",
{
name:name.trim(),
email:email.trim().toLowerCase(),
password,
}
);



toast.success(
"OTP sent to your email. Please check inbox and spam folder."
);



navigate("/verify-email",{

state:{
email:data.email,
}

});


}

catch(error){

toast.error(
error.response?.data?.message ||
"Signup failed"
);

}

finally{

setLoading(false);

}

};






const handleGoogleSignup=async(token)=>{


try{

setLoading(true);



const {data}=await api.post(
"/auth/google",
{
token,
}
);



localStorage.setItem(
"token",
data.token
);



updateUser(data.user);



toast.success(
"Signed up successfully"
);



navigate("/dashboard");


}

catch(error){

toast.error(
error.response?.data?.message ||
"Google signup failed"
);

}

finally{

setLoading(false);

}

};





return(

<AuthLayout

title="Create Your Account"

subtitle="Join PrepForge and start tracking your preparation journey."

>


<SignupForm

name={name}
setName={setName}

email={email}
setEmail={setEmail}

password={password}
setPassword={setPassword}

onSubmit={handleSubmit}

onGoogleSignup={handleGoogleSignup}

loading={loading}

/>


</AuthLayout>

);

}


export default Signup;