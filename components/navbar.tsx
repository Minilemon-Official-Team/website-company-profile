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
import useScrollPercentage from "@/hooks/useScrollPercentage";
import { cn } from "@/lib/utils";
import LogoBrand from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import DividerMobileFooter from "./ui/divider/divider-mobile-footer";
import DividerMobileHeader from "./ui/divider/divider-mobile-header";

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
  const [isHeaderActive, setIsHeaderActive] = useState(true);
  const [isFooterActive, setIsFooterActive] = useState(false);
  const { scrollPercent } = useScrollPercentage();

  useEffect(() => {
    if (scrollPercent > 99) {
      setIsHeaderActive(false);
      setIsFooterActive(true);
    }
    if (scrollPercent < 2) {
      setIsHeaderActive(true);
      setIsFooterActive(false);
    }
  }, [scrollPercent]);

  return (
    <>
      {/* HEADER */}
      <div
        className={cn(
          berlin_sans_fb.className,
          "sticky top-0 z-50 flex h-[60px] flex-col justify-between bg-gradient-to-b from-[#111] to-[#353535] text-center text-[#eeca0e] md:h-[80px]",
          !isHeaderActive
            ? "-translate-y-60 duration-300"
            : "translate-y-0 duration-300",
        )}
      >
        <div className="relative flex flex-col justify-center items-center h-full">
          <div className="flex justify-center items-center gap-5">
            <h1 className="mr-[65px] pt-[10px] h-full text-[18px] text-center leading-10 tracking-wide">
              Selamat datang di dunia
            </h1>
            <Image
              src={LogoBrand}
              alt="Logo Brand"
              className="right-3 -bottom-7 md:-bottom-10 z-20 absolute w-[100px] 400:w-[120px] 450:w-[140px] 640:w-[160px]"
            />
          </div>
          <DividerMobileHeader />
        </div>
      </div>

      {/* FOOTER */}
      <div
        className={cn(
          berlin_sans_fb.className,
          "fixed bottom-0 z-50 flex h-[60px] w-full flex-col justify-between bg-gradient-to-b from-[#111] to-[#353535] text-center text-[#eeca0e] md:h-[80px]",
          isFooterActive
            ? "translate-y-0 duration-300"
            : "translate-y-60 duration-300",
        )}
      >
        <div className="relative flex flex-col justify-center items-center h-full">
          <div className="flex justify-center items-center gap-5 text-sm md:text-3xl">
            <Image
              src={LogoBrand}
              alt="Logo Brand"
              className="-top-10 right-3 z-20 absolute w-[90px] 400:w-[100px] 450:w-[120px] 640:w-[150px] md:w-[200px]"
            />
          </div>
          <DividerMobileFooter />
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
    <div className="top-0 z-50 sticky flex justify-center items-center bg-gradient-to-b from-[#303030] to-[#252525] w-full">
      <div className="flex flex-row items-center py-5 max-w-screen-lg font-semibold text-[15px]">
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
                <MinilemonYellowIcon className="w-5 h-5" />
              ) : (
                <MinilemonGreyIcon className="w-5 h-5" />
              )}
              <span className="mt-1">Characters</span>
            </Link>
          </li>
        </ul>
        <div className="relative flex flex-row w-44 h-14 cursor-pointer">
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
