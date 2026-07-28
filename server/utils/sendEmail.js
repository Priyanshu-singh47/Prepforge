const axios = require("axios");


const sendEmail = async(options)=>{


try{


await axios.post(

"https://api.brevo.com/v3/smtp/email",

{

sender:{
name:"PrepForge",
email:process.env.BREVO_EMAIL,
},


to:[
{
email:options.email,
}
],


subject:options.subject,


textContent:options.message,


},


{

headers:{

"api-key":process.env.BREVO_API_KEY,

"Content-Type":"application/json",

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



module.exports = sendEmail;