"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Placeholder } from "placeholder";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import { cn } from "@/lib/utils";
import { Button as ButtonLegacy } from "@/components/ui/button-sec";
import Contact from "@/components/contact";
import DividerBlue from "@/components/ui/divider/divider-blue";
import MinilemonTitle from "@/public/title/minilemon-1.png";
// import MessageTitle from "@/public/title/message.png";
// import TreatmentTitle from "@/public/title/treatment.png";
// import ConceptTitle from "@/public/title/concept.png";
// import PsychographicTitle from "@/public/title/psychographic.png";
import StoryTitle from "@/public/title/story-2.png";
import CharacterTitle from "@/public/title/characters-1.png";
import OurProductTitle from "@/public/title/our-product-1.png";
import CompanyTitle from "@/public/title/company.png";
import { charactersData } from "@/data/characters";
import CoverPetualanganMinilemon from "@/public/product/petualangan-minilemon.png";
import CoverSaveTheEarth from "@/public/product/save-the-earth.png";
import CoverPanggungBonekaMinilemon from "@/public/product/panggung-boneka-minilemon.png";
import CoverPostParenting from "@/public/product/poster-parenting.png";
import { useScreenWidth } from "@/hooks/useScreenWidth";

export default function Home() {
  const router = useRouter();
  const screenWidth = useScreenWidth();

  return (
    <>
      {screenWidth < 1024 ? (
        <div>Test</div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          {/* Section 1 */}
          <div className="w-full bg-gradient-to-b from-[#0a040e] to-[#3a1c52] text-[#d0dff4]">
            <div className="container my-16 hidden flex-col gap-4 px-10 lg:flex lg:px-0">
              <p className="text-xl font-bold uppercase tracking-wide text-[#d5ddf4]">
                welcome to
              </p>
              <Image src={MinilemonTitle} alt="Minilemon" className="mb-1" />

              {/* Desktop View */}
              <div className="hidden flex-col font-semibold leading-7 tracking-wide text-[#d5ddf4]/80 lg:flex">
                <p className="">
                  Berawal dari cinta dan bangga akan budaya topeng yang
                  merupakan wajah suku bangsa Indonesia,
                </p>
                <p>
                  <span className="text-[#ffe200]/80">
                    Reno Halsamer Founder (dTopeng Kingdom Foundation)
                  </span>{" "}
                  menciptakan tokoh animasi fiksi
                </p>
                <p>
                  dari perpaduan topeng dan buah lemon yang banyak manfaat bagi
                  kesehatan.
                </p>
              </div>

              <div className="flex w-full items-start justify-start">
                <ButtonLegacy.Primary
                  className="mt-6"
                  onClick={() => router.push("/about")}
                >
                  See More
                </ButtonLegacy.Primary>
              </div>
            </div>
          </div>

          <DividerBlue className="hidden bg-[#391b51] lg:block" />

          {/* Story Section */}
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
                    Di dalam gua ditengah kebun lemon yang indah, hidup seorang
                    kakek (Djoyo) yang setiap hari membuat topeng berbentuk
                    wajah manusia. Kecintaannya dengan Nusantara membuat gua
                    yang ia tinggali dihiasi ribuan topeng wajah dari kesukuan
                    yang berbeda-beda di Nusantara.
                  </p>
                  <p>
                    Suatu malam, Kakek yang baik hati ini bermimpi. di dalam
                    mimpinya ia melihat 6 topengnya hidup dan menjelma menjadi
                    karakter anak-anak dengan tubuh buah lemon yang ia sebut
                    MINILEMON.
                  </p>
                </div>
                <div
                  className={cn("flex basis-1/2 items-center justify-center")}
                >
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
                  <ButtonLegacy.Primary onClick={() => router.push("/story")}>
                    See More
                  </ButtonLegacy.Primary>
                </div>
                <div className="flex basis-1/2 justify-center">
                  <ButtonLegacy.Primary
                    onClick={() => router.push("/characters")}
                  >
                    See More
                  </ButtonLegacy.Primary>
                </div>
              </div>
            </div>
          </div>

          {/* Product Section */}
          <div className="hidden w-full flex-col bg-[#1b1b1b] lg:flex">
            <div className="container my-14 flex flex-col items-center justify-center gap-8 px-10 md:px-0">
              <div>
                <Image src={OurProductTitle} alt="Our Product" />
              </div>
              {/* Change size container for width  according to the example*/}
              <div>
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    pauseOnHover: false,
                    perPage: 3,
                    height: "492px",
                    gap: "0.5rem",
                    drag: "free",
                    focus: "center",
                    arrows: false,
                    pagination: false,
                    breakpoints: {
                      768: {
                        perPage: 1,
                      },
                    },
                    AutoScroll: {
                      pauseOnHover: false,
                      speed: 2,
                    },
                  }}
                  extensions={{ AutoScroll }}
                >
                  <SplideSlide>
                    <Image
                      src={CoverPetualanganMinilemon}
                      alt="Petualangan Minilemon"
                      className="h-[492px] w-[350px]"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Image
                      src={CoverSaveTheEarth}
                      alt="Minilemon Save The Earth"
                      className="h-[492px] w-[350px]"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Placeholder
                      height={493}
                      width={350}
                      color="#333"
                      background="#333"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Image
                      src={CoverPostParenting}
                      alt="Minilemon Live Parenting"
                      className="h-[492px] w-[350px]"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Image
                      src={CoverPanggungBonekaMinilemon}
                      alt="Panggung Boneka Minilemon"
                      className="h-[492px] w-[350px]"
                    />
                  </SplideSlide>
                </Splide>
              </div>
              <ButtonLegacy.Primary
                className="mt-2"
                onClick={() => router.push("/product")}
              >
                See More
              </ButtonLegacy.Primary>
            </div>
          </div>

          {/* Company Section */}
          <div className="hidden w-full flex-col bg-[#f4e4d4] lg:flex">
            <div className="container my-14 flex flex-col gap-4 px-10 md:px-0">
              <div>
                <Image src={CompanyTitle} alt="Company" />
              </div>
              <p className="font-semibold leading-loose tracking-widest text-[#2c2a2a]/70">
                PT. Minilemon Nusantara adalah perusahaan yang berdomisili di
                Surabaya dan Jakarta, Indonesia. Yang berorientasi pada
                Pendidikan Karakter Anak dan nilai-nilai kebaikan melalui
                berbagai Program Pendidikan berbasis seni, hiburan dan
                teknologi.
              </p>
              <ButtonLegacy.Primary
                className="mt-6"
                onClick={() => router.push("/company")}
              >
                See More
              </ButtonLegacy.Primary>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="hidden w-full flex-row bg-[#1b1b1b] lg:flex">
            <div className="container my-14 flex flex-col gap-12 px-10 md:px-0 lg:flex-row">
              <Contact />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
