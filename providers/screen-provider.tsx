"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useScreenWidth } from "@/hooks/useScreenWidth";

const ScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const screenWidth = useScreenWidth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Redirect to the home page if the screen width is less than 1024x
    if (screenWidth < 1024 && pathname !== "/") {
      router.push("/");
    }
  }, [pathname, router, screenWidth]);

  return <div>{children}</div>;
};

export default ScreenProvider;
