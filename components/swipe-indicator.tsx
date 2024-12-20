import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

function SwipeIndicator() {
  return (
    <div className="flex w-fit items-center text-2xl text-gray-400">
      <motion.span
        animate={{
          x: [0, 2, 0, 2, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "easeInOut",
        }}
      >
        SWIPE
      </motion.span>
      <motion.div
        animate={{
          x: [0, 7, 0, 7, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "easeInOut",
        }}
        className="flex items-center"
      >
        <IoIosArrowForward className="text-3xl text-gray-400/60" />
        <IoIosArrowForward className="-ml-4 text-3xl text-gray-400/80" />
        <IoIosArrowForward className="-ml-4 text-3xl text-gray-400" />
      </motion.div>
    </div>
  );
}

export default SwipeIndicator;
