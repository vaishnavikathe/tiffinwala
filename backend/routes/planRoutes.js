import express from "express";
import { createPlan } from "../controllers/planController.js";
import { protectVendor } from "../middlewares/authMiddleware.js"; 

const planRoutes = express.Router();

// create plans (prepaid / postpaid / both)
planRoutes.post("/create", protectVendor, createPlan);

export default planRoutes;