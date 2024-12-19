"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

import Contact from "@/components/contact";
import { MinilemonDarkIcon } from "@/components/icons";
import BackgroundImage from "@/public/background/contact.png";
import FollowTitle from "@/public/title/follow.png";
import OfficialTitle from "@/public/title/official.png";
import Image from "next/image";

const ContactPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col">
      {/* Contact */}
      <div className="relative flex min-h-[60vh] items-center bg-[#d3d5f4] bg-cover bg-center py-16">
        <Image
          src={BackgroundImage}
          alt="Background"
          quality={100}
          fill
          sizes="100vw"
          className="absolute inset-0 z-10"
        />
        <div className="container z-20 flex flex-col gap-6 px-12 pb-5 lg:flex-row lg:gap-0 lg:px-0">
          <Contact className="z-20" />
        </div>
      </div>

      {/* Social */}
      <div className="flex min-h-[40vh] items-center bg-[#d2d5f4]">
        <div className="container flex flex-col justify-center gap-6 px-12 py-16 lg:flex-row lg:gap-0 lg:px-0">
          {/* Section Official */}
          <div className="flex flex-col items-center gap-y-8 lg:basis-1/2">
            <div>
              <Image src={OfficialTitle} alt="Official" />
            </div>
            <div className="flex flex-col gap-y-4">
              <Link className="flex flex-row" href={"#"}>
                <MinilemonDarkIcon className="h-6 w-6" />
                <p>minilemonmedia.id</p>
              </Link>
              <Link className="flex flex-row" href={"#"}>
                <MinilemonDarkIcon className="h-6 w-6" />
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
                <span className="flex items-center justify-center rounded-full bg-[#333] p-1 shadow-lg">
                  <FaInstagram className="text-white" />
                </span>
                minilemon.studio
              </Link>
              <Link href={"#"} className="flex flex-row items-center gap-x-4">
                <span className="flex items-center justify-center rounded-full bg-[#333] p-1 shadow-lg">
                  <FaTiktok className="text-white" />
                </span>
                minilemon.studio
              </Link>
              <Link href={"#"} className="flex flex-row items-center gap-x-4">
                <span className="flex items-center justify-center rounded-full bg-[#333] p-1 shadow-lg">
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
