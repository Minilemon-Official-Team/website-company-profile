"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { cn } from "../lib/utils";

const NavigationMobile = () => {
  const pathname = usePathname();
  const router = useRouter();
  const cleanPathname = pathname === "/" ? "Home" : pathname.startsWith("/") ? pathname.substring(1) : pathname;
  const capitalizedPathname = cleanPathname.charAt(0).toUpperCase() + cleanPathname.slice(1);

  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "The Story of Us",
      href: "/story",
    },
    {
      name: "Characters",
      href: "/characters",
    },
    {
      name: "Our Product",
      href: "/product",
    },
    {
      name: "Company",
      href: "/company",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  const currentIndex = navigation.findIndex((item) => item.href === pathname);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      router.push(navigation[currentIndex - 1].href);
    }
  };

  const handleNext = () => {
    if (currentIndex < navigation.length - 1) {
      router.push(navigation[currentIndex + 1].href);
    }
  };

  return (
    <div className="fixed px-4 py-2 bottom-5 inset-x-0 md:hidden z-50 justify-center items-center flex">
      <div className="w-fit bg-white flex flex-row items-center justify-center rounded-full px-4 gap-x-2">
        <HiChevronDoubleLeft
          className={cn("h-8 w-8", pathname === "/" ? "text-gray-300" : "text-gray-700 hover:cursor-pointer")}
          onClick={() => router.push("/")}
        />
        <HiChevronLeft
          className={cn("h-8 w-8", pathname === "/" ? "text-gray-300" : "text-gray-700 hover:cursor-pointer")}
          onClick={handlePrevious}
        />
        <p className="font-semibold text-xl">{capitalizedPathname}</p>
        <HiChevronRight
          className={cn("h-8 w-8", pathname === "/contact" ? "text-gray-300" : "text-gray-700 hover:cursor-pointer")}
          onClick={handleNext}
        />
        <HiChevronDoubleRight
          className={cn("h-8 w-8", pathname === "/contact" ? "text-gray-300" : "text-gray-700 hover:cursor-pointer")}
          onClick={() => router.push("/contact")}
        />
      </div>
    </div>
  );
};

export default NavigationMobile;
