"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Placeholder } from "placeholder";
import { useEffect, useState } from "react";

import Contact from "@/components/contact";
import { Button as ButtonLegacy } from "@/components/ui/button-sec";
import DividerBlue from "@/components/ui/divider/divider-blue";
import { charactersData } from "@/data/characters";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { cn } from "@/lib/utils";
import CoverPanggungBonekaMinilemon from "@/public/product/panggung-boneka-minilemon.png";
import CoverPetualanganMinilemon from "@/public/product/petualangan-minilemon.png";
import CoverPostParenting from "@/public/product/poster-parenting.png";
import CoverSaveTheEarth from "@/public/product/save-the-earth.png";
import ConceptTitle from "@/public/title/concept.png";
import MessageTitle from "@/public/title/message.png";
import MinilemonTitle from "@/public/title/minilemon-1.png";
import OurProductTitle from "@/public/title/our-product-1.png";
import PsychographicTitle from "@/public/title/psychographic.png";
import TreatmentTitle from "@/public/title/treatment.png";

import BackgroundAboutUs from "@/public/background/about-mobile.png";
import BackgroundCharacter from "@/public/background/character-mobile.png";
import BackgroundCompany from "@/public/background/company-mobile.png";
import BackgroundProduct from "@/public/background/product-mobile.png";
import BackgroundStory from "@/public/background/story-mobile.png";
import CharacterTitle from "@/public/title/characters-1.png";
import IdeaTitle from "@/public/title/idea.png";
import StoryTitle from "@/public/title/story-2.png";
// import ProductTitle from "@/public/title/our-product-1.png";
import Slider from "@/components/ui/slider";
import CompanyTitle from "@/public/title/company.png";
import Link from "next/link";
// import ContactTitle from "@/public/title/contact-us-1.png";
import ContactMobile from "@/components/contact-mobile";
import { Hero } from "@/data/contribution";
import CoFounderTitle from "@/public/title/co-founder.png";
import MisiTitle from "@/public/title/misi.png";
import OurFamilyTile from "@/public/title/our-family.png";
import OurHeroTile from "@/public/title/our-hero.png";
import PtMinilemonNusantaraMobileTitle from "@/public/title/pt-minilemon-nusantara-mobile-1.png";
import TheFounderTitle from "@/public/title/the-founder.png";
import VisiTitle from "@/public/title/visi.png";

export default function Home() {
  const router = useRouter();
  const screenWidth = useScreenWidth();
  const [mounted, setMounted] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  // const [isExpanded3, setIsExpanded3] = useState(false);
  // const [isExpanded4, setIsExpanded4] = useState(false);

  const toggleExpand1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const toggleExpand2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  // const toggleExpand3 = () => {
  //   setIsExpanded3(!isExpanded3);
  // };

  // const toggleExpand4 = () => {
  //   setIsExpanded4(!isExpanded4);
  // };

  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const secondDivVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5, // Delay the animation of the second div
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        delay: 0, // No delay on exit
      },
    },
  };

  const thirdDivVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1, // Delay the animation of the third div
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        delay: 0, // No delay on exit
      },
    },
  };

  const fourthDivVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5, // Delay the animation of the fourth div
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        delay: 0, // No delay on exit
      },
    },
  };

  const fifthDivVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2, // Delay the animation of the fifth div
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        delay: 0, // No delay on exit
      },
    },
  };

  // const sixthDivVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       delay: 2.5, // Delay the animation of the sixth div
  //     },
  //   },
  //   exit: {
  //     opacity: 0,
  //     y: 20,
  //     transition: {
  //       delay: 0, // No delay on exit
  //     },
  //   },
  // };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {screenWidth < 1024 ? (
        <div className="text-xs">
          {/* About Us Section */}
          <div className="">
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
              <div className="z-10 flex max-w-screen-tablet flex-col justify-center gap-y-4 px-6 pb-5 pt-10">
                <div className="z-10">
                  <Image src={IdeaTitle} alt="Idea" className="w-[70px]" />
                </div>
                <div className="z-10 leading-relaxed tracking-widest text-[#c5cce2]">
                  <p>
                    Berawal dari cinta dan bangga akan warisan budaya khusunya
                    topeng yang merupakan penutup wajah dari setiap Suku di
                    Indonesia.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#f2e3fe]">
              <div className="flex max-w-screen-tablet flex-col items-center px-6 py-5 leading-relaxed tracking-widest">
                <p>
                  Reno Halsamer (Founder dTopeng Kingdom Foundation) melalui
                  perjalanan panjanga telah menciptakan tokoh animasi (fiksi)
                  dengan memadukan topeng sebagai wajah indonesia dan tubuh
                  lemon yang merupakan buah dengan banyak manfaat bagi kesehatan
                </p>
                <ButtonLegacy.Primary
                  className={cn(
                    isExpanded1 === true ? "hidden" : "flex",
                    "mt-4 scale-90",
                  )}
                  onClick={toggleExpand1}
                >
                  See More
                </ButtonLegacy.Primary>
              </div>
            </div>
            <AnimatePresence>
              {isExpanded1 && (
                <>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center bg-[#f1e3fe]"
                  >
                    <motion.div className="flex max-w-screen-tablet flex-col items-end justify-end gap-4 px-6 py-4">
                      <motion.p
                        className="leading-relaxed tracking-widest"
                        variants={paragraphVariants}
                      >
                        Bernama Minilemon dengan harapan dapat memberi manfaat
                        positif bai anak-anak indonesia dalam belaja Sejarah,
                        Budaya, hormat kepada orangtua, gotong royong,
                        menghargai perbedaan, cinta Bangsa dan Negara, serta
                        ikut serta dalam penyelamatan Lingkungan hidup di dunia.
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
                    <motion.div className="flex max-w-screen-tablet flex-col items-end justify-end gap-4 px-6 py-4">
                      <motion.div className="">
                        <Image
                          src={MessageTitle}
                          alt="Message"
                          className="w-[190px]"
                        />
                      </motion.div>
                      <motion.p className="text-end leading-relaxed tracking-widest">
                        minimnya hiburan yang mengedepankan kualitas dan edukasi
                        kepada anak-anak Indonesia, Minilemon berharap mampu
                        menjadi idola baru, menanamkan nilai-nilai positif di
                        banyak platform dan gadget yang merupakan kebutuhan gen
                        z saat ini.
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
                    <motion.div className="flex max-w-screen-tablet flex-col items-center justify-center gap-4 px-6 py-4">
                      <motion.div>
                        <Image
                          src={TreatmentTitle}
                          alt="Treatment"
                          className="scale-[0.7]"
                        />
                      </motion.div>
                      <motion.p className="max-w-screen-tablet text-center text-sm leading-relaxed tracking-widest text-[#c5cce2]">
                        Sadar akan persoalan-persoalan besar dan mendasar, PT
                        Minilemon Nusantara berinisitatif membuat produk-produk
                        anak yang berupa tontonan dan permainan, dengan target
                        usia 3-7 tahun.
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
                    <motion.div className="flex max-w-screen-tablet flex-col items-start justify-center gap-4 px-6 py-4">
                      <motion.div>
                        <Image
                          src={ConceptTitle}
                          alt="Concept"
                          className="w-[200px]"
                        />
                      </motion.div>
                      <motion.p className="text-start leading-relaxed tracking-widest">
                        Minilemon adalah kisah 6 sahabat sepermainan yang
                        berasal dari suku berbeda-beda yaitu Jawa, Sunda, Papua,
                        Tionghoa, Batak dan Bali. meskipun berbeda Minilemon
                        selalu mengedepankan sikap toleransi dan gotong royong,
                        sehingga saling melengkapi satu dan lainnya dalam setiap
                        kisah yang mekea lalui.
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
                    <motion.div className="flex max-w-screen-tablet flex-col items-end justify-end gap-4 px-6 py-4">
                      <motion.div className="">
                        <Image
                          src={PsychographicTitle}
                          alt="Psychographic"
                          className="w-[250px]"
                        />
                      </motion.div>
                      <motion.p className="text-end leading-relaxed tracking-widest">
                        Membangun pola pikir positif di dalam pertumbuhan anak
                        yang suka bermain, imajinatif, hidup dalam dunia
                        angan-angan, tidak suka larangan, mempunyai sifat ingin
                        tahu dan bersemangat untuk coba-coba.
                      </motion.p>
                    </motion.div>
                    <ButtonLegacy.Primary
                      className={cn(
                        isExpanded1 === true ? "flex" : "hidden",
                        "my-7 scale-90",
                      )}
                      onClick={toggleExpand1}
                    >
                      Read Less
                    </ButtonLegacy.Primary>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Story Section */}
          <div>
            <div className="relative flex h-full items-center justify-center bg-[#060816] bg-cover bg-center">
              <Image
                src={BackgroundStory}
                alt="Background Story"
                quality={100}
                fill
                sizes="100vw"
                className="absolute inset-0"
                objectFit="cover"
              />
              <div className="z-10 flex max-w-screen-tablet flex-col justify-center gap-y-4 px-6 py-4">
                <div className="z-10">
                  <Image src={StoryTitle} alt="Story" className="w-[100px]" />
                </div>
                <div className="z-10 flex flex-col gap-y-6 leading-relaxed tracking-widest text-[#c5cce2]">
                  <p>
                    Berawal dari kisah Kakek Djoyo yang merupakan seorang
                    pangeran sah penerus tahta ayahnya, seorang raja di tanah
                    Jawa. Sejak kecil, Pangeran Djoyo sudah kehilangan ibunya,
                    seorang permaisuri yang meninggal karena sakit.
                    Keberadaannya sebagai pewaris sah menjadi ancaman bagi
                    saudara-saudaranya yang berlomba merebut tahta dengan penuh
                    intrik dan tipu muslihat yang jahat.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#d4e1f4]">
              <div className="flex max-w-screen-tablet flex-col items-center px-6 py-4 leading-relaxed tracking-widest">
                <p>
                  Dengan hati yang berat, Pangeran Djoyo memutuskan untuk
                  meninggalkan istana dan memulai perjalanan panjang untuk
                  mencari ilmu dan kedamaian.
                </p>
                <ButtonLegacy.Primary
                  className={cn(
                    isExpanded2 === true ? "hidden" : "flex",
                    "mt-4 scale-90",
                  )}
                  onClick={toggleExpand2}
                >
                  See More
                </ButtonLegacy.Primary>
              </div>
              {isExpanded2 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="flex max-w-screen-tablet flex-col gap-y-4 bg-[#d4e1f4] px-6 py-4 leading-relaxed tracking-widest"
                >
                  <motion.p variants={paragraphVariants}>
                    Suatu malam, dalam perjalanannya melewati hutan yang lebat,
                    Pangeran Djoyo tersesat dan ia mendengar sayup-sayup suara
                    yang memanggil namanya, &quot;Djoyo... Djoyo...
                    Djoyo...&quot; karena penasaran, Pangeran Djoyo mengikutinya
                    hingga tiba di depan sebuah gua.
                  </motion.p>
                  <motion.p variants={paragraphVariants}>
                    Hujan mulai turun, lalu Djoyo memutuskan untuk berteduh di
                    dalam gua tersebut, karena gelap dan licin, Djoyo tak
                    sengaja tergelincir dan jatuh ke dalam lubang yang sangat
                    dalam.
                  </motion.p>
                  <motion.p variants={paragraphVariants}>
                    Saat jatuh ribuan meter, Pangeran Djoyo kehilangan
                    kesadaran, ia merasa ada sesuatu yang menjaganya dan
                    melindungi tubuhnya hingga akhirnya tiba di dunia yang
                    asing, dunia purba yang penuh misteri dengan pohon-pohon
                    yang menjulang tinggi ke langit. Di sana terdapat kolam
                    dengan sumber air berwarna hijau, serta sistem cuaca yang
                    berbeda dari yang diketahuinya.
                  </motion.p>
                  <motion.p variants={paragraphVariants}>
                    Pangeran Djoyo mulai merasa lapar dan berusaha mencari
                    makanan. Di tengah pencariannya, ia menemukan sebuah gua
                    tersembunyi di antara hutan pohon lemon. Ia memutuskan untuk
                    beristirahat di sana, sambil menikmati buah lemon segar yang
                    menyelamatkannya dari rasa lapar dan dahaga di tengah hutan
                    purba.
                  </motion.p>
                  <motion.p variants={paragraphVariants}>
                    Demi tahun berlalu, Pangeran Djoyo terlihat semakin tua dan
                    mulai tinggal di tengah hutan purba. Ia mengisi waktu dengan
                    bercocok tanam dan menjaga hutan lemon dari serangan kera
                    dan kelelawar yang sering muncul di malam hari.
                  </motion.p>
                  <motion.p variants={paragraphVariants}>
                    Untuk mengobati rasa rindu pada keluarga dan
                    sahabat-sahabatnya, Kakek Djoyo mulai membuat topeng-topeng
                    dari bahan yang ada di sekitarnya. Kecintaannya dengan
                    Nusantara membuat gua yang ia tinggali dihiasi ribuan topeng
                    wajah dari kesukuan yang berbeda-beda.
                  </motion.p>
                  <motion.p variants={paragraphVariants}>
                    Pada suatu malam, Kakek Djoyo tertidur lelap dan bermimpi.
                    di dalam mimpinya ia melihat 6 topengnya hidup dan menjelma
                    menjadi karakter anak-anak dengan tubuh buah lemon yang ia
                    sebut MINILEMON.
                  </motion.p>
                  <motion.p variants={paragraphVariants}>
                    Kakek Djoyo senang dan tertawa melihat anak-anak Minilemon.
                    Walau wajahnya berasal dari suku yang berbeda, Minilemon
                    bermain Bersama dengan penuh semangat, saling menghormati
                    dan bergotong royong.
                  </motion.p>
                  <motion.p variants={paragraphVariants}>
                    Kerinduannya menyebarkan nilai-nilai kebaikan dan keragaman
                    budaya terpancar dari pribadi Wayan (Bali), Togar (Batak),
                    Ucup (Sunda), Slamet (Jawa), Memey (Tionghoa) dan Minggus
                    (Papua) , mereka adalah 6 sahabat sepermainan yang siap
                    menjadi idola baru untuk anak-anak Indonesia.
                  </motion.p>
                  <ButtonLegacy.Primary
                    className={cn(
                      isExpanded2 === true ? "flex" : "hidden",
                      "scale-90",
                    )}
                    onClick={toggleExpand2}
                  >
                    Read Less
                  </ButtonLegacy.Primary>
                </motion.div>
              )}
            </div>
          </div>

          {/* Character Section */}
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
              <div className="z-10 flex max-w-screen-tablet flex-col justify-center gap-y-4 px-6 py-4">
                <div className="z-10">
                  <Image
                    src={CharacterTitle}
                    alt="Character"
                    className="w-[200px]"
                  />
                </div>
                <div className="z-10 flex flex-col gap-y-6 leading-relaxed tracking-widest text-[#c5cce2]">
                  <p>
                    Minilemon adalah animasi perpaduan topeng dan buah lemon
                    yang hidup di dalam mimpi kakek Djoyo, terdiri dari 6
                    karakter utama yang mewakili 6 suku besar di Indonesia,
                    yaitu Wayan (Bali), Togar (Batak), Ucup (Sunda), Slamet
                    (Jawa), Memey (Tionghoa) dan Minggus (Papua). Selain itu ada
                    karakter lain seperti Bibie, Tigor, Amink dan RU-D1 (Robot
                    ciptaan Bibie) yang meramaikan kisah perjalanan si
                    Minilemon.
                  </p>
                </div>
              </div>
            </div>
            {/* Change character picture and status */}
            <div className="flex justify-center bg-[#dedede]">
              <div className="max-w-screen-tablet px-6 py-12">
                <Splide
                  options={{
                    type: "loop",
                    interval: 4000,
                    perPage: 1,
                    perMove: 1,
                    gap: "5rem",
                    focus: "center",
                    pagination: false,
                    autoplay: true,
                    arrows: false,
                  }}
                >
                  {charactersData.map((character) => (
                    <SplideSlide key={character.id}>
                      <div className="flex h-full max-w-screen-tablet flex-col gap-y-4">
                        <div className="flex flex-1 basis-1/2 flex-row">
                          <div className="basis-1/2">
                            <Image
                              src={character.image}
                              alt={character.fullName}
                            />
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
                              <Slider
                                value={character.strong}
                                slider="bg-[#ededed]"
                              >
                                Strong
                              </Slider>
                              <Slider
                                value={character.logic}
                                slider="bg-[#ededed]"
                              >
                                Logic
                              </Slider>
                              <Slider
                                value={character.creative}
                                slider="bg-[#ededed]"
                              >
                                Creative
                              </Slider>
                              <Slider
                                value={character.luck}
                                slider="bg-[#ededed]"
                              >
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

          {/* Product Section */}
          <div>
            <div className="relative flex flex-col items-center justify-center bg-cover bg-center py-4">
              <Image
                src={BackgroundProduct}
                alt="Background Product"
                fill
                sizes="100vw"
                className="absolute inset-0"
                objectFit="cover"
              />
              <div className="z-10 flex max-w-screen-tablet flex-col justify-center gap-y-4 px-6">
                <div className="z-10">
                  <Image
                    src={OurProductTitle}
                    alt="Our Product"
                    className="w-[200px]"
                  />
                </div>
                <div className="z-10 flex flex-col leading-relaxed tracking-widest text-[#d3dcf3]">
                  <p>
                    Di era modernisasi dan selera yang semakin beragam,
                    Minilemon memproduksi banyak varian produk digital maupun
                    konvensional, agar nilai-nilai edukasi dan karakter positif,
                    dapat menjangkau ke banyak penggemar khususnya anak-anak
                    usia 3 sampai 7 tahun.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-4 bg-[#1b1b1b] p-6">
              <div className="flex items-center justify-center">
                <Image
                  src={CoverPetualanganMinilemon}
                  alt="Petualangan Minilemon"
                  className="h-[492px] w-[350px]"
                />
              </div>
              <div className="flex max-w-[350px] flex-col gap-y-6 text-xs leading-loose tracking-wider text-[#c0cbdf]/90">
                <p>
                  Petualangan Minilemon dimulai dari keceroohan Ucup dan Togar
                  yang tanpa sengaja memicu kejar-kerjaran menegangkan dengan
                  sekelompok angsa marah. Dalam kekacauan itu, Ucup terpisah dan
                  menghilang setelah menemukan mesin portal misterius diruang
                  rahasia Kak Bibie.
                </p>
                <p>
                  Dengan kejadian itu, Anaak-anak Minilemon mulai bersatu dan
                  siap bertualang mencari Ucup dengan bantuan Kak Bibie dan
                  Paman Tigor.{" "}
                  <Link
                    className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
                    href="javascript:void(0)"
                  >
                    <span className={isExpanded1 == true ? "hidden" : "flex"}>
                      Read More{" "}
                      <span className="ml-1 flex items-center text-xs">❯</span>
                    </span>
                  </Link>
                </p>
              </div>
              <div>Trailer</div>
            </div>
          </div>
          {/* Company Section */}
          <div className="">
            <div className="relative flex h-full items-center justify-center bg-cover bg-center py-10">
              <Image
                src={BackgroundCompany}
                alt="BackgroundCompany"
                quality={100}
                fill
                sizes="100vw"
                className="absolute inset-0"
                objectFit="cover"
              />
              <div className="z-10 flex max-w-screen-tablet flex-col justify-center gap-y-4 px-6 py-4">
                <div className="z-10">
                  <Image
                    src={PtMinilemonNusantaraMobileTitle}
                    alt="PtMinilemonNusantaraMobileTitle"
                    className="w-[270px]"
                  />
                </div>
                <div className="z-10 leading-relaxed tracking-widest text-[#c5cce2]">
                  <p>
                    PT. Minilemon Nusantaraadlah perusahaan yang berdomisili di
                    Surabaya dan Jakarta, Indonesia. Yang berorientasi pada
                    Pendidikan Karakter Anak dan nilai-nilai kebaikan memlalui
                    berbagai Program Pendidikan berbasis seni, hiburan, dan
                    teknologi.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#e7e7e7] pt-5">
              <div className="flex max-w-screen-tablet flex-col items-center px-6 py-3 leading-relaxed tracking-widest">
                <p>
                  Beragam program dikerjakan PT. Minilemon Nusantara untuk terus
                  melakukan pendekatan terhadap pendidikan, mulai dari film
                  animasi, game, panggung boneka, podcast parenting dan berbagai
                  macam progam lainnya yang membawa karakter positif bagi
                  anak-anak.
                </p>
                <ButtonLegacy.Primary
                  className={cn(
                    isExpanded1 === true ? "hidden" : "flex",
                    "mt-4 scale-90",
                  )}
                  onClick={toggleExpand1}
                >
                  See More
                </ButtonLegacy.Primary>
              </div>
            </div>
            <AnimatePresence>
              {isExpanded1 && (
                <>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center bg-[#e7e7e7] pb-5"
                  >
                    <motion.div className="flex max-w-screen-tablet flex-col items-end justify-end gap-4 px-6 py-4">
                      <motion.p
                        className="leading-relaxed tracking-widest"
                        variants={paragraphVariants}
                      >
                        PT. Minilemon Nusantara adalah perusahaan persero
                        terbatas yang merupakan bagian dari dTopeng Kingdom
                        Foundation, sebuah Yayasan yang memiliki Visi dan Misi
                        dalam penyelamatan nilai-nilai Sejarah dan Budaya serta
                        benda- benda artefak yang memiliki nilai sejarah bagi
                        bangsa Indonesia dengan melakukan pembangunan Museum di
                        berbagai tempat di Indonesia.
                      </motion.p>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    variants={secondDivVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center bg-[#1b1b1b] py-5"
                  >
                    <motion.div className="flex max-w-screen-tablet flex-col items-center justify-center gap-4 px-6 py-4">
                      <motion.div>
                        <Image
                          src={VisiTitle}
                          alt="VisiTitle"
                          className="scale-[0.7]"
                        />
                      </motion.div>
                      <motion.p
                        className="max-w-screen-tablet text-start text-sm leading-relaxed tracking-widest text-[#c5cce2]"
                        variants={paragraphVariants}
                      >
                        Sebagai anak bangsa yang baik dan cinta tanah air, PT
                        Minilemon Nusantara mengambil tanggung jawab untuk
                        berkontribusi memberikan edukasi dan harapan untuk
                        kemajuan bangsa. Dengan menciptakan &quot;Good
                        character&quot; PT Minilemon Nusantara diharapkan dapat
                        berperan kreatif untuk mempersiapkan generasi muda dan
                        anak-anak Indonesia yang tangguh, cinta tanah air,
                        dengan membawa nilai-nilai kebaikan dan budaya yang
                        merupakan warisan yang selalu kita banggakan.
                      </motion.p>
                    </motion.div>
                    <motion.div className="flex max-w-screen-tablet flex-col items-center justify-center gap-4 px-6 py-4">
                      <motion.div>
                        <Image
                          src={MisiTitle}
                          alt="MisiTitle"
                          className="scale-[0.7]"
                        />
                      </motion.div>
                      <motion.p className="max-w-screen-tablet text-start">
                        <motion.ul>
                          <motion.li>
                            <motion.p
                              className="text-sm leading-relaxed tracking-widest text-[#c5cce2]"
                              variants={paragraphVariants}
                            >
                              1. Menciptakan produk kreatif dan edukatif yang
                              berkelanjutan.
                            </motion.p>
                          </motion.li>
                          <motion.li>
                            <motion.p
                              className="text-sm leading-relaxed tracking-widest text-[#c5cce2]"
                              variants={paragraphVariants}
                            >
                              2. Membangun ekosistem yang mandiri, kreatif dan
                              punya daya saing kuat di kanca internasional
                            </motion.p>
                          </motion.li>
                          <motion.li>
                            <motion.p
                              className="text-sm leading-relaxed tracking-widest text-[#c5cce2]"
                              variants={paragraphVariants}
                            >
                              3. Membangun sistem integrasi dengan teknologi
                              yang friendy, trasparan, terukur dengan jangkauan
                              yang luas
                            </motion.p>
                          </motion.li>
                        </motion.ul>
                      </motion.p>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    variants={thirdDivVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center bg-[#a4bcdc] py-5"
                  >
                    <motion.div className="flex max-w-screen-tablet flex-col items-center justify-center gap-4 px-6 py-4">
                      <motion.div className="mb-3">
                        <Image
                          src={TheFounderTitle}
                          alt="TheFounderTitle"
                          className="w-[250px]"
                        />
                      </motion.div>
                      <motion.div>
                        <motion.img
                          src="https://via.placeholder.com/200x250"
                          alt="Founder Image"
                          className="float-left mr-4 w-1/2 rounded-md shadow-lg"
                        />

                        <motion.div>
                          <motion.p
                            className="text-start text-sm leading-relaxed tracking-widest"
                            variants={paragraphVariants}
                          >
                            <motion.span className="mr-2 font-bold">
                              Reno Halsamer
                            </motion.span>
                            Adalah Pria yang lahir dan tinggal di Surabaya
                            Indonesia. Sebagai seorang bisnisman dan penggiat
                            Museum seni khususnya Topeng Indonesia, Sejak tahun
                            2015 di Surabaya, dengan situasi yang dirasa
                            mundurnya kecintaan masyarakat terhadap seni dan
                            budaya, Reno Halsamer mencetuskan ide untuk
                            menciptakan karakter animasi dengan mengkombinasikan
                            topeng dan buah lemon. Sehingga, topeng merupakan
                            karya seni yang dibuat orisinal dari leluhur bangsa
                            Indonesia, topeng juga diharapkan mampu mewakili
                            wajah karakter masyarakat Indonesia.
                          </motion.p>
                          <motion.p
                            className="mt-5 text-start text-sm leading-relaxed tracking-widest"
                            variants={paragraphVariants}
                          >
                            Karakter animasi minilemon diharapkan menjadi figur
                            baik dan menjadi teladan teruntuk anak-anak
                            Indonesia, sehinga buah lemon yang dikenal banyak
                            manfaatnya, sangat cocok dipadukan dengan topeng,
                            untuk menjadi &quot;THE GOOD CHARACTER&quot; dengan
                            &quot;WAJAH INDONESIA&quot;. Dengan ide yang
                            brilian, &quot;BAPAK MINILEMON&quot; merupakan
                            julukan yang pantas dilekatkan dengan Reno Halsamer.
                          </motion.p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    variants={fourthDivVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center bg-[#d3def4] py-5"
                  >
                    <motion.div className="flex max-w-screen-tablet flex-col items-center justify-center gap-4 px-6 py-4">
                      <motion.div>
                        <Image
                          src={CoFounderTitle}
                          alt="CoFounderTitle"
                          className="mb-3 w-[250px]"
                        />
                      </motion.div>
                      <motion.div>
                        <motion.img
                          src="https://via.placeholder.com/200x250"
                          alt="Founder Image"
                          className="float-left mr-4 w-1/2 rounded-md shadow-lg"
                        />

                        <motion.div>
                          <motion.p
                            className="text-start text-sm leading-relaxed tracking-widest"
                            variants={paragraphVariants}
                          >
                            <motion.span className="mr-2 font-bold">
                              Heriyadi Natawijaya
                            </motion.span>
                            Lahir di Palembang dan tinggal di Depok Indonesia,
                            adalah Seorang Sutradara Iklan, Video Klip dan
                            Animasi Sejak 2009. Heriyadi Natawijaya juga sebagai
                            Pendiri Perakaria dan IDSains sebagai Pusat
                            Komunitas Kreatif dan produksi seni di Depok,
                            Indonesia.
                          </motion.p>
                          <motion.p
                            className="mt-5 text-start text-sm leading-relaxed tracking-widest"
                            variants={paragraphVariants}
                          >
                            Karirnya di dunia Seni dan Perfilman membuatnya
                            bertemu Reno Halsamer sebagai sosok pencetus
                            Minilemon. Mempunyai Visi Misi yang sama untuk
                            kemudian menghidupkan minilemon sebagai produk
                            Kreatif, edukatif dengan nilai-nilai budaya.
                          </motion.p>
                          <motion.p
                            className="mt-5 text-start text-sm leading-relaxed tracking-widest"
                            variants={paragraphVariants}
                          >
                            Pengalaman panjang sebagai kepala Seni, dan
                            kecintaannya dengan teknologi, membuat Heriyadi
                            Natawijaya banyak menciptakan gagasan dan putusan
                            yang berpihak kepada estetika dan budaya kerja yang
                            tech savvy, menyenangkan, transparan dan terukur,
                            dengan pergelaran dan Kepiawaiannya “Paman
                            Minilemon” adalah julukan yang cocok untuk Heriyadi
                            Natawijaya.
                          </motion.p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    variants={fifthDivVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center bg-[#1b1b1b] py-5"
                  >
                    <motion.div className="flex max-w-screen-tablet flex-col items-center justify-center gap-4 px-6 py-4">
                      <motion.div>
                        <Image
                          src={OurHeroTile}
                          alt="OurHeroTile"
                          className="scale-[0.7]"
                        />
                      </motion.div>
                      <motion.div className="grid max-w-screen-tablet grid-cols-2 gap-10 text-start text-sm leading-relaxed tracking-widest text-[#c5cce2]">
                        {Hero.map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex w-full flex-col items-center justify-start gap-2"
                          >
                            <motion.img
                              src="https://via.placeholder.com/200x250"
                              alt="Founder Image"
                              className="w-full"
                            />
                            <motion.p className="text-center text-sm leading-relaxed tracking-widest">
                              {item.name}
                            </motion.p>
                            <motion.p className="text-center text-sm font-bold uppercase leading-relaxed tracking-widest">
                              {item.position}
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
                    className="flex flex-col items-center justify-center bg-[#fff4ec] py-5"
                  >
                    <motion.div className="flex max-w-screen-tablet flex-col items-center justify-center gap-4 px-6 py-4">
                      <motion.div>
                        <Image
                          src={OurFamilyTile}
                          alt="OurFamilyTile"
                          className="scale-[0.7]"
                        />
                      </motion.div>
                      <motion.div className="grid max-w-screen-tablet grid-cols-2 gap-10 text-start text-sm leading-relaxed tracking-widest">
                        {Hero.map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex w-full flex-col items-center justify-start gap-2"
                          >
                            <motion.img
                              src="https://via.placeholder.com/200x250"
                              alt="Founder Image"
                              className="w-full"
                            />
                            <motion.p className="text-center text-sm leading-relaxed tracking-widest">
                              {item.name}
                            </motion.p>
                            <motion.p className="text-center text-sm font-bold uppercase leading-relaxed tracking-widest">
                              {item.position}
                            </motion.p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                    <ButtonLegacy.Primary
                      className={cn(
                        isExpanded1 === true ? "flex" : "hidden",
                        "my-7 scale-90",
                      )}
                      onClick={toggleExpand1}
                    >
                      Read Less
                    </ButtonLegacy.Primary>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
            <ContactMobile />
          </div>
        </div>
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
