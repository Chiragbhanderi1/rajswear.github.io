const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title : {type: String ,require : true},
    slug : {type: String ,require : true,unique:true},
    desc : {type: String ,require : true},
    img : {type: String ,require : true},
    category : {type: String ,require : true},
    size : {type: String},// Make it array for multiple inputs
    color : {type: String},
    price : {type: String},
    availableQty : {type: Number}
},{timestamps:true});

mongoose.models ={}
export default mongoose.model("Product",ProductSchema);