import { motion } from "framer-motion";

const LoadingOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div className="relative flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
        <div className="mt-4 text-white text-center">Processing Prediction...</div>
      </div>
    </motion.div>
  );
};

export default LoadingOverlay;
