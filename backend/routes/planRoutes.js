
import express from "express";
import { createPlan } from "../controllers/planController.js";

const planRoutes = express.Router();

// create plans (prepaid / postpaid / both)
planRoutes.post("/create", createPlan);

export default planRoutes;