/* eslint-disable react/prop-types */
import { Delete, UserRound } from "lucide-react";
const SelectedDriver = ({ driver, index, onDriverDelete }) => {
  return (
    <div className="flex items-center justify-between space-x-3 bg-white/5 p-3 rounded-lg border border-white/10">
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-6 h-6 bg-red-600 rounded-full text-white text-sm font-bold">
          {index + 1}
        </span>
        <UserRound size={20} />
        <span className="text-white">{driver}</span>
      </div>
      <button
        onClick={() => onDriverDelete(driver)}
        className="flex items-center space-x-1 px-3 py-1 bg-red-900/50 text-red-500 rounded-lg hover:bg-red-900/80 transition duration-20 hover:border-red-400"
      >
        <Delete />
        <span className="font-medium"> Delete</span>
      </button>
    </div>
  );
};

export default SelectedDriver;
