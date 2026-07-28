const { Resend } = require("resend");


const resend = new Resend(process.env.RESEND_API_KEY);



const sendEmail = async(options)=>{


try{


await resend.emails.send({

from:"PrepForge <onboarding@resend.dev>",

to:options.email,

subject:options.subject,

text:options.message,

});


}

catch(error){

console.log("EMAIL ERROR:",error.message);

throw error;

}


};



module.exports = sendEmail;