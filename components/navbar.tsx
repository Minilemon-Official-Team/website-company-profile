"use client";

import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import { cn } from "../lib/utils";
import LogoBrand from "../public/logo.png";
import {
  ArrowIcon,
  BookIcon,
  CubeIcon,
  FlagIcon,
  GateIcon,
  LemonIcon,
} from "./icons";

const Navbar = () => {
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="sticky top-0 z-50 hidden w-full items-center justify-center bg-gradient-to-b from-[#303030] to-[#252525] lg:flex">
      <div className="flex max-w-screen-lg flex-row items-center py-5 font-semibold">
        <ul className="flex flex-row gap-6">
          <li
            className={cn(
              "flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffe15a]",
              pathname === "/about" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/about")}
          >
            <GateIcon
              className="h-5 w-5"
              fill={pathname === "/about" ? "#ffd201" : ""}
            />
            <span className="mt-1">About Us</span>
          </li>
          <li
            className={cn(
              "flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffe15a]",
              pathname === "/story" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/story")}
          >
            <BookIcon className="h-5 w-5" fill="#868686" />
            <span className="mt-1">The Story of</span>
          </li>
          <li
            className={cn(
              "flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffe15a]",
              pathname === "/characters" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/characters")}
          >
            <LemonIcon className="h-5 w-5" fill="#868686" />
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
              "flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffe15a]",
              pathname === "/product" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/product")}
          >
            <CubeIcon className="h-5 w-5" fill="#868686" />
            <span className="mt-1">Our Product</span>
          </li>
          <li
            className={cn(
              "flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffe15a]",
              pathname === "/company" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/company")}
          >
            <FlagIcon className="h-5 w-5" fill="#868686" />
            <span className="mt-1">Company</span>
          </li>
          <li
            className={cn(
              "flex cursor-pointer flex-row items-center gap-1 hover:text-[#ffe15a]",
              pathname === "/contact" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/contact")}
          >
            <ArrowIcon className="h-5 w-5" fill="#868686" />
            <span className="mt-1">Contact Us</span>
          </li>
        </ul>
        {/* <ul className="my-4 flex flex-row items-center gap-6 pt-2 text-[16px] font-semibold tracking-tighter">
          <li
            className={cn(
              "flex cursor-pointer flex-row items-center hover:text-[#ffe15a]",
              pathname === "/about" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/about")}
          >
            <GiDoorway className="mr-1 h-5 w-5 md:hidden lg:block" />
            About Us
          </li>
          <li
            className={cn(
              "flex cursor-pointer flex-row items-center hover:text-[#ffe15a]",
              pathname === "/story" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/story")}
          >
            <FaBookOpen className="mr-1 h-5 w-5 md:hidden lg:block" />
            The Story of
          </li>
          <li
            className={cn(
              "flex cursor-pointer flex-row items-center hover:text-[#ffe15a]",
              pathname === "/characters" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/characters")}
          >
            <Image
              src={LemonIcon}
              alt="lemon-icon"
              className="mr-1 h-6 w-6 md:hidden lg:block"
            />
            Characters
          </li>
          <li
            className="relative h-12 w-32 cursor-pointer px-4 lg:h-14 lg:w-44"
            onClick={() => router.push("/")}
          >
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
          </li>
          <li
            className={cn(
              "flex cursor-pointer flex-row items-center hover:text-[#ffe15a]",
              pathname === "/product" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/product")}
          >
            <BsBox className="mr-1 h-5 w-5 md:hidden lg:block" />
            Our Product
          </li>
          <li
            className={cn(
              "flex cursor-pointer flex-row items-center hover:text-[#ffe15a]",
              pathname === "/company" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/company")}
          >
            <FaFlag className="mr-1 h-5 w-5 md:hidden lg:block" />
            Company
          </li>
          <li
            className={cn(
              "flex cursor-pointer flex-row items-center hover:text-[#ffe15a]",
              pathname === "/contact" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/contact")}
          >
            <BsCursorFill className="mr-1 h-5 w-5 md:hidden lg:block" />
            Contact Us
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Navbar;
