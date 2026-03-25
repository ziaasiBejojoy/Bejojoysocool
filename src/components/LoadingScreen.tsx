import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B1D13] text-white"
    >
      {/* Profile Circle */}
      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#FFE066] to-[#3A5A40] flex items-center justify-center mb-6 shadow-glow">
        <span className="text-3xl">👤</span>
      </div>

      {/* Welcome Text */}
      <h1 className="text-xl font-semibold mb-4">
        Welcome, visitor!
      </h1>

      {/* Loading Dots */}
      <div className="flex gap-2">
        <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
        <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300"></span>
      </div>

      {/* Subtitle */}
      <p className="text-sm text-white/60 mt-4">
        Preparing your experience...
      </p>
    </motion.div>
  );
}