import express from "express";
import { registerVendor, loginVendor,addMenu,getAllVendors,getVendorDetails } from "../controllers/vendorController.js";


const vendorroutes = express.Router();

vendorroutes.post("/register", registerVendor);
vendorroutes.post("/login", loginVendor);
vendorroutes.post("/add-menu", addMenu);
vendorroutes.get("/all", getAllVendors);
vendorroutes.get("/:id/details", getVendorDetails);


export default vendorroutes;