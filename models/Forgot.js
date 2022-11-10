const mongoose = require('mongoose');

const ForgotSchema = new mongoose.Schema({
    useris : {type: String ,require : true},
    email : {type: String ,require : true, unique:true},
    token :{type:Object,required:true},
    
},{timestamps:true});

mongoose.models ={}
export default mongoose.model("Forgot",ForgotSchema);