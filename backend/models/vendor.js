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
<<<<<<< HEAD
        required:True,
    },
    cuisine:{
        type:String,
        required:True,
=======
        required:true,
    },
    email:{
        type:String,
        required:true,
>>>>>>> main
    }   
},{ timestamps : true});
export default mongoose.model('vendors',Vendor);
