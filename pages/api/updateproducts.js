import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res)=> {
    if(req.method =='POST'){
      const{_id,title,slug,desc,img,category,size,color,price,availableQty} =req.body
      let p = await Product.findByIdAndUpdate(req.body._id , req.body)
      res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error :"This method is not allowed"})
    }
  }
export default connectDb(handler)