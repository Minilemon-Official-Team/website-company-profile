"use client";

import { cn } from "../lib/utils";
import React from "react";
import LogoBrand from "../public/logo.png";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { GiDoorway } from "react-icons/gi";
import { FaBookOpen, FaFlag } from "react-icons/fa";
import { FaLemon } from "react-icons/fa6";
import { BsBox, BsCursorFill } from "react-icons/bs";

const Navbar = () => {
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    {
      name: "About Us",
      icon: <GiDoorway className="mr-1 h-6 w-6 md:hidden lg:block" />,
      link: "/about",
    },
    {
      name: "The Story of",
      icon: <FaBookOpen className="mr-1 h-6 w-6 md:hidden lg:block" />,
      link: "/story",
    },
    {
      name: "Home",
      image: LogoBrand,
      link: "/",
    },
    {
      name: "Characters",
      icon: <FaLemon className="mr-1 h-6 w-6 md:hidden lg:block" />,
      link: "/characters",
    },
    {
      name: "Our Product",
      icon: <BsBox className="mr-1 h-6 w-6 md:hidden lg:block" />,
      link: "/product",
    },
    {
      name: "Company",
      icon: <FaFlag className="mr-1 h-6 w-6 md:hidden lg:block" />,
      link: "/company",
    },
    {
      name: "Contact Us",
      icon: <BsCursorFill className="mr-1 h-6 w-6 md:hidden lg:block" />,
      link: "/contact",
    },
  ];

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="stripe-bg sticky top-0 z-50 hidden w-full items-center justify-center lg:flex">
      <div className={cn("")}>
        <ul className="my-4 flex flex-row items-center gap-x-3 font-semibold lg:gap-x-6">
          <li
            className={cn(
              "flex cursor-pointer flex-row items-center hover:text-[#ffe15a]",
              pathname === "/about" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/about")}
          >
            <GiDoorway className="mr-1 h-6 w-6 md:hidden lg:block" />
            About Us
          </li>
          <li
            className={cn(
              "flex cursor-pointer flex-row items-center hover:text-[#ffe15a]",
              pathname === "/story" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/story")}
          >
            <FaBookOpen className="mr-1 h-6 w-6 md:hidden lg:block" />
            The Story of
          </li>
          <li
            className={cn(
              "flex cursor-pointer flex-row items-center hover:text-[#ffe15a]",
              pathname === "/characters" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/characters")}
          >
            <FaLemon className="mr-1 h-6 w-6 md:hidden lg:block" />
            Characters
          </li>
          <li
            className="relative h-12 w-32 cursor-pointer px-4 lg:h-14 lg:w-44"
            onClick={() => router.push("/")}
          >
            <Image
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
            <BsBox className="mr-1 h-6 w-6 md:hidden lg:block" />
            Our Product
          </li>
          <li
            className={cn(
              "flex cursor-pointer flex-row items-center hover:text-[#ffe15a]",
              pathname === "/company" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/company")}
          >
            <FaFlag className="mr-1 h-6 w-6 md:hidden lg:block" />
            Company
          </li>
          <li
            className={cn(
              "flex cursor-pointer flex-row items-center hover:text-[#ffe15a]",
              pathname === "/contact" ? "text-[#ffd201]" : "",
            )}
            onClick={() => router.push("/contact")}
          >
            <BsCursorFill className="mr-1 h-6 w-6 md:hidden lg:block" />
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
