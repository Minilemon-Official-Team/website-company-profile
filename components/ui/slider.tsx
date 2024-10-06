import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Assets } from "./assets";

interface SliderProps {
  children: React.ReactNode;
  value: number;
  className?: string;
  slider?: string;
}

const Slider = ({ children, value, className, slider }: SliderProps) => {
  return (
    <div className="flex basis-1/2 flex-col">
      <p
        className={cn(
          "pl-2 text-start font-semibold uppercase italic",
          className,
        )}
      >
        {children}
      </p>
      <div className={cn(slider, "relative max-w-full rounded-full p-[6px]")}>
        <div
          className={cn(
            slider,
            "relative w-full max-w-full overflow-hidden rounded-full p-[6px]",
          )}
        >
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
          <Assets.IconSlider className="absolute -left-4 h-4 w-6 lg:h-6 lg:w-6" />
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
