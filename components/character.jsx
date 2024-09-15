"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "../lib/utils";
import { luckiest_guy } from "../app/fonts";
import Slider from "./ui/slider";
import Image from "next/image";

const Character = ({
  id,
  namePicture,
  fullName,
  description,
  image,
  strong,
  logic,
  creative,
  luck,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.8,
  });

  return (
    <div
      key={id}
      ref={ref}
      className={cn(
        "flex h-screen flex-col items-center justify-center lg:h-full",
        id === 1 ? "bg-[#FBEFEF]" : "",
        id === 2 ? "bg-[#FAF3E1]" : "",
        id === 3 ? "bg-[#E5FAE1]" : "",
        id === 4 ? "bg-[#FAF0FB]" : "",
        id === 5 ? "bg-[#E4FAF8]" : "",
        id === 6 ? "bg-[#F0F4FF]" : "",
        id === 7 ? "bg-[#FEF4EB]" : "",
        id === 8 ? "bg-[#EBF9E8]" : "",
        id === 9 ? "bg-[#FBEFEF]" : "",
        id === 10 ? "bg-[#EAF9E8]" : "",
        className,
      )}
    >
      <div className="container px-8 md:px-0">
        <div className="mx-8 flex max-w-6xl flex-col justify-center gap-6 py-8 md:mx-12 lg:mx-0 lg:flex-row">
          <div
            className={cn(
              id % 2 === 0 ? "lg:order-2" : "lg:order-1",
              "flex basis-4/12 flex-row items-center justify-center gap-4",
            )}
          >
            {/* Mobile Design */}
            <div className="order-2 flex basis-1/2 flex-col gap-6 lg:hidden lg:basis-0">
              <div className="flex">
                <Image src={namePicture} alt={fullName} />
              </div>
              <div className="flex flex-col gap-4">
                <Slider value={isInView ? strong : 0}>Strong</Slider>
                <Slider value={isInView ? creative : 0}>Creative</Slider>
                <Slider value={isInView ? logic : 0}>Logic</Slider>
                <Slider value={isInView ? luck : 0}>Luck</Slider>
              </div>
            </div>
            <div className="relative h-[350px] w-[300px] basis-1/2 lg:basis-full">
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
          </div>
          <div
            className={cn(
              "flex basis-8/12 flex-col tracking-wide",
              id % 2 === 0
                ? "lg:order-1 lg:text-right"
                : "lg:order-2 lg:text-left",
            )}
          >
            <div
              className={cn(
                id % 2 === 0 ? "justify-end" : "justify-start",
                "hidden lg:flex",
              )}
            >
              <Image src={namePicture} alt={fullName} />
            </div>
            <p className="leading-loose tracking-widest">{description}</p>
            <div
              className={cn(
                "hidden flex-col gap-6 lg:flex",
                id % 2 === 0 ? "justify-end" : "justify-start",
              )}
            >
              <div className="flex flex-row items-center justify-between gap-x-10 lg:gap-x-24">
                <Slider value={isInView ? strong : 0}>Strong</Slider>
                <Slider value={isInView ? creative : 0}>Creative</Slider>
              </div>
              <div className="flex flex-row items-center justify-between gap-x-10 lg:gap-x-24">
                <Slider value={isInView ? logic : 0}>Logic</Slider>
                <Slider value={isInView ? luck : 0}>Luck</Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
