import mongoose from "mongoose";

const userSchema= new mongoose.Schema({

    name:{
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
=======
        required:true,
    },
    email:{
        type:String,
        required:true,
    }  
},{ timestamps : true});
export default mongoose.model('user',userSchema);
>>>>>>> main
