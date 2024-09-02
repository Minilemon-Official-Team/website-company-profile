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
      icon: <GiDoorway className="h-6 w-6 mr-1 md:hidden lg:block" />,
      link: "/about",
    },
    {
      name: "The Story of",
      icon: <FaBookOpen className="h-6 w-6 mr-1 md:hidden lg:block" />,
      link: "/story",
    },
    {
      name: "Home",
      image: LogoBrand,
      link: "/",
    },
    {
      name: "Characters",
      icon: <FaLemon className="h-6 w-6 mr-1 md:hidden lg:block" />,
      link: "/characters",
    },
    {
      name: "Our Product",
      icon: <BsBox className="h-6 w-6 mr-1 md:hidden lg:block" />,
      link: "/product",
    },
    {
      name: "Company",
      icon: <FaFlag className="h-6 w-6 mr-1 md:hidden lg:block" />,
      link: "/company",
    },
    {
      name: "Contact Us",
      icon: <BsCursorFill className="h-6 w-6 mr-1 md:hidden lg:block" />,
      link: "/contact",
    },
  ];

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="md:flex justify-center items-center w-full top-0 stripe-bg hidden sticky z-50">
      <div className={cn("")}>
        <ul className="flex flex-row gap-x-3 lg:gap-x-6 items-center font-semibold my-4">
          <li
            className={cn("flex flex-row items-center cursor-pointer hover:text-[#ffe15a]", pathname === "/about" ? "text-[#ffd201]" : "")}
            onClick={() => router.push("/about")}>
            <GiDoorway className="h-6 w-6 mr-1 md:hidden lg:block" />
            About Us
          </li>
          <li
            className={cn("flex flex-row items-center cursor-pointer hover:text-[#ffe15a]", pathname === "/story" ? "text-[#ffd201]" : "")}
            onClick={() => router.push("/story")}>
            <FaBookOpen className="h-6 w-6 mr-1 md:hidden lg:block" />
            The Story of
          </li>
          <li
            className={cn("flex flex-row items-center cursor-pointer hover:text-[#ffe15a]", pathname === "/characters" ? "text-[#ffd201]" : "")}
            onClick={() => router.push("/characters")}>
            <FaLemon className="h-6 w-6 mr-1 md:hidden lg:block" />
            Characters
          </li>
          <li className="relative h-12 w-32 lg:h-14 lg:w-44 px-4 cursor-pointer" onClick={() => router.push("/")}>
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
            className={cn("flex flex-row items-center cursor-pointer hover:text-[#ffe15a]", pathname === "/product" ? "text-[#ffd201]" : "")}
            onClick={() => router.push("/product")}>
            <BsBox className="h-6 w-6 mr-1 md:hidden lg:block" />
            Our Product
          </li>
          <li
            className={cn("flex flex-row items-center cursor-pointer hover:text-[#ffe15a]", pathname === "/company" ? "text-[#ffd201]" : "")}
            onClick={() => router.push("/company")}>
            <FaFlag className="h-6 w-6 mr-1 md:hidden lg:block" />
            Company
          </li>
          <li
            className={cn("flex flex-row items-center cursor-pointer hover:text-[#ffe15a]", pathname === "/contact" ? "text-[#ffd201]" : "")}
            onClick={() => router.push("/contact")}>
            <BsCursorFill className="h-6 w-6 mr-1 md:hidden lg:block" />
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
