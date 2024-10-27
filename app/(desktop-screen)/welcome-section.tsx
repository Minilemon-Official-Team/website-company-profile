"use client";

// External Libraries
import { Button as ButtonLegacy } from "@/components/ui/button-sec";
import DividerBlue from "@/components/ui/divider/divider-blue";
import MinilemonTitle from "@/public/title/minilemon-1.png";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from "next/image";
import Link from "next/link";

function WelcomeSection() {
  return (
    <div className="w-full bg-gradient-to-b from-[#0a040e] to-[#3a1c52] text-[#d0dff4]">
      <div className="container my-16 hidden flex-col gap-4 px-10 lg:flex lg:px-0">
        <p className="text-xl font-bold uppercase tracking-wide text-[#d5ddf4]">
          welcome to
        </p>
        <Image src={MinilemonTitle} alt="Minilemon" className="mb-1" />
        <div className="hidden flex-col font-semibold leading-7 tracking-wide text-[#d5ddf4]/80 lg:flex">
          <p className="">
            Berawal dari cinta dan bangga akan budaya topeng yang merupakan
            wajah suku bangsa Indonesia,
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
          <Link href="/about">
            <ButtonLegacy.Primary className="mt-6">
              See More
            </ButtonLegacy.Primary>
          </Link>
        </div>
      </div>
      <DividerBlue className="hidden bg-[#391b51] lg:block" />
    </div>
  );
}

export default WelcomeSection;
