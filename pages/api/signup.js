import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require('crypto-js')

const handler = async (req, res)=> {
    console.log("init")
    if(req.method =='POST'){
        const{name,email,password} =req.body
        const user = await User.create({name,email,password: CryptoJS.AES.encrypt(req.body.password,process.env.AES_SECRET).toString()})
        res.status(200).json({success :"success"})
    }
    else{
        res.status(400).json({error :"This method is not allowed"})
    }
  }
export default connectDb(handler)