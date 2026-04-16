import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email:{
        type:String,
        required:True,
        unique:True
    },
    password:{
        type:String,
        required:True
    }
})
export default mangoose.models('admin',adminSchema);