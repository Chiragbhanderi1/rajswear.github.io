import Order from "../../models/Order";
import connectDb from "../../middleware/mongoose";
const jwt = require('jsonwebtoken');


const handler = async (req, res) => {
    const token = req.body.token
    const data = jwt.verify(token,'secret is jwt')
    let orders = await Order.find({status:'Paid',status:'Pending',status:'Initiated'});
    res.status(200).json(orders)
    
  }
   
export default connectDb(handler);