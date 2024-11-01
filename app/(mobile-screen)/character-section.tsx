"use client";

import Slider from "@/components/ui/slider";
import { charactersData } from "@/data/characters";
import BackgroundCharacter from "@/public/background/character-mobile.png";
import CharacterTitle from "@/public/title/characters-1.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from "next/image";

function CharacterSection() {
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
        <div className="max-w-screen-640 z-10 flex flex-col justify-center gap-y-4 px-6 py-4">
          <div id="character" className="z-10">
            <Image
              src={CharacterTitle}
              alt="Character"
              className="400:w-[210px] w-[180px]"
            />
          </div>
          <div className="z-10 flex flex-col gap-y-6 leading-relaxed tracking-widest text-[#c5cce2]">
            <p className="">
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
      <div className="flex justify-center bg-[#dedede]">
        <div className="max-w-screen-300 400:max-w-screen-400 640:max-w-screen-640 450:max-w-screen-450 px-6 py-12">
          <Splide
            options={{
              type: "loop",
              // interval: 4000,
              // perPage: 1,
              // perMove: 1,
              gap: "5rem",
              focus: "center",
              pagination: false,
              // autoplay: true,
              arrows: false,
            }}
          >
            {charactersData.map((character) => (
              <SplideSlide key={character.id}>
                <div className="max-w-screen-300 400:max-w-screen-400 640:max-w-screen-640 450:max-w-screen-450 flex h-full flex-col gap-y-4">
                  <div className="flex flex-1 basis-1/2 flex-row">
                    <div className="basis-1/2">
                      <Image src={character.image} alt={character.fullName} />
                    </div>
                    <div className="flex basis-1/2 flex-col">
                      <div>
                        <Image
                          src={character.namePicture}
                          alt={character.fullName}
                          className="w-[100px]"
                        />
                      </div>
                      <div className="flex flex-col">
                        <Slider value={character.strong} slider="bg-[#ededed]">
                          Strong
                        </Slider>
                        <Slider value={character.logic} slider="bg-[#ededed]">
                          Logic
                        </Slider>
                        <Slider
                          value={character.creative}
                          slider="bg-[#ededed]"
                        >
                          Creative
                        </Slider>
                        <Slider value={character.luck} slider="bg-[#ededed]">
                          Luck
                        </Slider>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 basis-1/2">
                    <p className="text-sm">{character.description}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default CharacterSection;
