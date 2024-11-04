"use client";

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
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import DividerGray from "./ui/divider/divider-gray";

export default function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const screenWidth = useScreenWidth();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{screenWidth < 1024 ? <MobileNavbar /> : <DesktopNavbar />}</>;
}

const MobileNavbar = () => {
  const scrollY = useScrollY();

  return (
    <>
      <div
        className={cn(
          berlin_sans_fb.className,
          "fixed bottom-0 z-50 flex h-[60px] w-full flex-col justify-between bg-gradient-to-b from-[#111] to-[#353535] text-center text-[#eeca0e] md:h-[80px]",
          scrollY > 50
            ? "translate-y-0 duration-300"
            : "translate-y-60 duration-300",
        )}
      >
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-5 text-sm md:text-3xl">
            <Image
              src={LogoBrand}
              alt="Logo Brand"
              className="400:w-[100px] 450:w-[120px] 640:w-[150px] absolute -top-6 right-3 z-20 w-[100px] md:-top-10 md:w-[200px]"
            />
          </div>
          <DividerGray />
        </div>
      </div>
      <div
        className={cn(
          berlin_sans_fb.className,
          "sticky top-0 z-50 flex h-[60px] flex-col justify-between bg-gradient-to-b from-[#111] to-[#353535] text-center text-[#eeca0e] md:h-[80px]",
          scrollY > 50
            ? "-translate-y-60 duration-300"
            : "translate-y-0 duration-300",
        )}
      >
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-5">
            <h1 className="mr-[65px] h-full pt-[10px] text-center text-[18px] leading-10 tracking-wide">
              Selamat datang di dunia
            </h1>
            <Image
              src={LogoBrand}
              alt="Logo Brand"
              className="400:w-[100px] 450:w-[120px] 640:w-[150px] absolute -bottom-5 right-3 z-20 w-[110px] md:-bottom-10"
            />
          </div>
          <DividerGray />
        </div>
      </div>
    </>
  );
};

const DesktopNavbar = () => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const isActive = pathname === "/characters";

  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-center bg-gradient-to-b from-[#303030] to-[#252525]">
      <div className="flex max-w-screen-lg flex-row items-center py-5 text-[15px] font-semibold">
        <ul className="flex flex-row gap-6">
          <li>
            <Link
              className={cn(
                "group flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffd201]",
                pathname === "/about" ? "text-[#ffd201]" : "text-[#868686]",
              )}
              href="/about"
            >
              <GateIcon
                className={cn(
                  pathname === "/about" ? "text-[#ffd201]" : "text-[#868686]",
                  "h-5 w-5 group-hover:text-[#ffd201]",
                )}
              />
              <span className="mt-1">About Us</span>
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                "group flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffd201]",
                pathname === "/story" ? "text-[#ffd201]" : "text-[#868686]",
              )}
              href="/story"
            >
              <BookIcon
                className={cn(
                  pathname === "/story" ? "text-[#ffd201]" : "text-[#8686868]",
                  "h-5 w-5 group-hover:text-[#ffd201]",
                )}
              />
              <span className="mt-1">The Story of</span>
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                "group flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffd201]",
                pathname === "/characters"
                  ? "text-[#ffd201]"
                  : "text-[#868686]",
              )}
              href="/characters"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isActive || isHovered ? (
                <MinilemonYellowIcon className="h-5 w-5" />
              ) : (
                <MinilemonGreyIcon className="h-5 w-5" />
              )}
              <span className="mt-1">Characters</span>
            </Link>
          </li>
        </ul>
        <div className="relative flex h-14 w-44 cursor-pointer flex-row">
          <Link href="/">
            <Image
              alt="logo"
              src={LogoBrand}
              className=""
              fill
              sizes="100vw"
              style={{
                objectFit: "contain",
              }}
            />
          </Link>
        </div>
        <ul className="flex flex-row gap-6">
          <li>
            <Link
              className={cn(
                "group flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffd201]",
                pathname === "/product" ? "text-[#ffd201]" : "text-[#868686]",
              )}
              href="/product"
            >
              <CubeIcon
                className={cn(
                  pathname === "/product" ? "text-[#ffd201]" : "text-[#868686]",
                  "h-5 w-5 group-hover:text-[#ffd201]",
                )}
              />
              <span className="mt-1">Our Product</span>
            </Link>
          </li>
          <li>
            <Link
              href="/company"
              className={cn(
                "group flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffd201]",
                pathname === "/company" ? "text-[#ffd201]" : "text-[#868686]",
              )}
            >
              <FlagIcon
                className={cn(
                  pathname === "/company" ? "text-[#ffd201]" : "text-[#868686]",
                  "h-5 w-5 group-hover:text-[#ffd201]",
                )}
              />
              <span className="mt-1">Company</span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={cn(
                "group flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffd201]",
                pathname === "/contact" ? "text-[#ffd201]" : "text-[#868686]",
              )}
            >
              <ArrowIcon
                className={cn(
                  pathname === "/contact" ? "text-[#ffd201]" : "text-[#868686]",
                  "h-5 w-5 group-hover:text-[#ffd201]",
                )}
              />
              <span className="mt-1">Contact Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
