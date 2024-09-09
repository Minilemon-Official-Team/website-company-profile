import React from "react";
import { cn } from "../../lib/utils";
import { Assets } from "./assets";

const Slider = ({ children, value }) => {
  return (
    <div className="flex basis-1/2 flex-col">
      <p className={cn("pl-4 text-start font-semibold uppercase italic")}>
        {children}
      </p>
      <div className="relative max-w-full rounded-full bg-[#ededed] p-2">
        <div className="bg-muted relative w-full max-w-full overflow-hidden rounded-full p-2">
          <div
            className="absolute inset-y-0 left-0 h-full bg-gradient-to-b from-[#fef085] to-[#ffa914]"
            style={{ width: `${value}%` }}
          />
        </div>
        <div className="absolute top-0" style={{ left: `${value}%` }}>
          <Assets.IconSlider className="absolute -left-4 h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
