"use client";

import SwipeIndicator from "@/components/swipe-indicator";
import SliderMobile from "@/components/ui/slider-mobile";
import { charactersData } from "@/data/characters";
import BackgroundCharacter from "@/public/background/character-mobile.png";
import CharacterTitle from "@/public/title/character.png";

import useUpdateCurrentLink from "@/hooks/useUpdateCurrentLink";
import { cn } from "@/lib/utils";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { luckiest_guy } from "../fonts";

export default function CharacterSection() {
  return (
    <>
      <CharacterIntro />
      <CharacterSwiper />
    </>
  );
}

const CharacterIntro = () => {
  const { currentLink, setCurrentLink } = useUpdateCurrentLink();

  const refInView = useRef(null);
  const characterInView = useInView(refInView);

  useEffect(() => {
    if (characterInView) {
      setCurrentLink("#character");
    }
  }, [characterInView, currentLink, setCurrentLink]);

  return (
    <div className="relative flex h-full items-center justify-center bg-[#060816] bg-cover bg-center">
      <Image
        src={BackgroundCharacter}
        alt="Background Character"
        quality={100}
        fill
        sizes="100vw"
        className="absolute inset-0"
        objectFit="cover"
      />
      <div className="z-10 flex max-w-screen-640 flex-col justify-center gap-y-4 px-6 py-4">
        <div id="character" className="z-10">
          <Image
            src={CharacterTitle}
            alt="Character"
            className="w-[180px] 400:w-[210px]"
          />
        </div>
        <div className="z-10 flex flex-col gap-y-6 leading-relaxed tracking-widest text-[#c5cce2]">
          <p ref={refInView} className="sm:text-sm md:text-lg">
            Minilemon adalah animasi perpaduan topeng dan buah lemon yang hidup
            di dalam mimpi kakek Djoyo, terdiri dari 6 karakter utama yang
            mewakili 6 suku besar di Indonesia, yaitu Wayan (Bali), Togar
            (Batak), Ucup (Sunda), Slamet (Jawa), Memey (Tionghoa) dan Minggus
            (Papua). Selain itu ada karakter lain seperti Bibie, Tigor, Amink
            dan RU-D1 (Robot ciptaan Bibie) yang meramaikan kisah perjalanan si
            Minilemon.
          </p>
        </div>
      </div>
    </div>
  );
};

const CharacterSwiper = () => {
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="flex flex-col items-center justify-start gap-y-2 bg-[#dedede]">
      <div className="w-full">
        <Splide
          options={{
            type: "loop",
            gap: "5rem",
            focus: "center",
            pagination: false,
            arrows: false,
          }}
        >
          {charactersData.map((character) => (
            <SplideSlide key={character.id}>
              <div className="flex w-full flex-col items-center justify-start gap-y-4">
                <div className="char-card flex h-[210px] sm:h-[300px] md:h-[400px] w-full flex-row items-start">
                  <div
                    style={{
                      backgroundColor: character.bgcolor,
                    }}
                    className="flex h-full w-1/2 items-center justify-center overflow-hidden"
                  >
                    <motion.div
                      animate={floatingAnimation}
                      className="flex h-[250px] sm:h-[350px] md:h-[500px] w-full items-center justify-center"
                    >
                      <Image
                        src={character.image}
                        alt={character.fullName}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </div>

                  <div className="flex h-full w-1/2 flex-col justify-center gap-3 bg-[#2b2c2e] pr-5">
                    <div
                      className={cn(
                        luckiest_guy.className,
                        "flex h-[30px] md:h-[50px] w-full items-center justify-start bg-gradient-to-b from-[#fff000] to-[#ffa800] pl-5",
                      )}
                      style={{
                        clipPath: "polygon(0% 0, 100% 0, 93% 100%, 0% 100%)",
                      }}
                    >
                      <p className="skew-x-[-15deg] text-2xl md:text-4xl tracking-wider text-gray-800">
                        {character.fullName}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 px-3">
                      <SliderMobile name="Strong" value={character.strong} />
                      <SliderMobile name="Logic" value={character.logic} />
                      <SliderMobile name="Creative" value={character.creative} />
                      <SliderMobile name="Luck" value={character.luck} />
                    </div>
                  </div>
                </div>
                <p className="px-6 text-sm md:text-xl font-semibold leading-loose text-[#374151]">
                  {(character.fullName === "RU-DI" || character.fullName === "Amink")
                    ? character.mobileDescription
                    : character.description}
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="pb-6">
        <SwipeIndicator />
      </div>
    </div>
  );
};