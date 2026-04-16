import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// REGISTER USER
export const registerUser = async (req, res) => {
  try {
    const { name, mobile, address, password,email } = req.body;

    const existing = await User.findOne({ mobile });
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
    const { mobile, password } = req.body;

    const user = await User.findOne({ mobile });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // ✅ FIX: add await
    const isMatch = await bcrypt.compare(password, user.password);

    // ✅ FIX: correct variable name
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: user._id, role: "user" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ message: "Login Successfully", token });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};