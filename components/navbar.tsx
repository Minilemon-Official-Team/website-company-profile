"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

import { berlin_sans_fb } from "@/app/fonts";
import {
  ArrowIcon,
  BookIcon,
  CubeIcon,
  FlagIcon,
  GateIcon,
  MinilemonGreyIcon,
  MinilemonYellowIcon,
} from "@/components/icons";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import useScrollY from "@/hooks/useScrollY";
import { cn } from "@/lib/utils";
import LogoBrand from "@/public/logo.png";
import DividerGray from "./ui/divider/divider-gray";

const Navbar = () => {
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const isActive = pathname === "/characters";
  const screenWidth = useScreenWidth();
  const scrollY = useScrollY();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {screenWidth < 1024 ? (
        <>
          <div
            className={cn(
              berlin_sans_fb.className,
              "z-50 flex h-[70px] flex-col justify-between bg-gradient-to-b from-[#111] to-[#353535] text-center text-[#eeca0e] md:h-[100px]",
              scrollY > 500 ? "fixed bottom-0 left-0 w-full" : "sticky top-0",
            )}
          >
            <div className="relative flex h-full flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-5 text-sm md:text-3xl">
                {scrollY > 500 ? (
                  ""
                ) : (
                  <h1 className="h-full text-center">
                    Selamat datang di dunia
                  </h1>
                )}

                <Image
                  src={LogoBrand}
                  alt="Logo Brand"
                  className={cn(
                    "absolute right-3 z-20 w-[100px] md:-bottom-10 md:w-[200px]",
                    scrollY > 500 ? "-top-4" : "-bottom-4",
                  )}
                />
              </div>
              <DividerGray />
            </div>
          </div>
        </>
      ) : (
        <div className="sticky top-0 z-50 flex w-full items-center justify-center bg-gradient-to-b from-[#303030] to-[#252525]">
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
                    pathname === "/story"
                      ? "text-[#ffd201]"
                      : "text-[#8686868]",
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
                    pathname === "/product"
                      ? "text-[#ffd201]"
                      : "text-[#868686]",
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
                    pathname === "/company"
                      ? "text-[#ffd201]"
                      : "text-[#868686]",
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
                    pathname === "/contact"
                      ? "text-[#ffd201]"
                      : "text-[#868686]",
                    "h-5 w-5 group-hover:text-[#ffd201]",
                  )}
                />
                <span className="mt-1">Contact Us</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
