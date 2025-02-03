"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Character from "@/components/character";
import { charactersData } from "@/data/characters";
import BackgroundImage from "@/public/background/character.png";
import CharacterTitle from "@/public/title/character.png";
import BannerWrapper from "@/components/ui/banner/banner-wrapper";
import Banner from "@/components/ui/banner/banner";

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
      <BannerWrapper
        bgColor="#dedede"
        backgroundImage={BackgroundImage}
        backgroundAlt="Background"
        className="py-14"
      >
        <Banner
          productTitle={CharacterTitle}
          productTitleAlt="Our Product"
          className="justify-center gap-8"
        >
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
        </Banner>
      </BannerWrapper>
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
