import mongoose from "mongoose";

const Vendor= new mongoose.Schema({

    ownerName:{
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
    },
    email:{
        type:String,
        required:true,
    }   
},{ timestamps : true});
export default mongoose.model('vendors',Vendor);
