import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../models/user.js";

// REGISTER USER
export const registerUser = async (req, res) => {
  try {
    const { name, mobile, address, password,email } = req.body;

    const existing = await User.findOne({ 
      $or: [
      { mobile: mobile },
      { email: email }
    ]
     });
    if (existing) {
      return res.status(400).json({
        message: "User already registered, return to login"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      mobile,
      address,
      password: hashedPassword,
      email
    });

    res.status(201).json({
      message: "User Registered successfully",
      user
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// LOGIN USER
export const loginUser = async (req, res) => {
  try {
    const { mobile, email, password } = req.body;

    // dynamic query
    let query = {};

    if (email) {
      query.email = email;
    } else if (mobile) {
      query.mobile = mobile;
    } else {
      return res.status(400).json({
        message: "Email or Mobile required"
      });
    }

    const user = await User.findOne(query);

    if (!user) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password"
      });
    }

    const token = jwt.sign(
      { id: user._id, role: "user" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      message: "Login Successfully",
      token,
      user: {
        name: user.name
      }
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//update user details

export const updateUserProfile = async (req, res) =>{
  try{
    const userId = req.userId;

    const{
      name,
      email,
      mobile,
      address,
      password
    }=req.body;

    const user = await User.findById(userId);

    if(!user){
      return res.status(404).json({
        message:"User not found"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
    user.password
  );
   if(!isMatch){
    return res.status(401).json({
        message:"Incorrect Password"
      });
   } 

   user.name = name || user.name;
   user.email = email || user.email;
   user.mobile = mobile || user.mobile;
   user.address = address || user.address;

   await user.save();

   res.json({
    message:"profile Updates Successfully!!",
    user
   });

  }catch(error){
       res.status(500).json({
        error:error.message
       });
  }
};

//Update Password
export const updateUserPassword = async(req, res) =>{
try{
  const userId = req.userId;
  
  const{
    newPassword,
    oldPassword
  } = req.body;

  const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({message:"User not found"});
    }
    const isMatch = await bcrypt.compare(
      oldPassword,
      user.password
    );
    if(!isMatch){
      return res.status(401).json({
        message:"Incorrect Password!!"
      });
    }
    const salt = await bcrypt.genSalt(10);

    user.password= await bcrypt.hash(
      newPassword,
      salt
    );
    await user.save();

    res.json({
      message:"Password Updated Successfully!!"
    });
}
catch(error){
  res.status(401).json({
    error:message.error
  });
}
};