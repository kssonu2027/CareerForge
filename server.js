import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import jobRoutes from "./routes/jobRoutes.js";
import runScraper from "./scraper/indeedScraper.js";
import startCron from "./scraper/cron.js";

dotenv.config();

const app = express();
app.use(express.json());

const start = async () => {
  try {
    console.log("calling scraper manually");

    await connectDB();

    console.log("mongodb connected");

    console.log("running scraper");
    await runScraper();

    startCron(); // keep ONLY cron OR manual run (not both repeatedly)

    app.use("/jobs", jobRoutes);

    app.listen(5000, () => {
      console.log("server running on port 5000");
    });

  } catch (err) {
    console.error(err);
  }
};

start();