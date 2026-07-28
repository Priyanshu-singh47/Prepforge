import {useState,useEffect} from "react";
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

const [resendLoading,setResendLoading]=useState(false);

const [timeLeft,setTimeLeft]=useState(60);


const email=location.state?.email || "";




useEffect(()=>{

if(timeLeft<=0)
return;


const timer=setInterval(()=>{

setTimeLeft(prev=>prev-1);

},1000);


return()=>clearInterval(timer);


},[timeLeft]);




const minutes=Math.floor(timeLeft/60);

const seconds=timeLeft%60;





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






const handleResend=async()=>{


try{

setResendLoading(true);



await api.post(
"/auth/resend-otp",
{
email,
}
);



setTimeLeft(60);

setOtp("");

toast.success(
"New OTP sent. Check inbox and spam folder."
);


}

catch(error){

toast.error(
error.response?.data?.message ||
"Failed to resend OTP"
);

}

finally{

setResendLoading(false);

}


};





return(

<AuthLayout

title="Verify Email"

subtitle={`OTP sent to ${email}.`}

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




<p className="text-center text-xs text-gray-500">

Didn't receive OTP? Check spam folder or wait for resend timer.

</p>





<button

type="submit"

disabled={loading}

className="w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700 disabled:opacity-50"

>

{
loading
?
"Verifying..."
:
"Verify Email"
}

</button>





<div className="text-center text-sm text-gray-500">


{
timeLeft>0

?

<p>
Resend OTP in {minutes}:{seconds<10 ? `0${seconds}` : seconds}
</p>

:

<button

type="button"

onClick={handleResend}

disabled={resendLoading}

className="font-medium text-blue-600 hover:underline disabled:opacity-50"

>

{
resendLoading
?
"Sending..."
:
"Resend OTP"
}

</button>

}


</div>



</form>


</AuthLayout>

);

}


export default VerifyEmail;