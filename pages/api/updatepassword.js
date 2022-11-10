import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
import jsonwebtoken from 'jsonwebtoken'
import cryptoJs from "crypto-js"

const handler = async (req, res)=> {
    if(req.method == 'POST'){
        let token = req.body.token
        let user = jsonwebtoken.verify(token,process.env.JWT_SECERT)
        let dbuser =await User.findOne({email:user.email})
        const bytes  = cryptoJs.AES.decrypt(dbuser.password, process.env.AES_SECRET);
        let decryptPass = (bytes.toString(cryptoJs.enc.Utf8));
        if(decryptPass==req.body.password){
            let dbuser =await User.findOneAndUpdate({email:user.email},{password: cryptoJs.AES.encrypt(req.body.cpassword,process.env.AES_SECRET).toString()})
            res.status(200).json({success:true})
            return
        }else{
            res.status(200).json({success:false})
        }
        
        
    }else{
        
        res.status(400).json({error:"error"})
    }
    
  }
export default connectDb(handler)