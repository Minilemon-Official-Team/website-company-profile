"use client";

import { Placeholder } from "placeholder";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { luckiest_guy } from "../app/fonts";
import { Assets } from "./ui/assets";
import Slider from "./ui/slider";
import Image from "next/image";

const Character = ({ id, name1, name2, fullName, description, image, strong, logic, creative, luck }) => {
  const [valStrong, setValStrong] = useState(0);
  const [valCreative, setValCreative] = useState(0);
  const [valLuck, setValLuck] = useState(0);
  const [valLogic, setValLogic] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (valStrong < strong) {
        setValStrong(valStrong + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [valStrong]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (valCreative < creative) {
        setValCreative(valCreative + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [valCreative]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (valLuck < luck) {
        setValLuck(valLuck + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [valLuck]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (valLogic < logic) {
        setValLogic(valLogic + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [valLogic]);

  return (
    <div
      key={id}
      className={cn(
        "flex flex-col justify-center items-center",
        id === 1 ? "bg-[#FBEFEF]" : "",
        id === 2 ? "bg-[#FAF3E1]" : "",
        id === 3 ? "bg-[#E5FAE1]" : "",
        id === 4 ? "bg-[#FAF0FB]" : "",
        id === 5 ? "bg-[#E4FAF8]" : "",
        id === 6 ? "bg-[#F0F4FF]" : "",
        id === 7 ? "bg-[#FEF4EB]" : "",
        id === 8 ? "bg-[#EBF9E8]" : "",
        id === 9 ? "bg-[#FBEFEF]" : "",
        id === 10 ? "bg-[#EAF9E8]" : ""
      )}>
      <div className="container px-8 md:px-0">
        <div className={cn("flex flex-col md:flex-row justify-center max-w-6xl gap-6 py-8 px-6")}>
          <div className={cn(id % 2 === 0 ? "md:order-2" : "md:order-1", " basis-4/12 flex flex-col justify-center items-center")}>
            <h2
              className={cn(
                luckiest_guy.className,
                "text-4xl bg-gradient-to-b md:hidden from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap mb-6",
                "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
              )}>
              {name1}
              <span className="">{name2}</span>
            </h2>
            <div className="h-[350px] w-[300px] relative">
              <Image
                src={image}
                alt={fullName}
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            {/* <Placeholder height={450} width={350} color="#d2def4" background="#333" /> */}
          </div>
          <div className={cn("flex flex-col  tracking-wide basis-8/12", id % 2 === 0 ? "md:order-1 md:text-right" : "md:order-2 md:text-left")}>
            <h2
              className={cn(
                luckiest_guy.className,
                "title drop-shadow-titleRed",
                id === 1 ? "drop-shadow-[0px_5px_0px_rgba(118,40,40,1)]" : "",
                id === 2 ? "drop-shadow-[0px_5px_0px_rgba(134,53,13,1)]" : "",
                id === 3 ? "drop-shadow-[0px_5px_0px_rgba(1,68,76,1)]" : "",
                id === 4 ? "drop-shadow-[0px_5px_0px_rgba(151,9,143,1)]" : "",
                id === 5 ? "drop-shadow-[0px_5px_0px_rgba(11,78,132,1)]" : "",
                id === 6 ? "drop-shadow-[0px_5px_0px_rgba(69,45,157,1)]" : "",
                id === 7 ? "drop-shadow-[0px_5px_0px_rgba(152,38,3,1)]" : "",
                id === 8 ? "drop-shadow-[0px_5px_0px_rgba(20,66,6,1)]" : "",
                id === 9 ? "drop-shadow-[0px_5px_0px_rgba(126,20,20,1)]" : "",
                id === 10 ? "drop-shadow-[0px_5px_0px_rgba(20,66,6,1)]" : ""
              )}>
              {name1}
              <span className="md:text-5xl xl:text-6xl">{name2}</span>
            </h2>
            <p className="tracking-widest leading-loose">{description}</p>
            <div className={cn("flex flex-col gap-6", id % 2 === 0 ? "justify-end" : "justify-start")}>
              <div className="flex flex-row justify-between items-center md:gap-x-24 gap-x-10">
                {/* Strong */}
                <Slider value={valStrong}>Strong</Slider>
                {/* Creative */}
                <Slider value={valCreative}>Creative</Slider>
              </div>
              <div className="flex flex-row justify-between items-center md:gap-x-24 gap-x-10">
                {/* Logic */}
                <Slider value={valLogic}>Logic</Slider>
                {/* Luck */}
                <Slider value={valLuck}>Luck</Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
