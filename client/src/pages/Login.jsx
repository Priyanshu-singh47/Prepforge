import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../services/api";

import AuthLayout from "../components/Auth/AuthLayout";
import LoginForm from "../components/Auth/LoginForm";

import { useUser } from "../context/UserContext";


function Login(){

const navigate=useNavigate();

const {updateUser}=useUser();


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");



const handleSubmit=async(e)=>{

e.preventDefault();


try{


const {data}=await api.post(

"/auth/login",

{
email,
password,
}

);



localStorage.setItem(

"token",

data.token

);



updateUser(data.user);



toast.success(
"Login successful"
);



navigate("/dashboard");



}

catch(error){


toast.error(

error.response?.data?.message ||

"Login failed"

);



}

};







const handleGoogleLogin=async(token)=>{


try{


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

"Login successful"

);




navigate("/dashboard");



}

catch(error){


toast.error(

error.response?.data?.message ||

"Google login failed"

);



}

};






return(


<AuthLayout

title="Welcome Back"

subtitle="Sign in to continue your preparation journey."

>


<LoginForm

email={email}

setEmail={setEmail}


password={password}

setPassword={setPassword}


onSubmit={handleSubmit}


onGoogleLogin={handleGoogleLogin}

/>



</AuthLayout>


);


}



export default Login;