"use client";

import React from "react";
import { FaPlay } from "react-icons/fa6";

const NavigationMobile = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center px-4 lg:hidden">
      <div className="flex w-fit flex-row items-center justify-center gap-x-6 rounded-t-3xl bg-black px-8 py-2">
        <FaPlay className="h-4 w-4 scale-x-[-1] text-yellow-500" />
        <p className="text-xl font-semibold text-yellow-500">Home</p>
        <FaPlay className="h-4 w-4 text-yellow-500" />
      </div>
    </div>
  );
};

export default NavigationMobile;
