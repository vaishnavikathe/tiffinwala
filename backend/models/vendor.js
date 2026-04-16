import mongoose from "mongoose";

const vendorSchema= new mongoose.Schema({

    ownwerName:{
        type:String,
        required:True,
    },
    shopName:{
        type:String,
        required:True,
    },
    addresss:{
        type:String,
        required:True,
    },
    mobile:{
        type:String,
        required:True,
        unique:True,
    },
    password:{
        type:String,
        required:True,
    }   
},{ timestamps : Ture});
export default mangoose.models('vendors',userSchema);