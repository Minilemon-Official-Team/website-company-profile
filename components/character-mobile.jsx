"use client";

import React, { useRef } from "react";
import { cn } from "../lib/utils";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { charactersData } from "@/data/characters";
import { useInView } from "framer-motion";
import Slider from "./ui/slider";

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
    amount: 1,
  });

  return (
    <Splide
      className="flex h-svh flex-col items-center justify-center border border-blue-500 lg:hidden"
      options={{
        rewind: true,
      }}
      ref={ref}
    >
      {charactersData.map((data) => (
        <SplideSlide
          key={data.id}
          className="m-4 flex flex-col items-center justify-center"
        >
          <div className="flex basis-7/12 flex-row border border-black">
            <div className="basis-1/2">
              <Image src={data.image} alt={data.fullName} />
            </div>
            <div className="flex basis-1/2 flex-col">
              <div>
                <Image src={data.namePicture} alt={data.fullName} />
              </div>
              <div>
                <Slider value={isInView ? strong : 0}>Strong</Slider>
                <Slider value={isInView ? creative : 0}>Creative</Slider>
                <Slider value={isInView ? logic : 0}>Logic</Slider>
                <Slider value={isInView ? luck : 0}>Luck</Slider>
              </div>
            </div>
          </div>
          <div className="basis-5/12 border border-red-500">Deskripsi</div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Character;
