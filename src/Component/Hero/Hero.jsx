import React from "react";
import heroImg from "../../assets/banner-main.png"; 

const Hero = () => {
  return (
    <div className="container mx-auto px-4 lg:px-12 mt-6">
      <div className="hero min-h-[70vh] bg-gradient-to-r from-black via-gray-900 to-gray-800 rounded-2xl">
        <div className="hero-content flex flex-col items-center justify-center text-center text-white">
          {/* Image */}
          <img
            src={heroImg}
            alt="Cricket Hero"
            className="max-w-[250px] md:max-w-[300px] lg:max-w-[400px] mb-6"
          />

          {/* Title */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          {/* Subtitle */}
          <p className="py-4 text-gray-300 text-sm md:text-lg">
            Beyond Boundaries Beyond Limits
          </p>

          {/* Button */}
          <button className="btn bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 rounded-lg border-2 border-black">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
