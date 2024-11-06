"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

import Contact from "@/components/contact";
import { MinilemonDarkIcon } from "@/components/icons";
import FollowTitle from "@/public/title/follow.png";
import OfficialTitle from "@/public/title/official.png";
import Image from "next/image";

const ContactSection = () => {
  return (
    <div className="flex flex-col">
      {/* Contact */}
      <div className="relative inset-0 flex min-h-[60vh] justify-center bg-[#1b1b1b] bg-cover bg-center py-5">
        <div className="max-w-screen-640 z-20 flex w-full flex-col items-center gap-6 px-6 lg:flex-row lg:gap-0 lg:px-0">
          <Contact className="z-20" titleWidth={"w-[210px] 400:w-[230px]"} />
        </div>
      </div>

      {/* Social */}
      <div className="flex min-h-[40vh] items-center bg-[#d2d5f4] pb-10">
        <div className="container flex flex-col justify-center gap-6 px-12 py-16 lg:flex-row lg:gap-0 lg:px-0">
          {/* Section Official */}
          <div className="flex flex-col items-center gap-y-8 lg:basis-1/2">
            <div>
              <Image
                src={OfficialTitle}
                alt="Official"
                className="400:w-[200px] w-[180px]"
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <Link className="flex flex-row" href={"#"}>
                <MinilemonDarkIcon className="h-6 w-6" />
                <p className="text-[16px]">minilemonmedia.id</p>
              </Link>
              <Link className="flex flex-row" href={"#"}>
                <MinilemonDarkIcon className="h-6 w-6" />
                <p className="text-[16px]">store.minilemon.id</p>
              </Link>
              <button className="flex flex-row"></button>
            </div>
          </div>
          {/* Section Social */}
          <div className="flex flex-col items-center justify-center gap-y-8 lg:basis-1/2">
            <div className="">
              <Image
                src={FollowTitle}
                alt="Follow"
                className="400:w-[200px] w-[180px]"
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <Link
                href={"#"}
                className="flex flex-row items-center gap-x-4 text-[16px]"
              >
                <span className="flex items-center justify-center rounded-full bg-[#333] p-1 shadow-lg">
                  <FaInstagram className="text-white" />
                </span>
                minilemon.studio
              </Link>
              <Link
                href={"#"}
                className="flex flex-row items-center gap-x-4 text-[16px]"
              >
                <span className="flex items-center justify-center rounded-full bg-[#333] p-1 shadow-lg">
                  <FaTiktok className="text-white" />
                </span>
                minilemon.studio
              </Link>
              <Link
                href={"#"}
                className="flex flex-row items-center gap-x-4 text-[16px]"
              >
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

export default ContactSection;
