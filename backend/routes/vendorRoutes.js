import express from "express";
import { registerVendor, loginVendor,addMenu } from "../controllers/vendorController.js";


const vendorroutes = express.Router();

vendorroutes.post("/register", registerVendor);
vendorroutes.post("/login", loginVendor);
vendorroutes.post("/add-menu", addMenu);


export default vendorroutes;