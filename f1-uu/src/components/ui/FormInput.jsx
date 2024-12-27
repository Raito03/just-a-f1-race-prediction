/* eslint-disable react/prop-types */
// import React from "react";

const FormInput = ({ icon, label, value, onChange }) => (
  <div className="relative mb-6">
    <div className="absolute z-10 inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
      {icon}
    </div>
    <input
      type="text"
      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-gray-200/20 rounded-lg 
                 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none 
                 focus:border-red-500 transition-colors"
      placeholder={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default FormInput;
