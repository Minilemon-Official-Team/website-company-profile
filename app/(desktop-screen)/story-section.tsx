"use client";

import { Button as ButtonLegacy } from "@/components/ui/button-sec";
import { charactersData } from "@/data/characters";
import { cn } from "@/lib/utils";
import CharacterTitle from "@/public/title/characters-1.png";
import StoryTitle from "@/public/title/story-2.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from "next/image";
import Link from "next/link";

function StorySection() {
  return (
    <div className="hidden w-full bg-[#D3DEF4] lg:flex">
      <div className="container my-14 flex flex-col gap-y-3">
        <div className="mt-2 flex flex-row gap-12">
          <div className="basis-1/2">
            <Image src={StoryTitle} alt="Story" />
          </div>
          <div className="flex basis-1/2 justify-center">
            <Image src={CharacterTitle} alt="Character Minggus" />
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex basis-1/2 flex-col gap-y-6 font-semibold leading-loose tracking-wider text-black/60">
            <p className="">
              Di dalam gua ditengah kebun lemon yang indah, hidup seorang kakek
              (Djoyo) yang setiap hari membuat topeng berbentuk wajah manusia.
              Kecintaannya dengan Nusantara membuat gua yang ia tinggali dihiasi
              ribuan topeng wajah dari kesukuan yang berbeda-beda di Nusantara.
            </p>
            <p>
              Suatu malam, Kakek yang baik hati ini bermimpi. di dalam mimpinya
              ia melihat 6 topengnya hidup dan menjelma menjadi karakter
              anak-anak dengan tubuh buah lemon yang ia sebut MINILEMON.
            </p>
          </div>
          <div className={cn("flex basis-1/2 items-center justify-center")}>
            <div className="h-full w-full">
              <Splide
                options={{
                  type: "loop",
                  interval: 4000,
                  perPage: 1,
                  perMove: 1,
                  gap: "0.5rem",
                  drag: "free",
                  focus: "center",
                  pagination: false,
                  autoplay: true,
                  arrows: false,
                }}
              >
                {charactersData.map((character) => (
                  <SplideSlide
                    key={character.id}
                    className="relative h-[350px] w-[300px] overflow-hidden"
                  >
                    <Image
                      src={character.image}
                      alt={character.fullName}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-row">
          <div className="flex basis-1/2">
            <Link href="/story">
              <ButtonLegacy.Primary>See More</ButtonLegacy.Primary>
            </Link>
          </div>
          <div className="flex basis-1/2 justify-center">
            <Link href="/characters">
              <ButtonLegacy.Primary>See More</ButtonLegacy.Primary>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorySection;
