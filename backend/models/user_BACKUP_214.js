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
    },   
    email:{
        type:String,
        required:True,
    }
=======
    }   
>>>>>>> c887eb11ae8b947e2fd458eb4b5eeeb7e4cf419e
},{ timestamps : True});
export default mangoose.models('user',userSchema);