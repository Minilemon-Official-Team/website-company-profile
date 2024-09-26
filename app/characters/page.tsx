"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { charactersData } from "../../data/characters";
import Character from "../../components/character";

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
