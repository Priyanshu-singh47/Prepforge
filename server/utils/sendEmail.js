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
Name:"PrepForge",
},


To:[
{
Email:options.email,
}
],


Subject:options.subject,


TextPart:options.message,

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