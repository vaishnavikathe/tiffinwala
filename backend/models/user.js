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
<<<<<<< HEAD
    }   
=======
    },   
    email:{
        type:String,
        required:True,
    }
>>>>>>> d7707ea (temp msg)
},{ timestamps : True});
export default mangoose.models('user',userSchema);