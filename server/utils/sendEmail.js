const nodemailer=require("nodemailer");

const sendEmail=async(options)=>{

const transporter=nodemailer.createTransport({

service:"gmail",

auth:{
user:process.env.EMAIL_USER,
pass:process.env.EMAIL_PASSWORD,
},

});


try{

await transporter.sendMail({

from:`"PrepForge" <${process.env.EMAIL_USER}>`,

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


module.exports=sendEmail;