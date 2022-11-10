import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res)=> {
    if(req.method =='POST'){
      const{title,slug,desc,img,category,size,color,price,availableQty} =req.body
      await connectDb()
      const product = await Product.create(req.body)
      res.json({product})
    }
    else{
        res.status(400).json({error :"This method is not allowed"})
    }
  }
export default connectDb(handler)