import React from "react";
import { cn } from "../../lib/utils";

const Primary = ({ className, children }) => (
  <button
    className={cn(
      "relative inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#FF7D10] text-primary-foreground hover:bg-primary/90 h-8 rounded-full px-4 py-2 text-[#d0dff4] drop-shadow-[-1px_2px_0px_rgba(232,105,14,1)]",
      className
    )}>
    <div className="absolute h-2 w-10 bg-[#FF8E2B] top-0 left-3 rounded-full" />
    {children}
    <div className="absolute h-2 w-10 bg-[#FF8E2B] bottom-0 right-3 rounded-full" />
  </button>
);

const Secondary = ({ className, children }) => (
  <button
    className={cn(
      "relative inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#606060] text-primary-foreground hover:bg-primary/90 h-8 rounded-full px-4 py-2 text-[#ffffff] drop-shadow-[-1px_2px_0px_rgba(83,83,83,1)]",
      className
    )}>
    <div className="absolute h-2 w-10 bg-[#707070] top-0 left-3 rounded-full" />
    {children}
    <div className="absolute h-2 w-10 bg-[#707070] bottom-0 right-3 rounded-full" />
  </button>
);

export const Button = {
  Primary,
  Secondary,
};
