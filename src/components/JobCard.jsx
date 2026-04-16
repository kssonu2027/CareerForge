import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-bold">{job.title}</h2>

      <p>{job.company}</p>

      <p className="text-sm text-gray-600">
        {job.description?.slice(0, 120)}...
      </p>

      <div className="flex gap-3 mt-3">
        <Link to={`/job/${job.id}`} className="text-blue-500">
          View
        </Link>

        <a href={job.applyLink} target="_blank" className="text-green-500">
          Apply
        </a>
      </div>
    </div>
  );
}

export default JobCard;
