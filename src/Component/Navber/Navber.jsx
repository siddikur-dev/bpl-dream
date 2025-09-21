import React from "react";
import logo from "../../assets/logo.png";

const Navber = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="navbar container mx-auto px-4 lg:px-12">
        {/* Left: Logo */}
        <div className="flex-1">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Cricket Logo" className="h-12 w-auto" />
          </a>
        </div>

        {/* Center: Menu for large screens */}
        <div className="hidden md:flex gap-6 font-medium text-gray-800">
          <a href="/" className="hover:text-primary transition">
            Home
          </a>
          <a href="/fixture" className="hover:text-primary transition">
            Fixture
          </a>
          <a href="/teams" className="hover:text-primary transition">
            Teams
          </a>
          <a href="/schedules" className="hover:text-primary transition">
            Schedules
          </a>
        </div>

        {/* Right: Coin Button */}
        <div className="hidden md:flex">
          <button className="btn bg-white border border-gray-300 shadow-sm flex items-center gap-2 px-4 rounded-lg hover:border-primary md:ml-2">
            <span className="font-semibold text-gray-800">0 Coin</span>
            <span>🪙</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-gray-800"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/fixture">Fixture</a>
            </li>
            <li>
              <a href="/teams">Teams</a>
            </li>
            <li>
              <a href="/schedules">Schedules</a>
            </li>
            <li>
              <button className="btn bg-white border border-gray-300 shadow-sm flex items-center gap-2 px-4 rounded-lg hover:border-primary w-full mt-2 ">
                <span className="font-semibold text-gray-800">0 Coin</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
