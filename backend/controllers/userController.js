import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//register user 
export const registerUser = async (req,res) =>{
    try{
        const {name,mobile,address,password,email} = req.body;
        const existing = await User.findone({mobile});
        if(existing){
            return res.status(400).json({message:"User already registered return to login "});

        }
        password = await bcrypt.hash(password,10);

        const user = await User.create({
            name,mobile,address,password,email
        })
        res.status(201).json({message:"User Registered successfully",user});

    }catch(error)
    {
        res.status(500),json({error:error.message});
    }
   
};

//login user
export const loginuser = async (req,res) =>{
   try{
    const {mobile,password}= req.body;
    
    const user= await User.findone({mobile});
    if(!user){
        return res.status(401).json({message:"User not found"});   
    }
    const isMatch= bcrypt.compare(password,user.password);
    if(!Match){
        return res.status(401).json({message:"Invalid Password"});
    }

    const token= jwt.sign(
        {id: user._id,role:"user"},
        process.env.JWT_SECRET,
        { expiresIn:"7d"}
    );
    res.json({message:"Login Successfully", token});

}catch(error){
   res.status(500),json({error:error.message}); 
}

}
