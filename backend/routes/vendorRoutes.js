import express from "express";
import { registerVendor, loginVendor } from "../controllers/vendorController.js";

const vendorroutes = express.Router();

vendorroutes.post("/register", registerVendor);
vendorroutes.post("/login", loginVendor);

export default vendorroutes;