import express from "express";
import { analyzeData } from "../controllers/analyzeController.js";

const router = express.Router();

router.post("/", analyzeData);

export default router;