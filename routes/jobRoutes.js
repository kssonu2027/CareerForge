import express from "express";
import { getJobs } from "../CareerForge/controllers/jobController.js";

const router = express.Router();

router.get("/", getJobs);

export default router;