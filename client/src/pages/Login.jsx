import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

import AuthLayout from "../components/Auth/AuthLayout";
import LoginForm from "../components/Auth/LoginForm";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const handleSubmit = async(e)=>{

    e.preventDefault();

    try{

      const response = await api.post(
        "/auth/login",
        {
          email,
          password,
        }
      );


      console.log(
        "FULL RESPONSE:",
        response
      );


      const data = response.data;


      console.log(
        "LOGIN DATA:",
        data
      );


      console.log(
        "TOKEN RECEIVED:",
        data.token
      );


      localStorage.setItem(
        "token",
        data.token
      );


      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );


      console.log(
        "TOKEN AFTER SAVE:",
        localStorage.getItem("token")
      );


      navigate("/");


    }
    catch(error){

      console.log(
        "LOGIN ERROR:",
        error
      );


      alert(
        error.response?.data?.message ||
        "Login failed"
      );

    }

  };



  const handleGoogleLogin = async(token)=>{

    try{

      const {data}=await api.post(
        "/auth/google",
        {
          token,
        }
      );


      console.log(
        "GOOGLE LOGIN RESPONSE:",
        data
      );


      localStorage.setItem(
        "token",
        data.token
      );


      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );


      console.log(
        "GOOGLE TOKEN:",
        localStorage.getItem("token")
      );


      navigate("/");


    }
    catch(error){

      console.log(
        "GOOGLE LOGIN ERROR:",
        error
      );


      alert(
        error.response?.data?.message ||
        "Google login failed"
      );

    }

  };



  return (

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