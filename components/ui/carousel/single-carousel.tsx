"use client";

import { Placeholder } from "placeholder";
import React, { useRef } from "react";
import Slider from "../slider";
import { useInView } from "framer-motion";

interface SingleCarouselProps {
  strong: number;
  logic: number;
  creative: number;
  luck: number;
  description: string;
}

const SingleCarousel = ({
  strong,
  logic,
  creative,
  luck,
  description,
}: SingleCarouselProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.8,
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="basis-1/2">
          <Placeholder width={200} height={350} />
        </div>
        <div className="flex basis-1/2 flex-col">
          <div>
            <Placeholder width={300} height={100} />
          </div>
          <div>
            <Slider value={isInView ? strong : 0}>Strong</Slider>
            <Slider value={isInView ? logic : 0}>Logic</Slider>
            <Slider value={isInView ? creative : 0}>Creative</Slider>
            <Slider value={isInView ? luck : 0}>Luck</Slider>
          </div>
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleCarousel;
