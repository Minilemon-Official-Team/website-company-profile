import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Assets } from "./assets";

const Slider = ({ children, value }) => {
  return (
    <div className="flex basis-1/2 flex-col">
      <p className={cn("pl-4 text-start font-semibold uppercase italic")}>
        {children}
      </p>
      <div className="relative max-w-full rounded-full bg-[#ededed] p-1 lg:p-2">
        <div className="bg-muted relative w-full max-w-full overflow-hidden rounded-full p-1 lg:p-2">
          <motion.div
            className="absolute inset-y-0 left-0 h-full bg-gradient-to-b from-[#fef085] to-[#ffa914]"
            initial={{ width: "0%" }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 5, ease: "easeOut" }}
          />
        </div>
        <motion.div
          className="absolute top-0"
          initial={{ left: "0%" }}
          animate={{ left: `${value}%` }}
          transition={{ duration: 5, ease: "easeOut" }}
        >
          <Assets.IconSlider className="absolute -left-4 h-4 w-6 lg:h-8 lg:w-8" />
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
