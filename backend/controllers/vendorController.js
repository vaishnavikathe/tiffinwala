import Vendor from "../models/vendor.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerVendor= async (req,res)=>{
  try{
    const{ownerName,address,mobile,password,cuisine,shopName} = req.body;

    const existing = await Vendor.findOne({ mobile });
        if (existing) {

        return res.status(400).json({
        message: "vendor already registered, return to login"
      });     
  }  

  const hashedPassword = await bcrypt.hash(password, 10);
   
  const vendor =Vendor.create({
    ownerName,
    address,
    mobile,
    password: hashedPassword,
    cuisine,
    shopName
  });
  
  res.status(201).json({
      message: "Vendor Registered successfully",
      vendor 
    });

}catch(error){
 res.status(500).json({ error: error.message });     
}
};


//login
export const loginVendor= async (req,res)=>{
  try{
    const{mobile,password} =req.body;

    const vendor = await Vendor.findOne({ mobile });
    if (!vendor) {
      return res.status(401).json({ message: "Vendor not found" });
    }

    const isMatch = await bcrypt.compare(password, vendor.password); 

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Password" });
    }

     const token = jwt.sign(
          { id: vendor._id, role: "vendor" },
          process.env.JWT_SECRET,
          { expiresIn: "7d" }
        );
    res.json({ message: "Login Successfully", token });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};