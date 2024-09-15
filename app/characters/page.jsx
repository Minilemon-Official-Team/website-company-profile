"use client";

import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { useInView } from "framer-motion";
import "@splidejs/react-splide/css";

import { charactersData } from "../../data/characters";
import Character from "../../components/character";
import Slider from "@/components/ui/slider";
import CharacterMobile from "@/components/character-mobile";

const CharactersPage = () => {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    interval: 12000,
  };

  return (
    <>
      {/* Desktop view */}
      {charactersData.map((data) => (
        <Character key={data.id} {...data} className={"hidden lg:flex"} />
      ))}

      {/* Mobile + Tab view */}
      <div className="block lg:hidden">
        <Splide options={options}>
          {charactersData.map((data) => (
            <SplideSlide key={data.id}>
              <Character {...data} />
            </SplideSlide>
          ))}

          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>
        </Splide>
      </div>
    </>
  );
};

export default CharactersPage;
