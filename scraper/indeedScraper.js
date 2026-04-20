import Job from "../models/jobModel.js";
import axios from "axios";

const runScraper = async () => {
  try {
    console.log("Running scraper...");

    const { data } = await axios.get(
      "https://remotive.com/api/remote-jobs"
    );

    const jobs = data.jobs.map(job => ({
      title: job.title || "Not specified",
      company: job.company_name || "Unknown",
      location: job.candidate_required_location || "Remote",
      source: job.url,
      provider: "Remotive",
      createdAt: new Date()
    }));

    console.log(`Fetched ${jobs.length} jobs`);

    if (jobs.length > 0) {
      await Job.insertMany(jobs, { ordered: false });
      console.log("Jobs saved ✅");
    } else {
      console.log("No jobs found");
    }

  } catch (err) {
    console.error("SCRAPER ERROR:", err.message);
  }
};

export default runScraper;