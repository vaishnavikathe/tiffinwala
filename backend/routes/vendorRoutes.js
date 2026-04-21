import express from "express";
import { registerVendor, loginVendor,addMenu,getAllVendors,getVendorDetails , updateVendorProfile, changeVendorPassword} from "../controllers/vendorController.js";
import { protectVendor } from "../middleware/authMiddleware.js";


const vendorroutes = express.Router();

vendorroutes.post("/register", registerVendor);
vendorroutes.post("/login", loginVendor);

router.use(protectVendor);


vendorroutes.post("/add-menu", addMenu);
vendorroutes.get("/all", getAllVendors);
vendorroutes.get("/:id/details", getVendorDetails);
vendorroutes.put("/update-profile", updateVendorProfile);
vendorroutes.put("/change-password", changeVendorPassword);


export default vendorroutes;