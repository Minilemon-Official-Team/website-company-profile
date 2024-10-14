"use client";

import React, { useRef } from "react";
import { cn } from "../lib/utils";
import Slider from "./ui/slider";
import Image, { StaticImageData } from "next/image";
import { useInView } from "framer-motion";

interface CharacterProps {
  id: number;
  namePicture: StaticImageData;
  fullName: string;
  description: string;
  image: StaticImageData;
  strong: number;
  logic: number;
  creative: number;
  luck: number;
  className?: string;
}

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
}: CharacterProps) => {
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
        id === 1 ? "bg-[#dedede]" : "",
        id === 2 ? "bg-[#2e2e2e]" : "",
        id === 3 ? "bg-[#dedede]" : "",
        id === 4 ? "bg-[#2e2e2e]" : "",
        id === 5 ? "bg-[#dedede]" : "",
        id === 6 ? "bg-[#2e2e2e]" : "",
        id === 7 ? "bg-[#dedede]" : "",
        id === 8 ? "bg-[#2e2e2e]" : "",
        id === 9 ? "bg-[#dedede]" : "",
        id === 10 ? "bg-[#2e2e2e]" : "",
        className,
      )}
    >
      <div className="container px-8 md:px-0">
        <div className="mx-8 flex max-w-6xl flex-col justify-center py-14 md:mx-12 lg:mx-0 lg:flex-row gap-16">
          <div
            className={cn(
              id % 2 === 0 ? "lg:order-2" : "lg:order-1",
              "relative flex basis-4/12 flex-row items-center justify-center gap-4",
            )}
          >
            {/* Mobile Design */}
            <div className="order-2 flex basis-1/2 flex-col gap-6 lg:hidden lg:basis-0">
              <div className="flex">
                <Image src={namePicture} alt={fullName} />
              </div>
              <div className="flex flex-col gap-6">
                <Slider value={isInView ? strong : 0}>Strong</Slider>
                <Slider value={isInView ? creative : 0}>Creative</Slider>
                <Slider value={isInView ? logic : 0}>Logic</Slider>
                <Slider value={isInView ? luck : 0}>Luck</Slider>
              </div>
            </div>

            <div className="h-[350px] w-[500px] absolute z-10 overflow-visible basis-1/2 gap-4 lg:basis-full">
              <Image
                src={image}
                alt={fullName}
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain",
                }}
                className={cn(
                  id === 1 ? "" : "",
                  id === 2 ? "" : "",
                  id === 4 ? "" : "",
                  id === 5 ? "" : "",
                  id === 6 ? "" : "",
                  id === 7 ? "" : "",
                  id === 8 ? "" : "",
                  id === 10 ? "scale-x-[-1]" : "",
                )}
              />
            </div>
          </div>
          <div
            className={cn(
              "flex basis-8/12 flex-col gap-y-8 tracking-wide z-20",
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
            <p
              className={cn(
                "font-normal leading-relaxed tracking-wide",
                id % 2 === 0 ? "text-[#cdcdcd]/80" : "text-[#2d2d2d]/70",
                id % 2 === 0 ? "text-right" : "text-left",
              )}
            >
              {description}
            </p>
            <div
              className={cn(
                "hidden flex-col gap-6 lg:flex",
                id % 2 === 0 ? "justify-end" : "justify-start",
              )}
            >
              <div className="flex flex-row items-center justify-between gap-x-10 lg:gap-x-20">
                <Slider
                  value={isInView ? strong : 0}
                  className={cn(
                    id % 2 === 0 ? "text-[#dedede]/90" : "text-[#2a2a2a]/90",
                    "font-bold",
                  )}
                  slider={cn(id % 2 === 0 ? "bg-[#3e3e3e]" : "bg-[#ededed]")}
                >
                  Strong
                </Slider>
                <Slider
                  value={isInView ? creative : 0}
                  className={cn(
                    id % 2 === 0 ? "text-[#dedede]/90" : "text-[#2a2a2a]/90",
                    "font-bold",
                  )}
                  slider={cn(id % 2 === 0 ? "bg-[#3e3e3e]" : "bg-[#ededed]")}
                >
                  Creative
                </Slider>
              </div>
              <div className="flex flex-row items-center justify-between gap-x-10 lg:gap-x-24">
                <Slider
                  value={isInView ? logic : 0}
                  className={cn(
                    id % 2 === 0 ? "text-[#dedede]/90" : "text-[#2a2a2a]/90",
                    "font-bold",
                  )}
                  slider={cn(id % 2 === 0 ? "bg-[#3e3e3e]" : "bg-[#ededed]")}
                >
                  Logic
                </Slider>
                <Slider
                  value={isInView ? luck : 0}
                  className={cn(
                    id % 2 === 0 ? "text-[#dedede]/90" : "text-[#2a2a2a]/90",
                    "font-bold",
                  )}
                  slider={cn(id % 2 === 0 ? "bg-[#3e3e3e]" : "bg-[#ededed]")}
                >
                  Luck
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
