const nodemailer = require("nodemailer");


const sendEmail = async(options)=>{


const transporter = nodemailer.createTransport({

host:"smtp-relay.brevo.com",

port:587,

secure:false,

auth:{
    user:process.env.BREVO_EMAIL,
    pass:process.env.BREVO_SMTP_KEY,
},

});



try{


await transporter.sendMail({

from:`"PrepForge" <${process.env.BREVO_EMAIL}>`,

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