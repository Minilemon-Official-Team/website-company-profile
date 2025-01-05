"use client";

import { Button as ButtonLegacy } from "@/components/ui/button-sec";
import useUpdateCurrentLink from "@/hooks/useUpdateCurrentLink";
import { containerVariants } from "@/lib/animations/containerVariants";
import {
  fifthDivVariants,
  fourthDivVariants,
  secondDivVariants,
  thirdDivVariants,
} from "@/lib/animations/divVariants";
import { paragraphVariants } from "@/lib/animations/paragraphVariants";
import { cn } from "@/lib/utils";
import BackgroundAboutUs from "@/public/background/about-mobile.png";
import ConceptTitle from "@/public/title/concept.png";
import IdeaTitle from "@/public/title/idea.png";
import MessageTitle from "@/public/title/message.png";
import PsychographicTitle from "@/public/title/psychographic.png";
import TreatmentTitle from "@/public/title/treatment.png";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutUsSection() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { currentLink, setCurrentLink } = useUpdateCurrentLink();

  const refInView = useRef(null);
  const aboutInView = useInView(refInView);

  useEffect(() => {
    if (aboutInView) {
      setCurrentLink("#about");
    }
  }, [aboutInView, currentLink, setCurrentLink]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    if (isExpanded && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setIsExpanded(!isExpanded);
  };

  const scrollToHeader = () => {
    setTimeout(() => {
      const titleElement = document.getElementById("about");
      if (titleElement) {
        const yOffset = -90;
        const yPosition =
          titleElement.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <div>
      <div className="relative flex h-full items-center justify-center bg-cover bg-center">
        <Image
          src={BackgroundAboutUs}
          alt="Background"
          quality={100}
          fill
          sizes="100vw"
          className="absolute inset-0"
          objectFit="cover"
        />
        <div
          id="home"
          className="z-10 flex max-w-screen-640 flex-col justify-center gap-y-4 px-6 pb-6 pt-10"
        >
          <div ref={scrollRef} className="z-10">
            <Image
              ref={refInView}
              id="about"
              src={IdeaTitle}
              alt="Idea"
              className="w-[80px] 400:w-[100px]"
            />
          </div>
          <div className="z-10 leading-relaxed tracking-widest text-[#c5cce2]">
            <p>
              Berawal dari cinta dan bangga akan warisan budaya khusunya topeng
              yang merupakan penutup wajah dari setiap Suku di Indonesia.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#f2e3fe]">
        <div className="flex max-w-screen-640 flex-col items-center px-6 py-5 leading-relaxed tracking-widest">
          <p>
            Reno Halsamer (Founder dTopeng Kingdom Foundation) melalui
            perjalanan panjanga telah menciptakan tokoh animasi (fiksi) dengan
            memadukan topeng sebagai wajah indonesia dan tubuh lemon yang
            merupakan buah dengan banyak manfaat bagi kesehatan
          </p>
          <ButtonLegacy.Primary
            className={cn(
              isExpanded === true ? "hidden" : "flex",
              "mt-4 scale-90",
            )}
            onClick={toggleExpand}
          >
            See More
          </ButtonLegacy.Primary>
        </div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center bg-[#f1e3fe]"
            >
              <motion.div className="flex max-w-screen-640 flex-col items-end justify-end gap-4 px-6 py-4">
                <motion.p
                  className="leading-relaxed tracking-widest"
                  variants={paragraphVariants}
                >
                  Bernama Minilemon dengan harapan dapat memberi manfaat positif
                  bai anak-anak indonesia dalam belaja Sejarah, Budaya, hormat
                  kepada orangtua, gotong royong, menghargai perbedaan, cinta
                  Bangsa dan Negara, serta ikut serta dalam penyelamatan
                  Lingkungan hidup di dunia.
                </motion.p>
              </motion.div>
            </motion.div>
            <motion.div
              variants={secondDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-end bg-[#d5def4]"
            >
              <motion.div className="flex max-w-screen-640 flex-col items-end justify-end gap-4 px-6 py-4">
                <motion.div className="">
                  <Image
                    src={MessageTitle}
                    alt="Message"
                    className="w-[160px] sm:w-[190px]"
                  />
                </motion.div>
                <motion.p className="text-end leading-relaxed tracking-widest">
                  minimnya hiburan yang mengedepankan kualitas dan edukasi
                  kepada anak-anak Indonesia, Minilemon berharap mampu menjadi
                  idola baru, menanamkan nilai-nilai positif di banyak platform
                  dan gadget yang merupakan kebutuhan gen z saat ini.
                </motion.p>
              </motion.div>
            </motion.div>
            <motion.div
              variants={thirdDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center bg-[#1b1b1b]"
            >
              <motion.div className="flex max-w-screen-640 flex-col items-center justify-center gap-4 px-6 py-4">
                <motion.div>
                  <Image
                    src={TreatmentTitle}
                    alt="Treatment"
                    className="w-[210px] sm:w-[320px]"
                  />
                </motion.div>
                <motion.p className="max-w-screen-640 text-center text-xs leading-relaxed tracking-widest text-[#c5cce2] sm:text-sm">
                  Sadar akan persoalan-persoalan besar dan mendasar, PT
                  Minilemon Nusantara berinisitatif membuat produk-produk anak
                  yang berupa tontonan dan permainan, dengan target usia 3-7
                  tahun.
                </motion.p>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fourthDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center bg-[#d6f4df]"
            >
              <motion.div className="flex max-w-screen-640 flex-col items-start justify-center gap-4 px-6 py-4">
                <motion.div>
                  <Image
                    src={ConceptTitle}
                    alt="Concept"
                    className="w-[160px] sm:w-[180px]"
                  />
                </motion.div>
                <motion.p className="text-start leading-relaxed tracking-widest">
                  Minilemon adalah kisah 6 sahabat sepermainan yang berasal dari
                  suku berbeda-beda yaitu Jawa, Sunda, Papua, Tionghoa, Batak
                  dan Bali. meskipun berbeda Minilemon selalu mengedepankan
                  sikap toleransi dan gotong royong, sehingga saling melengkapi
                  satu dan lainnya dalam setiap kisah yang mekea lalui.
                </motion.p>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fifthDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-end bg-[#f1d9d3]"
            >
              <motion.div className="flex max-w-screen-640 flex-col items-end justify-end gap-4 px-6 py-4">
                <motion.div className="">
                  <Image
                    src={PsychographicTitle}
                    alt="Psychographic"
                    className="w-[250px] sm:w-[270px]"
                  />
                </motion.div>
                <motion.p className="text-end leading-relaxed tracking-widest">
                  Membangun pola pikir positif di dalam pertumbuhan anak yang
                  suka bermain, imajinatif, hidup dalam dunia angan-angan, tidak
                  suka larangan, mempunyai sifat ingin tahu dan bersemangat
                  untuk coba-coba.
                </motion.p>
              </motion.div>
              <ButtonLegacy.Primary
                className={cn(
                  isExpanded === true ? "flex" : "hidden",
                  "mb-7 mt-3 scale-90",
                )}
                onClick={() => {
                  toggleExpand();
                  scrollToHeader();
                }}
              >
                Read Less
              </ButtonLegacy.Primary>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
