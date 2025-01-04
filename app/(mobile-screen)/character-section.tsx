"use client";

import SwipeIndicator from "@/components/swipe-indicator";
import Slider from "@/components/ui/slider";
import { charactersData } from "@/data/characters";
import useUpdateCurrentLink from "@/hooks/useUpdateCurrentLink";
import BackgroundCharacter from "@/public/background/character-mobile.png";
import CharacterTitle from "@/public/title/character.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

function CharacterSection() {
  const { currentLink, setCurrentLink } = useUpdateCurrentLink();

  const refInView = useRef(null);
  const characterInView = useInView(refInView);

  useEffect(() => {
    if (characterInView) {
      setCurrentLink("#character");
    }
  }, [characterInView, currentLink, setCurrentLink]);

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div>
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
            <p ref={refInView}>
              Minilemon adalah animasi perpaduan topeng dan buah lemon yang
              hidup di dalam mimpi kakek Djoyo, terdiri dari 6 karakter utama
              yang mewakili 6 suku besar di Indonesia, yaitu Wayan (Bali), Togar
              (Batak), Ucup (Sunda), Slamet (Jawa), Memey (Tionghoa) dan Minggus
              (Papua). Selain itu ada karakter lain seperti Bibie, Tigor, Amink
              dan RU-D1 (Robot ciptaan Bibie) yang meramaikan kisah perjalanan
              si Minilemon.
            </p>
          </div>
        </div>
      </div>
      {/* Change character picture and status */}
      <div className="flex flex-col items-center justify-center gap-y-2 bg-[#dedede] py-6">
        <div className="max-w-full px-6 400:max-w-screen-400 450:max-w-screen-450 640:max-w-screen-640">
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
                <div className="flex h-full max-w-full flex-col items-center justify-center gap-y-4 400:max-w-screen-400 450:max-w-screen-450 640:max-w-screen-640">
                  <div className="flex flex-row">
                    <motion.div
                      animate={floatingAnimation}
                      className="flex basis-1/2 items-center justify-center"
                    >
                      <Image src={character.image} alt={character.fullName} />
                    </motion.div>
                    <div className="flex basis-1/2 flex-col justify-center gap-8">
                      <div>
                        <Image
                          src={character.namePicture}
                          alt={character.fullName}
                          height={30}
                        />
                      </div>
                      <div className="flex flex-col gap-5">
                        <Slider
                          value={character.strong}
                          slider="bg-[#ededed]"
                          className="font-bold"
                        >
                          Strong
                        </Slider>
                        <Slider
                          value={character.logic}
                          className="font-bold"
                          slider="bg-[#ededed]"
                        >
                          Logic
                        </Slider>
                        <Slider
                          value={character.creative}
                          slider="bg-[#ededed]"
                          className="font-bold"
                        >
                          Creative
                        </Slider>
                        <Slider
                          value={character.luck}
                          slider="bg-[#ededed]"
                          className="font-bold"
                        >
                          Luck
                        </Slider>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-loose">
                      {character.description}
                    </p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <SwipeIndicator />
      </div>
    </div>
  );
}

export default CharacterSection;
