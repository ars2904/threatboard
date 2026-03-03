import { motion } from "framer-motion";

export default function ProgressRing({ progress = 45 }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-24 h-24">
      <svg width="100" height="100">

        {/* Background circle */}
        <circle
          stroke="#15233e"
          fill="transparent"
          strokeWidth="8"
          r={radius}
          cx="50"
          cy="50"
        />

        {/* Animated progress circle */}
        <motion.circle
          stroke="#0CC8A8"
          fill="transparent"
          strokeWidth="8"
          strokeLinecap="round"
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1 }}
        />

      </svg>

      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-900 dark:text-gray-100 md:text-xl">
        {progress}%
      </div>
    </div>
  );
}