"use client";

import Image from "next/image";
import { Placeholder } from "placeholder";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import Contact from "../components/contact";
import DividerBlue from "../components/ui/divider-blue";
import Minggus from "../public/Minggus.png";
import MinilemonTitle from "@/public/title-picture/minilemon-1.png";
import MessageTitle from "@/public/title-picture/message-1.png";
import TreatmentTitle from "@/public/title-picture/treatment-1.png";
import ConceptTitle from "@/public/title-picture/concept-1.png";
import PsychographicTitle from "@/public/title-picture/psychographic-1.png";
import StoryTitle from "@/public/title-picture/story-2.png";
import CharacterTitle from "@/public/title-picture/characters-1.png";
import OurProductTitle from "@/public/title-picture/our-product-1.png";
import CompanyTitle from "@/public/title-picture/company-1.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Section 1 */}
      <div className="w-full bg-gradient-to-b from-[#0a040e] to-[#3a1c52] text-[#d0dff4]">
        <div className="container my-12 flex flex-col gap-4 px-10 lg:px-0">
          <p className="my-2 text-xl font-bold uppercase tracking-wide">
            welcome to
          </p>
          <Image src={MinilemonTitle} alt="Minilemon" className="my-4" />
          <div className="hidden flex-col lg:flex">
            <p className="leading-8 tracking-wide">
              Berawal dari cinta dan bangga akan budaya topeng yang merupakan
              wajah suku bangsa Indonesia,
            </p>
            <p>
              <span className="text-[#ffe200]">
                Reno Halsamer Founder (dTopeng Kingdom Foundation)
              </span>{" "}
              menciptakan tokoh animasi fiksi
            </p>
            <p>
              dari perpaduan topeng dan buah lemon yang banyak manfaat bagi
              kesehatan.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 self-center leading-loose tracking-widest lg:hidden">
            <p>
              Berawal dari cinta dan bangga akan warisan budaya khususnya
              topeng, yang merupakan penutup wajah dari setiap Suku di
              Indonesia.
            </p>
            <p>
              <span className="font-bold text-[#f3e659]">
                Reno Halsamer (Founder dTopeng Kingdom Foundation)
              </span>{" "}
              melalui perjalanan panjang telah menciptakan tokoh animasi (fiksi)
              dengan memadukan topeng sebagai wajah indonesia dan tubuh lemon
              yang merupakan buah dengan banyak manfaat bagi kesehatan.
            </p>
            <p>
              Bernama <span>Minilemon</span> dengan harapan dapat memberi
              manfaat positif bagi anak-anak Indonesia dalam belajar Sejarah,
              Budaya, hormat kepada orangtua, gotong royong, menghargai
              perbedaa, cinta Bangsa dan Negara, serta ikut dalam penyelamatan
              Lingkungan hidup di dunia.
            </p>
          </div>
          <div className="flex w-full items-center justify-center lg:items-start lg:justify-start">
            <Button.Primary className="mb-24 mt-8 w-fit scale-125 font-bold uppercase shadow-md">
              See More
            </Button.Primary>
          </div>
        </div>
      </div>

      <DividerBlue className="bg-[#391b51]" />

      {/* Message */}
      <div className="w-full bg-[#d3def4] py-20 lg:hidden">
        <div className="container flex max-w-xl flex-col justify-center gap-y-6 px-8 text-end sm:px-0">
          <div className="flex w-full justify-end">
            <Image src={MessageTitle} alt="Message" />
          </div>
          <div className="flex flex-col gap-y-6 leading-loose tracking-widest">
            <p>
              minimnya hiburan yang mengedepankan kualitas dan edukasi kepada
              anak-anak Indonesia, Minilemon berharap mampu menjadi idola baru,
              menanamkan nilai-nilai positif di banyak platform dan gadget yang
              merupakan kebutuhan gen z saat ini.
            </p>
          </div>
        </div>
      </div>

      {/* Treatment */}
      <div className="w-full bg-[#d3eff3] py-20 lg:hidden">
        <div className="container flex max-w-xl flex-col justify-center gap-y-6 px-8 text-center sm:px-0">
          <div className="flex w-full justify-center">
            <Image src={TreatmentTitle} alt="Treatment" />
          </div>
          <p className="flex flex-col gap-y-6 leading-loose tracking-widest">
            Sadar akan persoalan-persoalan besar dan mendasar, PT Minilemon
            Nusantara berinisitatif membuat produk-produk anak yang berupa
            tontonan dan permainan, dengan targe usia 3-7 tahun.
          </p>
        </div>
      </div>

      {/* Concept */}
      <div className="w-full bg-[#f0f4d3] py-20 lg:hidden">
        <div className="container flex max-w-xl flex-col justify-center gap-y-6 px-8 text-start sm:px-0">
          <div className="">
            <Image src={ConceptTitle} alt="Concept" />
          </div>
          <p className="flex flex-col gap-y-6 leading-loose tracking-widest">
            Minilemon adalah kisah 6 sahabat sepermainan yang berasal dari suku
            berbeda-beda yaitu Jawa, Sunda, Papua, Tionghoa, Batak dan Bali.
            meskipun berbeda Minilemon selalu mengedepankan sikap toleransi dan
            gotong royong, sehingga saling melengkapi satu dan lainnya dalam
            setiap kisah yang mekea lalui.
          </p>
        </div>
      </div>

      {/* Psychographic */}
      <div className="w-full bg-[#f4d8d4] py-20 lg:hidden">
        <div className="container flex max-w-xl flex-col justify-center gap-y-6 px-8 text-end sm:px-0">
          <div className="">
            <Image src={PsychographicTitle} alt="Psychographic" />
          </div>
          <p className="flex flex-col gap-y-6 leading-loose tracking-wider">
            Membangun pola pikir positif di dalam pertumbuhan anak yang suka
            bermain, imajinatif, hidup dalam dunia angan-anagan, tidak suka
            larangan, mempunyai sifat ingin tahu dan bersemangat untuk
            coba-coba.
          </p>
        </div>
      </div>

      {/* Story Large Screen */}
      <div className="hidden w-full bg-[#D3DEF4] lg:flex">
        {/* <Story /> */}
        <div className="container my-10 flex flex-col gap-y-2">
          <div className="flex flex-row gap-12">
            <div className="basis-1/2">
              <Image src={StoryTitle} alt="Story" />
            </div>
            <div className="flex basis-1/2 justify-center">
              <Image src={CharacterTitle} alt="Character Minggus" />
            </div>
          </div>
          <div className="flex flex-row gap-12">
            <div
              className={cn("flex basis-1/2 flex-col justify-between gap-y-12")}
            >
              <div className="flex h-full flex-col justify-between gap-y-12 font-medium leading-relaxed tracking-wider">
                <p className="z-10 mt-4">
                  Di dalam gua ditengah kebun lemon yang indah, hidup seorang
                  kakek (Djoyo) yang setiap hari membuat topeng berbentuk wajah
                  manusia. Kecintaannya dengan Nusantara membuat gua yang ia
                  tinggali dihiasi ribuan topeng wajah dari kesukuan yang
                  berbeda-beda di Nusantara.
                </p>
                <p className="z-10">
                  Suatu malam, Kakek yang baik hati ini bermimpi. di dalam
                  mimpinya ia melihat 6 topengnya hidup dan menjelma menjadi
                  karakter anak-anak dengan tubuh buah lemon yang ia sebut
                  MINILEMON.
                </p>
              </div>
            </div>
            <div className={cn("flex basis-1/2 items-center justify-center")}>
              <div className="relative h-[285px] w-[228px]">
                <Image
                  src={Minggus}
                  alt="Minggus"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mb-2 mt-6 flex flex-row">
            <div className="flex basis-1/2">
              <Button.Secondary className="w-fit scale-125 self-center font-bold uppercase shadow-md">
                See More
              </Button.Secondary>
            </div>
            <div className="flex basis-1/2 justify-center">
              <Button.Secondary className="w-fit scale-125 self-center font-bold uppercase shadow-md">
                See More
              </Button.Secondary>
            </div>
          </div>
        </div>
      </div>

      {/* Product */}
      <div className="hidden w-full flex-col bg-[#1b1b1b] lg:flex">
        <div className="container my-12 flex flex-col items-center justify-center gap-8 px-10 pt-6 md:px-0">
          <div>
            <Image src={OurProductTitle} alt="Our Product" />
          </div>
          <Splide
            options={{
              type: "loop",
              interval: 2000,
              pauseOnHover: false,
              perPage: 3,
              gap: "0.5rem",
              drag: "free",
              focus: "center",
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
              <Placeholder
                height={420}
                width={300}
                color="#111"
                background="#d1fae5"
              />
            </SplideSlide>
            <SplideSlide>
              <Placeholder
                background="#a7f3d0"
                height={420}
                width={300}
                color="#222"
              />
            </SplideSlide>
            <SplideSlide>
              <Placeholder
                height={420}
                background="#6ee7b7"
                width={300}
                color="#333"
              />
            </SplideSlide>
            <SplideSlide>
              <Placeholder
                height={420}
                width={300}
                color="#444"
                background="#34d399"
              />
            </SplideSlide>
            <SplideSlide>
              <Placeholder
                height={420}
                background="#10b981"
                width={300}
                color="#333"
              />
            </SplideSlide>
          </Splide>
          <Button.Secondary className="mt-2 w-fit scale-125 self-center font-bold uppercase shadow-md">
            See More
          </Button.Secondary>
        </div>
      </div>

      {/* Company */}
      <div className="hidden w-full flex-col bg-[#f4e4d4] lg:flex">
        <div className="container my-12 flex flex-col gap-4 px-10 md:px-0">
          <div>
            <Image src={CompanyTitle} alt="Company" />
          </div>
          <p className="leading-relaxed tracking-widest">
            PT. Minilemon Nusantara adalah perusahaan yang berdomisili di
            Surabaya dan Jakarta, Indonesia. Yang berorientasi pada Pendidikan
            Karakter Anak dan nilai-nilai kebaikan melalui berbagai Program
            Pendidikan berbasis seni, hiburan dan teknologi.
          </p>
          <Button.Secondary className="mt-6 w-fit scale-125 font-bold uppercase shadow-md">
            See More
          </Button.Secondary>
        </div>
      </div>

      {/* Contact Us */}
      <div className="hidden w-full flex-row bg-[#1b1b1b] lg:flex">
        <div className="container my-20 flex flex-col gap-12 px-10 md:px-0 lg:flex-row">
          <Contact />
        </div>
      </div>
    </div>
  );
}
