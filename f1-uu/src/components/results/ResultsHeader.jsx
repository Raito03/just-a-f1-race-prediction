/* eslint-disable react/prop-types */
import { X } from "lucide-react";

const ResultsHeader = ({ onClose }) => {
  return (
    <>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white 
                 transition-colors"
      >
        <X size={24} />
      </button>

      <h2 className="text-3xl font-bold text-white mb-2">Race Prediction Results</h2>
      <p className="text-gray-400 text-sm mb-8">
        Based on your input parameters, here are the predicted outcomes
      </p>
    </>
  );
};

export default ResultsHeader;
