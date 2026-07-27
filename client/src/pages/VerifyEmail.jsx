import {useState} from "react";
import {useLocation,useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

import api from "../services/api";

import AuthLayout from "../components/Auth/AuthLayout";
import {useUser} from "../context/UserContext";


function VerifyEmail(){

const navigate=useNavigate();

const location=useLocation();

const {updateUser}=useUser();


const [otp,setOtp]=useState("");

const [loading,setLoading]=useState(false);


const email=location.state?.email || "";



const handleSubmit=async(e)=>{

e.preventDefault();


if(!otp.trim()){

toast.error("Please enter OTP");

return;

}



try{

setLoading(true);


const {data}=await api.post(
"/auth/verify-email",
{
email,
otp,
}
);



localStorage.setItem(
"token",
data.token
);



updateUser(data.user);



toast.success(
"Email verified successfully"
);



navigate("/dashboard");


}
catch(error){

toast.error(
error.response?.data?.message ||
"Verification failed"
);

}
finally{

setLoading(false);

}

};



return(

<AuthLayout

title="Verify Email"

subtitle={`Enter the OTP sent to ${email}`}

>


<form

onSubmit={handleSubmit}

className="space-y-4"

>


<input

type="text"

maxLength="6"

value={otp}

onChange={(e)=>setOtp(e.target.value)}

placeholder="Enter OTP"

className="w-full rounded-xl border px-4 py-3 text-center text-lg tracking-widest outline-none focus:border-blue-500"

/>



<button

type="submit"

disabled={loading}

className="w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700 disabled:opacity-50"

>

{loading ? "Verifying..." : "Verify Email"}

</button>



</form>


</AuthLayout>

);

}


export default VerifyEmail;