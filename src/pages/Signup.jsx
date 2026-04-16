import { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/SignUpComp.webp";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", form);
  };

  return (
    <div className="flex h-screen bg-[#ed6e4e]">
      {/* Left illustration panel */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center justify-center w-full h-full p-12">
          {/* Simple SVG illustration matching the login page style */}
          <img
            src={bgImage}
            alt="Logo"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Right signup panel */}
      <div className="w-1/2 flex flex-col justify-center px-16 ml-10">
        <h2 className="text-4xl font-bold text-white mb-3">SIGN UP</h2>
        <p className="text-white text-lg mb-8">
          Create your account to get started
        </p>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="bg-transparent border-b border-white text-white placeholder-white/70 p-2 w-full mb-6 outline-none"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="bg-transparent border-b border-white text-white placeholder-white/70 p-2 w-full mb-6 outline-none"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="bg-transparent border-b border-white text-white placeholder-white/70 p-2 w-full mb-8 outline-none"
        />

        <div className="mt-3">
          <button
            onClick={handleSubmit}
            className="bg-[#6978bb] hover:bg-[#323464] text-white ml-56 px-8 py-3 rounded-full text-xl font-medium transition-colors"
          >
            Sign Up
          </button>
        </div>

        <div className="flex items-center gap-2 ml-45 mt-8">
          <span className="text-white text-md">Already have an account?</span>
          <Link
            to="/login"
            className="text-white text-md font-bold hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
