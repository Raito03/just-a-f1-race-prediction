/* eslint-disable react/prop-types */

import { Plus } from "lucide-react";
import SelectedDriver from "./driver_section/SelectedDriver";
import { useState } from "react";
import DriverPopUp from "./driver_section/DriverPopUp";

const DriverSelection = ({ selectedDrivers, onDriverSelect, onDriverDelete }) => {
  // const availableDrivers = drivers.filter((driver) => !selectedDrivers.includes(driver));
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="space-y-4">
      {/* New Button */}

      <button
        onClick={() => setIsPopupOpen(true)}
        className="w-full flex items-center justify-center space-x-2 py-3 
                 bg-white/10 border border-gray-200/20 rounded-lg text-white 
                 hover:bg-white/20 transition-colors"
      >
        <Plus size={20} />
        <span>Select Drivers</span>
      </button>

      <DriverPopUp
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        selectedDrivers={selectedDrivers}
        onDriverSelect={onDriverSelect}
        onDriverDelete={onDriverDelete}
      />

      {/* Selected Drivers */}
      {selectedDrivers.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-white text-sm font-medium">Grid Positions:</h3>
          <div className="grid grid-cols-1 gap-2 max-h-40 overflow-scroll scrollbar-hide">
            {selectedDrivers.map((driver, index) => (
              <SelectedDriver
                driver={driver}
                index={index}
                key={index}
                onDriverDelete={onDriverDelete}
              />
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
