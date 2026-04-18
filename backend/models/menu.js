import mongoose from "mongoose";

const menuSchema= new mongoose.Schema({

    vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true
  },
    day:{
        type:String,
        required:true
    },
    lunch:{
        type:String,
        default:[],
    },
    dinner:{
        type:String,
        default:[],
    }
},{timestamps : true});

export default mongoose.model('menu',menuSchema);