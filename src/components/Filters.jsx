import { useState } from "react";

function Filters() {
  const [categoryQuery, setCategoryQuery] = useState("");
  return (
    <div className="space-y-6 text-sm">
      {/* Job Type */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold">Job Type</h3>
          <button className="text-xs text-red-400">Clear all</button>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Full time
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Part time
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Internship
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Project work
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Volunteering
          </label>
        </div>
      </div>

      {/* Salary Range */}
      <div>
        <h3 className="font-semibold mb-2">Salary Range</h3>
        <input type="range" className="w-full" />
        <div className="flex justify-between text-xs text-gray-500">
          <span>₹50k</span>
          <span>₹120k</span>
        </div>
      </div>

      {/* Experience */}
      <div>
        <h3 className="font-semibold mb-2">Experience Level</h3>
        <div className="space-y-2">
          <label className="flex justify-between">
            <span>
              <input type="checkbox" className="mr-2" /> Entry level
            </span>
            <span className="text-gray-400">392</span>
          </label>

          <label className="flex justify-between">
            <span>
              <input type="checkbox" className="mr-2" /> Intermediate
            </span>
            <span className="text-gray-400">124</span>
          </label>

          <label className="flex justify-between">
            <span>
              <input type="checkbox" className="mr-2" /> Expert
            </span>
            <span className="text-gray-400">3921</span>
          </label>
        </div>
      </div>

      {/* JOB CATEGORY (SEARCH TYPE) */}
      <div>
        <h3 className="font-semibold mb-3">Job Category</h3>

        {/*
    state should be at top of component:
    const [categoryQuery, setCategoryQuery] = useState("");
  */}

        <div className="relative">
          <input
            type="text"
            value={categoryQuery}
            onChange={(e) => setCategoryQuery(e.target.value)}
            placeholder="Search category..."
            className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Suggestions */}
          {categoryQuery && (
            <div className="absolute w-full bg-white border rounded-lg mt-1 shadow-md z-10">
              {[
                "Software Development",
                "UI/UX Design",
                "Data Science",
                "Marketing",
                "Finance",
                "Human Resources",
              ]
                .filter((cat) =>
                  cat.toLowerCase().includes(categoryQuery.toLowerCase()),
                )
                .map((cat) => (
                  <div
                    key={cat}
                    onClick={() => setCategoryQuery(cat)}
                    className="px-3 py-2 hover:bg-pink-100 cursor-pointer text-sm"
                  >
                    {cat}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      {/* WORK MODE */}
      <div>
        <h3 className="font-semibold mb-3">Work Mode</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Remote
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Hybrid
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> On-site
          </label>
        </div>
      </div>

      {/* SKILLS */}
      <div>
        <h3 className="font-semibold mb-3">Skills</h3>

        {/* Input */}
        <input
          type="text"
          placeholder="Search skills..."
          className="w-full border rounded-lg px-3 py-2 mb-3 outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* Popular Skills */}
        <div className="flex flex-wrap gap-2">
          {["React", "Java", "Python", "UI/UX", "Node.js"].map((skill) => (
            <button
              key={skill}
              className="px-3 py-1 bg-gray-100 rounded-full text-xs hover:bg-pink-100"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* COMPANY TYPE */}
      <div>
        <h3 className="font-semibold mb-3">Company Type</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Startup
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> MNC
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Product-based
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Service-based
          </label>
        </div>
      </div>

      {/* POSTED DATE */}
      <div>
        <h3 className="font-semibold mb-3">Posted Date</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="date" /> Last 24 hours
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="date" /> Last 7 days
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="date" /> Last 30 days
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
