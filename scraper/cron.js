import cron from "node-cron";
import runScraper from "./indeedScraper.js"; // adjust path if needed

const startCron = () => {
  cron.schedule("*/10 * * * *", async () => {
    console.log("Running scheduled scraper...");
    await runScraper();
  });
};

export default startCron;