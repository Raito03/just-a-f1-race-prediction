/* eslint-disable react/prop-types */
// import React from 'react';
import { motion } from "framer-motion";

const ResultsGridItem = ({ result, position, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg 
                 border border-white/10 backdrop-blur-sm hover:bg-white/10 
                 transition-colors w-[13rem]"
    >
      <span
        className="flex items-center justify-center w-8 h-8 
                     bg-red-600 rounded-full text-white font-bold"
      >
        {position}
      </span>
      <div className="flex-1">
        <h3 className="text-white font-medium">{result.DriverName}</h3>
        <p className="text-gray-400 text-sm small-text">Prob - {result.Probability.toFixed(3)}%</p>
        <p className="text-gray-400 text-sm small-text">Grid - {result.Grid}</p>
      </div>
    </motion.div>
  );
};

export default ResultsGridItem;
