import { Heart } from "lucide-react";

function JobCard() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
      {/* Top */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <img
            src="https://via.placeholder.com/40"
            alt="logo"
            className="w-10 h-10 rounded-md"
          />
          <div>
            <h3 className="font-semibold text-sm">Product Designer</h3>
            <p className="text-xs text-gray-500">MetaMask • 25 Applicants</p>
          </div>
        </div>

        <Heart className="text-gray-400 cursor-pointer" size={18} />
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap mb-3 text-xs">
        <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded">
          Entry Level
        </span>
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
          Full-Time
        </span>
        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded">
          Remote
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4">
        Doing the right thing for investors is what we’re all about...
      </p>

      {/* Bottom */}
      <div className="flex justify-between items-center text-sm">
        <span className="font-semibold">₹250/hr</span>
        <span className="text-gray-400 text-xs">Posted 12 days ago</span>
      </div>
    </div>
  );
}

export default JobCard;
