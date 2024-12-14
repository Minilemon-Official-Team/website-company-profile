"use client";

import { Button as ButtonLegacy } from "@/components/ui/button-sec";
import CoverPanggungBonekaMinilemon from "@/public/product/panggung-boneka-minilemon.png";
import CoverPetualanganMinilemon from "@/public/product/petualangan-minilemon.png";
import CoverPostParenting from "@/public/product/poster-parenting.png";
import CoverSaveTheEarth from "@/public/product/save-the-earth.png";
import ComingSoon from "@/public/product/coming-soon.jpg"; 

import OurProductTitle from "@/public/title/our-product-1.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from "next/image";
import Link from "next/link";

function ProductSection() {
  return (
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
            <Image
                src={ComingSoon}
                alt="Minilemon Explorer!"
                className="h-[492px] w-[350px]"
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
        <Link href="/product">
          <ButtonLegacy.Primary className="mt-2">See More</ButtonLegacy.Primary>
        </Link>
      </div>
    </div>
  );
}

export default ProductSection;
