"use client";

import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { Placeholder } from "placeholder";
import { useEffect, useRef, useState } from "react";

import { Button as ButtonLegacy } from "@/components/ui/button-sec";
import { Studio, Agency, Academy, Technology } from "@/data/contribution";
import useUpdateCurrentLink from "@/hooks/useUpdateCurrentLink";
// import { containerVariants } from "@/lib/animations/containerVariants";
import {
  fifthDivVariants,
  fourthDivVariants,
  secondDivVariants,
  sixthDivVariants,
  thirdDivVariants,
} from "@/lib/animations/divVariants";
import { paragraphVariants } from "@/lib/animations/paragraphVariants";
import { cn } from "@/lib/utils";

import BackgroundCompany from "@/public/background/company-mobile.png";
import Heri from "@/public/contributors/Heri.jpg";
import Reno from "@/public/contributors/Reno.jpg";
import MisiTitle from "@/public/title/misi.png";
import PlanetAgencyTitle from "@/public/title/planet-agency.png";
import PlanetStudioTitle from "@/public/title/planet-studio.png";
import PlanetAcademyTitle from "@/public/title/planet-academy.png";
import PlanetTechnology from "@/public/title/planet-technology.png";
import VisiTitle from "@/public/title/visi.png";
import MinilemonUniverse from "@/public/title/minilemon-universe.png";
import FounderTitle from '@/public/title/the-founder.png';
import Wathin from "@/public/contributors/Watin.jpg";
// import CoFounderTitle from "@/public/title/co-founder.png";
// import OurFamilyTile from "@/public/title/our-family.png";
// import OurHeroTile from "@/public/title/our-hero.png";
// import PtMinilemonNusantaraMobileTitle from "@/public/title/pt-minilemon-nusantara-mobile-1.png";
// import TheFounderTitle from "@/public/title/the-founder.png";

function CompanySection() {
  const [isMounted, setIsMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { currentLink, setCurrentLink } = useUpdateCurrentLink();

  const refInView = useRef(null);
  const companyInView = useInView(refInView, {
    amount: 1,
  });

  useEffect(() => {
    if (companyInView) {
      setCurrentLink("#company");
    }
  }, [companyInView, currentLink, setCurrentLink]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    if (isExpanded && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const scrollToHeader = () => {
    setTimeout(() => {
      const titleElement = document.getElementById("company");
      if (titleElement) {
        const yOffset = -16;
        const yPosition =
          titleElement.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <div>
      <div className="relative flex h-full items-center justify-center bg-cover bg-center py-6">
        <Image
          src={BackgroundCompany}
          alt="BackgroundCompany"
          quality={100}
          fill
          sizes="100vw"
          className="absolute inset-0"
          objectFit="cover"
        />
        <div className="z-10 flex max-w-screen-640 flex-col justify-center gap-y-4 px-6 pt-3">
          <div ref={scrollRef} id="company" className="z-10">
            <Image
              ref={refInView}
              src={MinilemonUniverse}
              alt="MinilemonUniverse"
              className="w-[240px] 400:w-[290px]"
            />
          </div>
          <div className="z-10 leading-7 tracking-widest text-[#c5cce2]">
            <p>
              Minilemon Universe merupakan cakrawala sejati yang berorientasi pada
              Pendidikan Karakter Anak dan nilai - nilai kebaikan melalui berbagai
              Program Pendidikan berbasis seni, hiburan dan teknologi.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#e7e7e7] py-4">
        <div className="flex max-w-screen-640 flex-col items-center px-6 py-3 leading-7 tracking-widest">
          <p>
            Di dalam Minilemon Universe terdapat Planet Agency, Planet Sudio,
            Planet Academy dan Planet Software,  yang terus melakukan pendekatan
            terhadap Pendidikan, mulai dari film animasi, game, panggung boneka,
            podcast parenting dan berbagai macam program lainnya yang membawa
            karakter positif bagi anak-anak.
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
            {/* <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center bg-[#e7e7e7] pb-5"
            >
              <motion.div className="flex max-w-screen-640 flex-col items-end justify-end gap-4 px-6 pb-4">
                <motion.p
                  className="leading-7 tracking-widest"
                  variants={paragraphVariants}
                >
                  PT. Minilemon Nusantara adalah perusahaan persero terbatas
                  yang merupakan bagian dari dTopeng Kingdom Foundation, sebuah
                  Yayasan yang memiliki Visi dan Misi dalam penyelamatan
                  nilai-nilai Sejarah dan Budaya serta benda- benda artefak yang
                  memiliki nilai sejarah bagi bangsa Indonesia dengan melakukan
                  pembangunan Museum di berbagai tempat di Indonesia.
                </motion.p>
              </motion.div>
            </motion.div> */}
            <motion.div
              variants={secondDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center bg-[#1b1b1b]"
            >
              <motion.div className="flex max-w-screen-640 flex-col items-center justify-center gap-4 px-6 py-4">
                <motion.div>
                  <Image
                    src={VisiTitle}
                    alt="VisiTitle"
                    className="scale-[0.7]"
                  />
                </motion.div>
                <motion.p
                  className="max-w-screen-640 text-start text-sm leading-7 tracking-widest text-[#c5cce2]"
                  variants={paragraphVariants}
                >
                  Sebagai anak bangsa yang baik dan cinta tanah air, Minilemon mengambil
                  tanggung jawab untuk berkontribusi memberikan edukasi dan harapan
                  untuk kemajuan bangsa.Dengan menciptakan &quot;Good character&quot;
                  Minilemon diharapkan dapat berperan kreatif untuk mempersiapkan
                  generasi muda dan anak-anak Indonesia yang tangguh, cinta tanah air,
                  dengan membawa nilai - nilai kebaikan dan budaya yang merupakan warisan
                  yang selalu kita banggakan.
                </motion.p>
              </motion.div>
              <motion.div className="flex max-w-screen-640 flex-col items-center justify-center gap-4 px-6 py-4">
                <motion.div>
                  <Image
                    src={MisiTitle}
                    alt="MisiTitle"
                    className="scale-[0.7]"
                  />
                </motion.div>
                <motion.div className="max-w-screen-640 text-start">
                  <motion.ul>
                    <motion.li>
                      <motion.p
                        className="text-sm leading-7 tracking-widest text-[#c5cce2]"
                        variants={paragraphVariants}
                      >
                        1. Menciptakan produk kreatif dan edukatif yang
                        berkelanjutan.
                      </motion.p>
                    </motion.li>
                    <motion.li>
                      <motion.p
                        className="text-sm leading-7 tracking-widest text-[#c5cce2]"
                        variants={paragraphVariants}
                      >
                        2. Membangun ekosistem yang mandiri, kreatif dan punya
                        daya saing kuat di kanca internasional
                      </motion.p>
                    </motion.li>
                    <motion.li>
                      <motion.p
                        className="text-sm leading-7 tracking-widest text-[#c5cce2]"
                        variants={paragraphVariants}
                      >
                        3. Membangun sistem integrasi dengan teknologi yang
                        friendy, trasparan, terukur dengan jangkauan yang luas
                      </motion.p>
                    </motion.li>
                  </motion.ul>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={thirdDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center bg-[#a4bcdc]"
            >
              <motion.div className="flex max-w-screen-640 flex-col items-center justify-center gap-4 px-2 py-4">
                <motion.div>
                  <Image
                    src={FounderTitle}
                    alt="FounderTitle"
                    className="h-[40px] w-auto"
                  />
                </motion.div>
                <motion.div className="max-w-screen-640 flex flex-col gap-x-5 gap-y-[1.5rem] justify-start items-start text-start text-sm leading-7 tracking-widest text-[#000] sm:gap-20">
                  <div className="flex flex-col items-center gap-6 text-sm leading-7 tracking-widest text-black">
                    <div className="flex justify-center gap-6">
                      {[{ src: Reno, alt: 'Reno Halsamer', name: 'Reno Halsamer' },
                      { src: Heri, alt: 'Heriyadi Natawijaya', name: 'Heriyadi Natawijaya' }]
                        .map(({ src, alt, name }, i) => (
                          <div key={i} className="flex flex-col items-center gap-2">
                            <div className="relative min-w-[175px] min-h-[230px]">
                              <Image src={src} alt={alt} fill className="object-cover" />
                            </div>
                            <span className="text-[0.7rem] tracking-widest text-center">{name}</span>
                          </div>
                        ))}
                    </div>

                    {/* Bottom center image */}
                    <div className="flex justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative min-w-[175px] min-h-[230px]">
                          <Image src={Wathin} alt="Wathin Ciptawan" fill className="object-cover" />
                        </div>
                        <span className="text-[0.7rem] tracking-widest text-center">Wathin Ciptawan</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={thirdDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center bg-[#d3def4]"
            >
              <motion.div className="flex max-w-screen-640 flex-col items-center justify-center gap-4 px-6 py-4">
                <motion.div>
                  <Image
                    src={PlanetAgencyTitle}
                    alt="PlanetAgencyTitle"
                    className="h-[40px] w-auto"
                  />
                </motion.div>
                <motion.div className="grid max-w-screen-640 grid-cols-2 gap-x-5 gap-y-[1.5rem] text-start text-sm leading-7 tracking-widest text-[#000] sm:gap-20">
                  {Agency.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex w-[140px] flex-col items-center justify-start gap-2"
                    >
                      {/* <motion.img
                              src="https://picsum.photos/id/200/200/250?grayscale"
                              alt="Founder Image"
                              className="w-full"
                            /> */}

                      <div className="flex w-full">
                        {/* sm:h-[200px] sm:w-[160px] */}
                        {item.photo ? (
                          <Image
                            height={180}
                            src={item.photo}
                            alt={item.name}
                          />
                        ) : (
                          <Placeholder
                            height={200}
                            width={160}
                            text="160 x 200"
                          />
                        )}
                      </div>
                      <motion.p className="text-nowrap text-center text-[0.6rem] leading-[1rem] tracking-widest sm:text-sm">
                        {item.name}
                      </motion.p>
                      <motion.p className="text-nowrap text-center text-[0.6rem] font-bold uppercase leading-[1rem] tracking-normal 400:tracking-normal sm:text-sm">
                        {/* {item.position} */}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fourthDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center bg-[#1b1b1b]"
            >
              <motion.div className="flex max-w-screen-640 flex-col items-center justify-center gap-4 px-6 py-4">
                <motion.div>
                  <Image
                    src={PlanetStudioTitle}
                    alt="PlanetStudioTitle"
                    className="h-[40px] w-auto"
                  />
                </motion.div>
                <motion.div className="grid max-w-screen-640 grid-cols-2 gap-x-5 gap-y-[1.5rem] text-start text-sm leading-7 tracking-widest text-[#c5cce2] sm:gap-20">
                  {Studio.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex w-[140px] flex-col items-center justify-start gap-2"
                    >
                      {/* <motion.img
                              src="https://picsum.photos/id/200/200/250?grayscale"
                              alt="Founder Image"
                              className="w-full"
                            /> */}

                      <div className="flex w-full">
                        {/* sm:h-[200px] sm:w-[160px] */}
                        {item.photo ? (
                          <Image
                            height={180}
                            src={item.photo}
                            alt={item.name}
                          />
                        ) : (
                          <Placeholder
                            height={200}
                            width={160}
                            text="160 x 200"
                          />
                        )}
                      </div>
                      <motion.p className="text-nowrap text-center text-[0.6rem] leading-[1rem] tracking-widest sm:text-sm">
                        {item.name}
                      </motion.p>
                      <motion.p className="text-nowrap text-center text-[0.6rem] font-bold uppercase leading-[1rem] tracking-normal 400:tracking-normal sm:text-sm">
                        {/* {item.position} */}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fifthDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center bg-[#fff4ec]"
            >
              <motion.div className="flex max-w-screen-640 flex-col items-center justify-center gap-4 px-6 py-4">
                <motion.div>
                  <Image
                    src={PlanetAcademyTitle}
                    alt="PlanetAcademyTitle"
                    className="h-[40px] w-auto"
                  />
                </motion.div>
                <motion.div className="grid max-w-screen-640 grid-cols-2 gap-x-5 gap-y-[1.5rem] text-start text-sm leading-7 tracking-widest text-[#c5cce2] sm:gap-20">
                  {Academy.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex w-[140px] flex-col items-center justify-start gap-2"
                    >
                      {/* <motion.img
                              src="https://picsum.photos/id/200/200/250?grayscale"
                              alt="Founder Image"
                              className="w-full"
                            /> */}

                      <div className="flex w-full">
                        {/* sm:h-[200px] sm:w-[160px] */}
                        {item.photo ? (
                          <Image
                            height={180}
                            src={item.photo}
                            alt={item.name}
                          />
                        ) : (
                          <Placeholder
                            height={200}
                            width={160}
                            text="160 x 200"
                          />
                        )}
                      </div>
                      <motion.p className="text-nowrap text-center text-black text-[0.6rem] leading-[1rem] tracking-widest sm:text-sm">
                        {item.name}
                      </motion.p>
                      <motion.p className="text-nowrap text-center text-[0.6rem] font-bold uppercase leading-[1rem] tracking-normal 400:tracking-normal sm:text-sm">
                        {/* {item.position} */}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={sixthDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center bg-[#1b1b1b]"
            >
              <motion.div className="flex max-w-screen-640 flex-col items-center justify-center gap-4 px-6 py-4">
                <motion.div>
                  <Image
                    src={PlanetTechnology}
                    alt="PlanetTechnology"
                    className="h-[40px] w-auto"
                  />
                </motion.div>
                <motion.div className="grid max-w-screen-640 grid-cols-2 gap-x-5 gap-y-[1.5rem] text-start text-sm leading-7 tracking-widest text-[#c5cce2] sm:gap-20">
                  {Technology.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex w-[140px] flex-col items-center justify-start gap-2"
                    >
                      {/* <motion.img
                              src="https://picsum.photos/id/200/200/250?grayscale"
                              alt="Founder Image"
                              className="w-full"
                            /> */}

                      <div className="flex w-full">
                        {/* sm:h-[200px] sm:w-[160px] */}
                        {item.photo ? (
                          <Image
                            height={180}
                            src={item.photo}
                            alt={item.name}
                          />
                        ) : (
                          <Placeholder
                            height={200}
                            width={160}
                            text="160 x 200"
                          />
                        )}
                      </div>
                      <motion.p className="text-nowrap text-center text-[0.6rem] leading-[1rem] tracking-widest sm:text-sm">
                        {item.name}
                      </motion.p>
                      <motion.p className="text-nowrap text-center text-[0.6rem] font-bold uppercase leading-[1rem] tracking-normal 400:tracking-normal sm:text-sm">
                        {/* {item.position} */}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <ButtonLegacy.Primary
                className={cn(
                  isExpanded === true ? "flex" : "hidden",
                  "my-7 scale-90",
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

export default CompanySection;
