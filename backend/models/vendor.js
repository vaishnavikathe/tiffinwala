import mongoose from "mongoose";

const Vendor= new mongoose.Schema({

    ownwerName:{
        type:String,
        required:true,
    },
    shopName:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }   
},{ timestamps : true});
<<<<<<< HEAD
export default mongoose.model('vendors',Vendor);
=======
export default mongoose.models('vendors',userSchema);
>>>>>>> ca03876bab315ab8afb479bf0129a665388ea767
