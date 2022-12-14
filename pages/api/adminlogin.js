import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require('crypto-js');
var jwt = require('jsonwebtoken')

const handler = async (req, res) =>{
  if (req.method == "POST") {

    let user = await User.findOne({ "email": req.body.email });
    if (user) {
        console.log(user.password)
      const bytes  = CryptoJS.AES.decrypt(user.password, process.env.ADMIN_AES_SECRET);
      let decryptPass = (bytes.toString(CryptoJS.enc.Utf8));
        if (req.body.email == user.email && req.body.password==decryptPass) {
          var token= jwt.sign({ email: user.email, name: user.name },process.env.JWT_SECERT,{expiresIn:"2y"})
        res.status(200).json({success: true,token,email:user.email});
        }
        else{
            res.status(200).json({error:"Invalid Credentials" });
        }
    }
    else{
        res.status(200).json({error:"No user found" });

    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler);
