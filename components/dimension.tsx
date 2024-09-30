"use client";

import { useEffect, useState } from "react";

import React from "react";

const Dimension = () => {
  const [dimension, setDimension] = useState<{ width: number; height: number }>(
    {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  );

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (process.env.NODE_ENV === "production") return null;

  return (
    <div>
      <div className="fixed bottom-1 left-1/2 z-50 flex size-6 w-fit items-center justify-center rounded-xl bg-gray-800 p-3 font-mono text-xs text-white">
        {dimension.width}
      </div>
      <div className="fixed bottom-1/2 right-1 z-50 flex h-2 w-fit rotate-90 items-center justify-center rounded-xl bg-gray-800 p-3 font-mono text-xs text-white">
        {dimension.height}
      </div>
    </div>
  );
};

export default Dimension;
