const mongoose = require('mongoose'); 


const OrderSchema = new mongoose.Schema({
    email : {type: String ,require : true},
    orderId : {type: String ,require : true},
    paymentInfo : {type: String ,default :''},
    products :{type:Object,required:true},
    address:{type:String,required: true},
    city:{type:String,required: true},
    state:{type:String,required: true},
    pincode:{type:String,required: true},
    phone:{type:String,required: true},
    name:{type:String,required: true},
    transactionid:{type:String,defaut:''},
    amount:{type:Number,required: true},
    status:{type:String,default:"Initiated",required: true},
    deliveryStatus:{type:String,default:"unshipped",required: true}
},{timestamps:true});

mongoose.models ={}
export default mongoose.model("Order",OrderSchema);