"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

import Character from "@/components/character";
import { charactersData } from "@/data/characters";
import BackgroundImage from "@/public/background/character.png";
import CharacterTitle from "@/public/title/character.png";

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
      <div className="relative inset-0 flex items-center bg-[#dedede] bg-cover bg-center py-14">
        <Image
          src={BackgroundImage}
          alt="Background"
          quality={100}
          fill
          sizes="100vw"
          className="absolute inset-0 z-10"
        />
        <div className="container z-20 flex flex-col justify-center gap-8">
          <div className="z-20">
            <Image src={CharacterTitle} alt="Character" />
          </div>
          <div className="z-20 mb-2 flex flex-col leading-loose tracking-wider">
            <p className="text-[#d3dcf3]">
              Minilemon adalah animasi perpaduan topeng dan buah lemon yang
              hidup di dalam mimpi kakek Djoyo, terdiri dari 6 karakter utama
              yang mewakili 6 suku besar di Indonesia, yaitu Wayan (Bali), Togar
              (Batak), Ucup (Sunda), Slamet (Jawa), Memey (Tionghoa) dan Minggus
              (Papua). Selain itu ada karakter lain seperti Bibie, Tigor, Amink
              dan RU-D1 (Robot ciptaan Bibie) yang meramaikan kisah perjalanan
              si Minilemon.{" "}
            </p>
          </div>
        </div>
      </div>
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
