"use client";

import Image from "next/image";
import React from "react";

import LogoBrand from "../public/logo.png";
import DividerBlack from "./ui/divider/divider-black";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currrentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <div className="relative hidden lg:block">
      <DividerBlack
        className={cn(
          "absolute top-0",
          pathname === "/" ? "bg-[#f4d8d4] lg:bg-[#1b1b1b]" : "",
          pathname === "/about" ? "bg-[#f4d8d4]" : "",
          pathname === "/story" ? "bg-[#d4def4]" : "",
          pathname === "/characters" ? "bg-[#2e2e2e]" : "",
          pathname === "/product" ? "bg-[#f4efd2]" : "",
          pathname === "/company" ? "bg-[#fdf4eb]" : "",
          pathname === "/contact" ? "bg-[#d2d5f4]" : "",
        )}
      />
      <div className="flex flex-col items-center justify-center gap-3 bg-[#272727] py-3 pt-8">
        <Image src={LogoBrand} alt="logo" width={80} height={80} />
        <p className="text-xs font-semibold tracking-wider text-[#868686]">
          Copyright 2020 - {currrentYear} | Minilemon | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
