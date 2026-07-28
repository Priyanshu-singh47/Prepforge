const nodemailer = require("nodemailer");


const sendEmail = async(options)=>{


const transporter = nodemailer.createTransport({

host:"smtp.gmail.com",

port:587,

secure:false,

auth:{
    user:process.env.EMAIL_USER,
    pass:process.env.EMAIL_PASSWORD,
},

tls:{
    rejectUnauthorized:false,
}

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