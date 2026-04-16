import { Link } from "react-router-dom";
import bgImage from "../assets/LoginComp.webp";

function Login() {
  return (
    <div className="flex h-screen bg-[#ed6e4e] ">
      {/* Left illustration panel */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <img src={bgImage} alt="Logo" className="h-full w-full object-cover" />
      </div>

      {/* Right login panel */}
      <div className="w-1/2 flex flex-col justify-center px-16 ml-10">
        <h2 className="text-4xl font-bold text-white mb-3">LOGIN</h2>
        <p className="text-white text-lg mb-8">Enter your account details</p>

        <input
          type="email"
          placeholder="Email"
          className="bg-transparent border-b border-[#e3bfb2s] text-[#e3bfb2] placeholder-white/70 p-2 w-150 mb-6 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="bg-transparent border-b border-[#e3bfb2] text-[#e3bfb2] placeholder-white/70 p-2 w-full mb-6 outline-none"
        />

        <div className="flex items-center justify-between">
          {/* Remember Me */}
          <label className="flex items-center space-x-2 text-white text-sm cursor-pointer">
            <input type="checkbox" className="accent-blue-500 cursor-pointer" />
            <span>Remember Me</span>
          </label>

          {/* Forgot Password */}
          <div className="text-white text-sm mr-2 cursor-pointer hover:underline">
            Forgot Password?
          </div>
        </div>
        <button className="ml-50 bg-[#6978bb] w-40 mt-12 hover:bg-[#323464] text-white px-8 py-3 rounded-full text-xl font-medium transition-colors">
          Login
        </button>

        <div className="flex items-center gap-2 ml-40 mt-8">
          <span className="text-white text-md">Don't have an account?</span>
          <Link
            to="/Signup"
            className="text-white text-md font-bold hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
