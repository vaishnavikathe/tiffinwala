import mongoose from "mongoose";

const vendorSchema= new mongoose.Schema({

    ownwerName:{
        type:String,
        required:true,
    },
    shopName:{
        type:String,
        required:true,
    },
    addresss:{
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
export default mongoose.models('vendors',userSchema);