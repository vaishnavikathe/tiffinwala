import Vendor from "../models/vendor.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerVendor= async (req,res)=>{
  try{
    const{ownerName,address,mobile,password,cuisine,shopName,email} = req.body;

    const existing = await Vendor.findOne({ 
      $or: [
      { mobile: mobile },
      { email: email }
    ]
     });
        if (existing) {

        return res.status(400).json({
        message: "vendor already registered, return to login"
      });     
  }  

  const hashedPassword = await bcrypt.hash(password, 10);
   
  const vendor =await Vendor.create({
    ownerName,
    address,
    mobile,
    password: hashedPassword,
    cuisine,
    shopName,
    email
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
export const loginVendor = async (req, res) => {
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

    const vendor = await Vendor.findOne(query);

    if (!vendor) {
      return res.status(401).json({
        message: "Vendor not found"
      });
    }

    const isMatch = await bcrypt.compare(password, vendor.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password"
      });
    }

    const token = jwt.sign(
      { id: vendor._id, role: "vendor" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      message: "Login Successfully",
      token,
      vendor: {
        ownerName: vendor.ownerName,
        shopName: vendor.shopName
      }
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};