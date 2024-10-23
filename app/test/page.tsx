import Carousel from "@/components/ui/carousel";
import SingleCarousel from "@/components/ui/carousel/single-carousel";
import { charactersData } from "@/data/characters";
import React from "react";

const TestPage = () => {
  return (
    <div className="border border-black pb-40 pt-20">
      <Carousel>
        {charactersData.map((character) => (
          <SingleCarousel key={character.id} {...character} />
        ))}
      </Carousel>
    </div>
  );
};

export default TestPage;
