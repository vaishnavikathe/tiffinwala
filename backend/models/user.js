import mongoose from "mongoose";

const userSchema= new mongoose.Schema({

    name:{
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
export default mangoose.models('user',userSchema);