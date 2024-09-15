"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaTiktok, FaLemon } from "react-icons/fa6";

import { cn } from "../../lib/utils";
import { luckiest_guy } from "../fonts";
import { Button } from "../../components/ui/button";
import Contact from "@/components/contact";
import OfficialTitle from "@/public/title-picture/official-1.png";
import Image from "next/image";
import FollowTitle from "@/public/title-picture/follow-1.png";
import LemonIcon from "@/public/icon/lemon-icon.png";

const ContactPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col">
      {/* Contact */}
      <div className="h-[45vh] bg-[#1b1b1b]">
        <div className="container flex flex-col gap-6 px-12 py-16 lg:flex-row lg:gap-0 lg:px-0">
          <Contact />
        </div>
      </div>

      {/* Social */}
      <div className="flex h-[40vh] items-center bg-[#d2d5f4]">
        <div className="container flex flex-col justify-center gap-6 px-12 py-16 lg:flex-row lg:gap-0 lg:px-0">
          {/* Section Official */}
          <div className="flex flex-col items-center gap-y-8 lg:basis-1/2">
            <div>
              <Image src={OfficialTitle} alt="Official" />
            </div>
            <div className="flex flex-col gap-y-4">
              <Link className="flex flex-row" href={"#"}>
                <div>
                  <Image src={LemonIcon} alt="Lemon" className="" />
                </div>
                <p>minilemonmedia.id</p>
              </Link>
              <Link className="flex flex-row" href={"#"}>
                <Image src={LemonIcon} alt="Lemon" className="" />
                <p>store.minilemon.id</p>
              </Link>
              <button className="flex flex-row"></button>
            </div>
          </div>
          {/* Section Social */}
          <div className="flex flex-col items-center justify-center gap-y-8 lg:basis-1/2">
            <div className="">
              <Image src={FollowTitle} alt="Follow" />
            </div>
            <div className="flex flex-col gap-y-4">
              <Link href={"#"} className="flex flex-row items-center gap-x-4">
                <span className="flex items-center justify-center rounded-full bg-black p-1 shadow-lg">
                  <FaInstagram className="text-white" />
                </span>
                minilemon.studio
              </Link>
              <Link href={"#"} className="flex flex-row items-center gap-x-4">
                <span className="flex items-center justify-center rounded-full bg-black p-1 shadow-lg">
                  <FaTiktok className="text-white" />
                </span>
                minilemon.studio
              </Link>
              <Link href={"#"} className="flex flex-row items-center gap-x-4">
                <span className="flex items-center justify-center rounded-full bg-black p-1 shadow-lg">
                  <FaYoutube className="text-white" />
                </span>
                minilemonindonesia
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
