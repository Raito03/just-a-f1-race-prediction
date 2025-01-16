/* eslint-disable react/prop-types */
import { Flag } from "lucide-react";

const FormToggle = ({ activeForm, onToggle }) => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      {/* if true then goes with Location Form otherwise Not */}
      <button
        onClick={() => onToggle(!activeForm)}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
          ${activeForm ? "bg-red-600 text-white" : "bg-white/10 text-gray-300 hover:bg-white/20"}`}
      >
        <Flag size={18} />
        <span>With Location</span>
      </button>
    </div>
  );
};

export default FormToggle;
