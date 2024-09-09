import React from "react";
import { cn } from "../../lib/utils";

const Primary = ({ className, children }) => (
  <button
    className={cn(
      "ring-offset-background focus-visible:ring-ring text-primary-foreground hover:bg-primary/90 relative inline-flex h-8 items-center justify-center whitespace-nowrap rounded-full bg-[#FF7D10] px-4 py-2 text-sm font-medium text-[#d0dff4] drop-shadow-[-1px_2px_0px_rgba(232,105,14,1)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
  >
    <div className="absolute left-3 top-0 h-2 w-10 rounded-full bg-[#FF8E2B]" />
    {children}
    <div className="absolute bottom-0 right-3 h-2 w-10 rounded-full bg-[#FF8E2B]" />
  </button>
);

const Secondary = ({ className, children }) => (
  <button
    className={cn(
      "ring-offset-background focus-visible:ring-ring text-primary-foreground hover:bg-primary/90 relative inline-flex h-8 items-center justify-center whitespace-nowrap rounded-full bg-[#606060] px-4 py-2 text-sm font-medium text-[#ffffff] drop-shadow-[-1px_2px_0px_rgba(83,83,83,1)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
  >
    <div className="absolute left-3 top-0 h-2 w-10 rounded-full bg-[#707070]" />
    {children}
    <div className="absolute bottom-0 right-3 h-2 w-10 rounded-full bg-[#707070]" />
  </button>
);

export const Button = {
  Primary,
  Secondary,
};
