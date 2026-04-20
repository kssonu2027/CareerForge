import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";

function Dashboard() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-[#dc6b43] h-50 pt-10">
        <h1 className="text-amber-50 text-3xl mb-5 pl-9 font-bold font-['Fraunces']">
          Find Your Dream Job Here ✦
        </h1>
        <SearchBar />
      </div>

      {/* Main Section */}
      <div className="bg-[#fdf6ed] px-8 py-8">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-semibold">Recommended Jobs</h2>
        </div>

        <div className="flex gap-8">
          {/* LEFT */}
          <div className="w-1/4">
            <Filters />
          </div>

          {/* RIGHT */}
          <div className="w-3/4 grid grid-cols-2 gap-6">
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
