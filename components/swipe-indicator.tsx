import { luckiest_guy } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

function SwipeIndicator() {
  return (
    <div className="flex w-fit items-center">
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
        className={cn(
          luckiest_guy.className,
          "text-xl tracking-wider text-gray-400/80",
        )}
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
        <IoIosArrowForward className="-ml-5 text-3xl text-gray-400/80" />
        <IoIosArrowForward className="-ml-5 text-3xl text-gray-400" />
      </motion.div>
    </div>
  );
}

export default SwipeIndicator;
