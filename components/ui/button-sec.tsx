import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Primary = ({ className, children, ...props }: ButtonProps) => (
  <button
    type="button"
    className={cn(
      "group relative ml-2 inline-flex h-8 w-fit scale-125 items-center justify-center whitespace-nowrap rounded-full bg-[#606060] px-4 py-2 text-sm font-bold uppercase tracking-widest text-white/80 shadow-md ring-offset-background drop-shadow-[-1px_2px_0px_rgba(83,83,83,1)] hover:bg-[#FF7D10] hover:drop-shadow-[-1px_2px_0px_rgba(233,105,14,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <div className="absolute left-3.5 top-0 h-[0.4rem] w-12 rounded-b-full bg-[#707070] group-hover:bg-[#FF8E2B]" />
    {children}
    <div className="absolute bottom-0 right-3.5 h-[0.4rem] w-12 rounded-t-full bg-[#707070] group-hover:bg-[#FF8E2B]" />
  </button>
);

const Secondary = ({ className, children, ...props }: ButtonProps) => (
  <button
    className={cn(
      "relative ml-2 inline-flex h-8 items-center justify-center whitespace-nowrap rounded-full bg-[#606060] px-4 py-2 text-sm font-medium text-[#ffffff] text-primary-foreground ring-offset-background drop-shadow-[-1px_2px_0px_rgba(83,83,83,1)] transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
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
