/* eslint-disable react/prop-types */
// import React from "react";

import img from "../assets/red.png";

const LoadingScreen = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 bg-black z-50 transition-transform duration-1000 flex items-center justify-center
        ${isLoading ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="relative w-screen">
        <img
          src={img}
          alt="F1 Car"
          className={`w-full h-full object-cover transition-transform duration-1000
            ${isLoading ? "scale-100" : "scale-0 rotate-90"}`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
