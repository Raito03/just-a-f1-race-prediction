/* eslint-disable react/prop-types */

import { motion, AnimatePresence } from "framer-motion";

import ResultsGrid from "../results/ResultsGrid";
import ResultsHeader from "../results/ResultsHeader";
import ResultsBackground from "../results/ResultsBackground";

const ResultsPopup = ({ isOpen, onClose, results, type }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative bg-gradient-to-br from-gray-900/95 to-black/95 
                     rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: `${Math.ceil(results.length / 5) * 16}vw`,
              minWidth: "30rem",
              position: "absolute",
              left: "50%",
              translate: " -50%",
            }}
          >
            <ResultsBackground type={type} />

            <div className="relative p-8">
              <ResultsHeader type={type} onClose={onClose} />
              <ResultsGrid results={results} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResultsPopup;
