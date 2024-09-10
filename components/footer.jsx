"use client";

import Image from "next/image";
import React from "react";

import LogoBrand from "../public/logo.png";
import DividerBlack from "./ui/divider-black";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currrentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <>
      <DividerBlack
        className={cn(
          pathname === "/" ? "bg-[#f4d8d4] lg:bg-[#1b1b1b]" : "",
          pathname === "/about" ? "bg-[#f4d8d4]" : "",
          pathname === "/story" ? "bg-[#78602f]" : "",
          pathname === "/characters" ? "bg-[#eaf9e8]" : "",
          pathname === "/product" ? "bg-[#f4efd2]" : "",
          pathname === "/company" ? "bg-[#fbe5db]" : "",
          pathname === "/contact" ? "bg-[#d2d5f4]" : "",
        )}
      />
      <div className="flex flex-col items-center justify-center bg-[#272727] py-4">
        <Image src={LogoBrand} alt="logo" width={100} height={100} />
        <p className="text-xs text-[#868686]">
          Copyright 2020 - {currrentYear} | Minilemon | All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
