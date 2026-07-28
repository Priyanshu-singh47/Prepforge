const axios = require("axios");


const sendEmail = async(options)=>{


try{


await axios.post(

"https://api.mailjet.com/v3.1/send",

{

Messages:[

{

From:{

Email:process.env.MAILJET_EMAIL,

Name:"PrepForge Team",

},


ReplyTo:{

Email:process.env.MAILJET_EMAIL,

Name:"PrepForge Team",

},



To:[

{

Email:options.email,

}

],



Subject:options.subject,



TextPart:options.message,



HTMLPart:`

<div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">

<h2 style="color:#2563eb;">
PrepForge
</h2>


<p>Hello,</p>


<p>
${options.message.replace(/\n/g,"<br>")}
</p>


<p>
Regards,<br>
<b>PrepForge Team</b>
</p>


</div>

`

}

]

},


{

auth:{

username:process.env.MAILJET_API_KEY,

password:process.env.MAILJET_SECRET_KEY,

}

}

);


}


catch(error){


console.log(

"EMAIL ERROR:",

error.response?.data || error.message

);


throw error;


}


};



module.exports=sendEmail;