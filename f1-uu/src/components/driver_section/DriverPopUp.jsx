/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { drivers } from "../../assets/data/driver";
import DriverCard from "./DriverCard";

const DriverPopUp = ({ isOpen, onClose, selectedDrivers, onDriverSelect, onDriverDelete }) => {
  const handleDriverToggle = (driver) => {
    if (!selectedDrivers.includes(driver)) {
      onDriverSelect(driver);
    } else {
      onDriverDelete(driver);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 rounded-xl"
          onClick={onClose}
          style={{
            width: "90vw",
            height: "95vh",
            top: "45%",
            left: "50%",
            translate: " -50% -50%",
            zIndex: 999,
          }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative  bg-gradient-to-br from-gray-900/95 
                     to-black/95 rounded-2xl shadow-2xl  px-5 pt-6"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 
                       hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-white">Select Drivers</h2>

            <div className="grid grid-cols-5 gap-4 pt-5 h-[calc(100%-2rem)] overflow-y-auto custom-scrollbar">
              {drivers.map((driver, index) => (
                <DriverCard
                  key={driver}
                  index={index}
                  driver={driver}
                  isSelected={selectedDrivers.includes(driver)}
                  onClick={() => handleDriverToggle(driver)}
                />
              ))}
            </div>

            <div
              className="flex justify-center"
              style={{
                position: "absolute",
                width: "100%",
                bottom: "15px",
              }}
            >
              <button
                onClick={onClose}
                className="px-20 py-2 bg-red-600 text-white rounded-lg 
                         hover:bg-red-700 transition-colors font-semibold"
                style={{
                  boxShadow: "0 0 30px 2px #a71d06cf",
                }}
              >
                Done
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DriverPopUp;
