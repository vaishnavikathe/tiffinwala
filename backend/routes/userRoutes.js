import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const userroutes = express.Router();

userroutes.post("/register", registerUser);
userroutes.post("/login", loginUser);

export default userroutes;