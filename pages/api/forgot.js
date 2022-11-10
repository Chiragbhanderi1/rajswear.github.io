// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Forgot from "../../models/Forgot";
import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
var jwt = require('jsonwebtoken')
const handler=async(req, res)=> {
  // check if the user exists in the Database
  let user = await User.findOne({ "email": req.body.email });
  // Send an email to the user
  if (req.body.sendMail) {
    if(user){
    let token = jwt.sign({ email: user.email},process.env.JWT_SECERT,{expiresIn:"2d"});
    let forgot = new Forgot({
      email: req.body.email,
      token: token,
    });
    let email = `We have sent you this email in response to your request to reset your password on Raj's Wear. 

    To reset your password , please follow the link below:

    <a href="http://localhost:3000/forgot?token=${token}">Click here to reset your password.</a>

    <br/><br/>

    We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can change it by going to your rajswear.com  My Account Page and clicking on the "Change Password" and change your password.

    <br/><br/>`;
    ("use strict");
    const nodemailer = require("nodemailer");

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
    //   let testAccount = await nodemailer.createTestAccount();
        // console.log(testAccount)
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
            user: "cbhanderi666@gmail.com",
            pass: "tfnmmocsbahfzgob", 
          },
      
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: 'dilipbhanderi4767@gmail.com', // sender address
        to: user.email, // list of receivers
        subject: "Reset Password", // Subject line
        html: email, // html body
      });
      console.log(user.email)
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

     
    }

    main().catch(console.error);
}else{
    res.status(200).json({ success: false,error:'Invalid email Id'});

}
  } else {
    // Reset user password
  }
  res.status(200).json({ success: true });
}
export default connectDb(handler);
