"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import LogoBrand from "@/public/logo.png";
import {
  ArrowIcon,
  BookIcon,
  CubeIcon,
  FlagIcon,
  GateIcon,
  MinilemonGreyIcon,
  MinilemonYellowIcon,
} from "./icons";

const Navbar = () => {
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const isActive = pathname === "/characters";

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="sticky top-0 z-50 hidden w-full items-center justify-center bg-gradient-to-b from-[#303030] to-[#252525] lg:flex">
      <div className="flex max-w-screen-lg flex-row items-center py-5 text-[15px] font-semibold">
        <ul className="flex flex-row gap-6">
          <li
            className={cn(
              "group flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffd201]",
              pathname === "/about" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/about")}
          >
            <GateIcon
              className={cn(
                pathname === "/about" ? "text-[#ffd201]" : "text-[#868686]",
                "h-5 w-5 group-hover:text-[#ffd201]",
              )}
            />
            <span className="mt-1">About Us</span>
          </li>
          <li
            className={cn(
              "group flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffd201]",
              pathname === "/story" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/story")}
          >
            <BookIcon
              className={cn(
                pathname === "/story" ? "text-[#ffd201]" : "text-[#8686868]",
                "h-5 w-5 group-hover:text-[#ffd201]",
              )}
            />
            <span className="mt-1">The Story of</span>
          </li>
          <li
            className={cn(
              "group flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffd201]",
              pathname === "/characters" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/characters")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isActive || isHovered ? (
              <MinilemonYellowIcon className="h-5 w-5" />
            ) : (
              <MinilemonGreyIcon className="h-5 w-5" />
            )}
            <span className="mt-1">Characters</span>
          </li>
        </ul>
        <div className="relative flex h-14 w-44 cursor-pointer flex-row">
          <Image
            alt="logo"
            src={LogoBrand}
            className=""
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
            }}
            onClick={() => router.push("/")}
          />
        </div>
        <ul className="flex flex-row gap-6">
          <li
            className={cn(
              "group flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffd201]",
              pathname === "/product" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/product")}
          >
            <CubeIcon
              className={cn(
                pathname === "/product" ? "text-[#ffd201]" : "text-[#868686]",
                "h-5 w-5 group-hover:text-[#ffd201]",
              )}
            />
            <span className="mt-1">Our Product</span>
          </li>
          <li
            className={cn(
              "group flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffd201]",
              pathname === "/company" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/company")}
          >
            <FlagIcon
              className={cn(
                pathname === "/company" ? "text-[#ffd201]" : "text-[#868686]",
                "h-5 w-5 group-hover:text-[#ffd201]",
              )}
            />
            <span className="mt-1">Company</span>
          </li>
          <li
            className={cn(
              "group flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffd201]",
              pathname === "/contact" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/contact")}
          >
            <ArrowIcon
              className={cn(
                pathname === "/contact" ? "text-[#ffd201]" : "text-[#868686]",
                "h-5 w-5 group-hover:text-[#ffd201]",
              )}
            />
            <span className="mt-1">Contact Us</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
