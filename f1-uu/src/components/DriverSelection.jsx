/* eslint-disable react/prop-types */

import { ChevronDown, Delete, UserRound } from "lucide-react";
import { drivers } from "../assets/data/driver";

const DriverSelection = ({ selectedDrivers, onDriverSelect, onDriverDelete }) => {
  const availableDrivers = drivers.filter((driver) => !selectedDrivers.includes(driver));

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute z-10 inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          <UserRound size={20} />
        </div>
        <select
          onChange={(e) => onDriverSelect(e.target.value)}
          value=""
          className="w-full pl-12 pr-10 py-3 bg-white/10 border border-gray-200/20 rounded-lg 
                     text-white appearance-none cursor-pointer backdrop-blur-sm
                     focus:outline-none focus:border-red-500 transition-colors"
        >
          <option value="" disabled className="text-gray-400">
            Select Drivers
          </option>
          {availableDrivers.map((driver) => (
            <option key={driver} value={driver} className="bg-gray-900 text-white">
              {driver}
            </option>
          ))}
        </select>
        <ChevronDown
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          size={20}
        />
      </div>

      {selectedDrivers.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-white text-sm font-medium">Grid Positions:</h3>
          <div className="grid grid-cols-1 gap-2 max-h-40 overflow-scroll scrollbar-hide">
            {selectedDrivers.map((driver, index) => (
              <div
                key={driver}
                className="flex items-center justify-between space-x-3 bg-white/5 p-3 rounded-lg border border-white/10"
              >
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
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// const DriverSelection = ({ selectedDrivers, onDriverSelect }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   return (
//     <div className="space-y-4">
//       <button
//         onClick={() => setIsPopupOpen(true)}
//         className="w-full flex items-center justify-center space-x-2 py-3
//                  bg-white/10 border border-gray-200/20 rounded-lg text-white
//                  hover:bg-white/20 transition-colors"
//       >
//         <Plus size={20} />
//         <span>Select Drivers</span>
//       </button>

//       <SelectedDriversList selectedDrivers={selectedDrivers} />

//       <DriverSelectionPopup
//         isOpen={isPopupOpen}
//         onClose={() => setIsPopupOpen(false)}
//         selectedDrivers={selectedDrivers}
//         onDriverSelect={onDriverSelect}
//       />
//     </div>
//   );
// };

export default DriverSelection;
