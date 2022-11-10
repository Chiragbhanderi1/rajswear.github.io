import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
import jsonwebtoken from 'jsonwebtoken'

const handler = async (req, res)=> {
    if(req.method == 'POST'){
        let token = req.body.token
        let user = jsonwebtoken.verify(token,process.env.JWT_SECERT)
        let dbuser =await User.findOneAndUpdate({email:user.email},{address:req.body.address,phone:req.body.phone,pincode:req.body.pincode,name:req.body.name})
        res.status(200).json({success:true})
        
    }else{
        
        res.status(400).json({error:"error"})
    }
    
  }
export default connectDb(handler)