"use client";

import useUpdateCurrentLink from "@/hooks/useUpdateCurrentLink";
import {
  fifthDivVariants,
  fourthDivVariants,
  thirdDivVariants,
} from "@/lib/animations/divVariants";
import BackgroundImage from "@/public/background/product-mobile.png";
import MinilemonExplorerToJogja from "@/public/product/minilemon-explorer-to-jogja.jpg";
import CoverPanggungBonekaMinilemon from "@/public/product/panggung-boneka-minilemon.png";
import CoverPetualanganMinilemon from "@/public/product/petualangan-minilemon-2.png";
import CoverPostParenting from "@/public/product/poster-parenting.png";
import CoverSaveTheEarth from "@/public/product/save-the-earth-2.png";

import MinilemonExplorerTitle1 from "@/public/title/minilemon-explorer-1.png";
import MinilemonExplorerTitle2 from "@/public/title/minilemon-explorer-2.png";
import MinilemonLiveParentingTitle1 from "@/public/title/minilemon-live-parenting-1.png";
import MinilemonLiveParentingTitle2 from "@/public/title/minilemon-live-parenting-2.png";
import MinilemonSaveTheEarthTitle1 from "@/public/title/minilemon-save-the-earth-1.png";
import MinilemonSaveTheEarthTitle2 from "@/public/title/minilemon-save-the-earth-2.png";
import ProductTitle from "@/public/title/our-product-title1.png";
import MinilemonPanggungBonekaTitle1 from "@/public/title/panggung-boneka-minilemon-1.png";
import MinilemonPanggungBonekaTitle2 from "@/public/title/panggung-boneka-minilemon-2.png";
import PetualanganSiMinilemonTitle1 from "@/public/title/petualangan-si-minilemon-1.png";
import PetualanganSiMinilemonTitle2 from "@/public/title/petualangan-si-minilemon-2.png";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaYoutube } from "react-icons/fa6";

const ProductSection = () => {
  const [isExpanded, setIsExpanded] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const toggleExpand = (index: number) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const { currentLink, setCurrentLink } = useUpdateCurrentLink();

  const refInView = useRef(null);
  const productInView = useInView(refInView, {
    amount: 1,
  });

  useEffect(() => {
    if (productInView) {
      setCurrentLink("#product");
    }
  }, [productInView, currentLink, setCurrentLink]);

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

  const scrollToTopProduct = (productId: number) => {
    setTimeout(() => {
      const productElement = document.getElementById(`product-${productId}`);
      if (productElement) {
        const yOffset = 0;
        const yPosition =
          productElement.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    }, 800);
  };

  return (
    <div className="flex w-full flex-col">
      <div className="relative inset-0 flex h-[38vh] items-center bg-[#1b1b1b] bg-cover bg-center">
        <Image
          src={BackgroundImage}
          alt="Background"
          quality={100}
          fill
          sizes="100vw"
          objectFit="cover"
          className="absolute inset-0 z-10"
        />
        <div className="z-20 mx-auto flex max-w-screen-640 flex-col justify-center gap-4 px-6">
          <div className="z-20">
            <Image
              ref={refInView}
              src={ProductTitle}
              alt="Our Product"
              id="product"
              className="w-[230px] 400:w-[260px]"
            />
          </div>
          <div className="z-20 mb-3 flex flex-col leading-[1.6rem] tracking-wider sm:leading-7">
            <p className="text-sm leading-[1.6rem] tracking-wider text-[#d3dcf3] sm:leading-7">
              Di era modernisasi dan selera yang semakin beragam, Minilemon
              memproduksi banyak varian produk digital maupun konvensional, agar
              nilai-nilai edukasi dan karakter positif, dapat menjangkau ke
              banyak penggemar khususnya anak-anak usia 3 sampai 7 tahun.
            </p>
          </div>
        </div>
      </div>

      {/* Product 1 */}
      <div className="w-full bg-[#1b1b1b] py-14" id="product-1">
        <div className="mx-auto max-w-screen-640 px-6">
          <div className="container flex flex-col items-center justify-center gap-4">
            <div className="relative h-[396px] w-full sm:h-[492px]">
              <Image
                src={CoverPetualanganMinilemon}
                alt="Petualangan Si Minilemon"
                layout="fill"
                objectFit="fill"
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-y-6 text-start text-sm leading-[1.6rem] tracking-wider text-[#c0cbdf]/90 sm:leading-7">
              <div className="hidden flex-col lg:flex">
                <Image
                  src={PetualanganSiMinilemonTitle1}
                  alt="Petualangan Si Minilemon"
                />
                <Image
                  src={PetualanganSiMinilemonTitle2}
                  alt="Petualangan Si Minilemon"
                />
              </div>
              <p>
                Petualangan Minilemon dimulai dari keceroohan Ucup dan Togar
                yang tanpa sengaja memicu kejar-kerjaran menegangkan dengan
                sekelompok angsa marah. Dalam kekacauan itu, Ucup terpisah dan
                menghilang setelah menemukan mesin portal misterius diruang
                rahasia Kak Bibie.
              </p>
              <p className="">
                Dengan kejadian itu, Anaak-anak Minilemon mulai bersatu dan siap
                bertualang mencari Ucup dengan bantuan Kak Bibie dan Paman
                Tigor.{" "}
                <Link
                  className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
                  href="javascript:void(0)"
                  onClick={() => toggleExpand(1)}
                >
                  <span className={isExpanded[1] == true ? "hidden" : "flex"}>
                    Read More{" "}
                    <span className="ml-1 flex items-center text-xs">❯</span>
                  </span>
                </Link>
              </p>
              <AnimatePresence>
                {isExpanded[1] && (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-y-6 text-[#c0cbdf]/90"
                  >
                    <motion.p variants={paragraphVariants}>
                      Petualangan seru dengan rocket canggih dan mesin portal
                      Kak Biebie, membawa mereka ke berbagai tempat, mulai dari
                      Candi Borobudur, Jogjakarta hingga Pelabuhan Surabaya. Di
                      tengah pencarian, mereka menemukan bahwa Ucup ternyata
                      diculik oleh kelompok penjahat yang terlibat dalam
                      perburuan hewan langka secara ilegal. Akankah mereka
                      berhasil menyelamatkan Ucup dan menggagalkan rencana jahat
                      para pemburu? Saksikan keseruan dan ketegangan film
                      &quot;Petualangan si Minilemon&quot;!{" "}
                      <span
                        onClick={() => {
                          toggleExpand(1);
                          scrollToTopProduct(1);
                        }}
                        className="inline-flex cursor-pointer items-center font-bold uppercase text-blue-600 hover:underline"
                      >
                        Read Less
                      </span>
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
              <Link
                href="javascript:void(0)"
                className="flex flex-row items-center gap-x-2"
              >
                <span className="rounded-full bg-[#333333] p-[.4rem] shadow-xl">
                  <FaYoutube className="" />
                </span>
                Trailer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product 2 */}
      <div className="w-full bg-[#d2e1f4] py-14" id="product-2">
        <div className="mx-auto max-w-screen-640 px-6">
          <div className="container flex flex-col items-center justify-center gap-4">
            <div className="relative h-[396px] w-full sm:h-[492px]">
              <Image
                src={CoverSaveTheEarth}
                alt="Minilemon Save The Earth"
                layout="fill"
                objectFit="fill"
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-y-6 text-sm leading-[1.6rem] tracking-wider text-[#1b1b1d]/70 sm:leading-7">
              <div className="hidden flex-col lg:flex">
                <Image
                  src={MinilemonSaveTheEarthTitle1}
                  alt="Minilemon Save The Earth"
                />
                <Image
                  src={MinilemonSaveTheEarthTitle2}
                  alt="Minilemon Save The Earth"
                />
              </div>
              <p>
                Dengan menyadari betapa pentingnya meenjaga dan melestarikan
                alam, Minilemon yang di pimpin Kak Biebie, memulai petualangan
                mereka dalam serial animasi &quot;Minilemon Save The
                Earth&quot;. Di sini, mereka tidak hanya belajar lebih dalam
                tentang ekosistem yang rumit, keanekaragaman hayati yang
                menakjubkan, pentingnya konservasi alam, tetapi mereka juga
                belajar menanamkan nilai-nilai positif dan tanggung jawab
                terhadap alam dari setiap langkah mereka.{" "}
                <Link
                  className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
                  href="javascript:void(0)"
                  onClick={() => toggleExpand(2)}
                >
                  <span className={isExpanded[2] === true ? "hidden" : "flex"}>
                    Read More{" "}
                    <span className="ml-1 flex items-center text-xs">❯</span>
                  </span>
                </Link>
              </p>
              <AnimatePresence>
                {isExpanded[2] && (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-y-6 text-[#1b1b1d]/70"
                  >
                    <motion.p variants={paragraphVariants}>
                      “Berakit-rakit ke hulu, berenang-renang ke tepian.
                      Bersakit-sakit dahulu, bersenang-senang kemudian.”
                    </motion.p>
                    <motion.p variants={paragraphVariants}>
                      Perjalanan Minilemon tidaklah mudah. Mereka menghadapi
                      berbagai tantangan yang menguji ketangguhan dan
                      kebijaksanaan mereka. Dari menjaga disiplin, mengatasi
                      konflik dengan teman, hingga belajar bertahan hidup di
                      alam liar. Setiap rintangan, seperti membuat api,
                      berinteraksi dengan hewan liar, dan mencari makanan di
                      hutan, menjadi pelajaran berharga yang memperkuat
                      persahabatan dan solidaritas mereka.
                    </motion.p>
                    <motion.p variants={paragraphVariants}>
                      Saksikan bagaimana Minilemon mengatasi berbagai tantangan
                      di alam liar, dengan berbagai cara yang lucu, seru dan
                      menyenangkan sembari belajar tentang pentingnya menjaga
                      kelestarian alam kita!{" "}
                      <span
                        onClick={() => {
                          scrollToTopProduct(2);
                          toggleExpand(2);
                        }}
                        className="inline-flex cursor-pointer items-center font-bold uppercase text-blue-600 hover:underline"
                      >
                        Read Less
                      </span>
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
              <Link href={"#"} className="flex flex-row items-center gap-x-2">
                <span className="rounded-full bg-[#333] p-[.4rem] shadow-xl">
                  <FaYoutube className="text-white" />
                </span>
                Trailer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product 3 */}
      <motion.div
        variants={thirdDivVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="w-full bg-[#d2f4d3] py-14"
        id="product-3"
      >
        <motion.div className="mx-auto max-w-screen-640 px-6">
          <motion.div className="container flex flex-col items-center justify-center gap-4">
            <div className="relative flex h-[396px] w-full flex-col items-center justify-center bg-gray-500 sm:h-[492px]">
              <Image
                src={MinilemonExplorerToJogja}
                alt="coming soon"
                layout="fill"
                objectFit="fill"
                className="w-full"
              />
            </div>

            <motion.div className="flex flex-col gap-y-8 text-sm leading-[1.6rem] tracking-[.07em] text-[#1b1b1d]/80 sm:leading-7">
              <div className="hidden flex-col lg:flex">
                <Image src={MinilemonExplorerTitle1} alt="Minilemon Explorer" />
                <Image src={MinilemonExplorerTitle2} alt="Minilemon Explorer" />
              </div>
              <p>
                Minilemon Explorer adalah game interaktif yang memadukan
                storytelling dan edukasi, menghadirkan pengalaman belajar
                sekaligus bermain yang seru dalam balutan tema petualangan.
                Dalam game ini, kamu akan diajak menjelajahi berbagai tempat
                menarik di Nusantara, salah satunya adalah kota budaya yang
                memesona, Yogyakarta!
              </p>
              <p>
                Tak hanya sampai di situ, Minilemon Explorer terus berkembang
                dengan memperluas peta permainan ke berbagai lokasi ikonik di
                seluruh Indonesia. Dari megahnya hutan Kalimantan, indahnya
                pantai di Bali, hingga eksotisme alam Papua, setiap wilayah
                menyuguhkan tema yang unik dan mekanisme permainan yang selalu
                baru.{" "}
                <Link
                  className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
                  href="javascript:void(0)"
                  onClick={() => toggleExpand(3)}
                >
                  <span className={isExpanded[3] === true ? "hidden" : "flex"}>
                    Read More{" "}
                    <span className="ml-1 flex items-center text-xs">❯</span>
                  </span>
                </Link>
              </p>
              <AnimatePresence>
                {isExpanded[3] && (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-y-6 text-[#1b1b1d]/80"
                  >
                    <motion.p variants={paragraphVariants}>
                      Ke depannya, kami akan menghadirkan gameplay bertema
                      Pramuka di Jogja, di mana kamu bisa merasakan asyiknya
                      memancing, berburu, hingga membangun tenda di alam
                      terbuka.
                    </motion.p>
                    <motion.p variants={paragraphVariants}>
                      Yuk, gabung dalam petualangan seru di Minilemon Explorer!
                      Bersama, kita jelajahi kekayaan budaya dan keindahan alam
                      Nusantara yang luar biasa.{" "}
                      <span
                        onClick={() => {
                          toggleExpand(3);
                          scrollToTopProduct(3);
                        }}
                        className="inline-flex cursor-pointer items-center font-bold uppercase text-blue-600 hover:underline"
                      >
                        Read Less
                      </span>
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
              <Link href={"#"} className="flex flex-row items-center gap-x-2">
                <span className="rounded-full bg-[#333] p-[.4rem] shadow-lg">
                  <FaYoutube className="text-white" />
                </span>
                Trailer
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Product 4 */}
      <motion.div
        variants={fourthDivVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="w-full bg-[#f4d3e8] py-14"
        id="product-4"
      >
        <motion.div className="mx-auto max-w-screen-640 px-6">
          <motion.div className="container flex flex-col items-center justify-center gap-4">
            <div className="relative h-[396px] w-full sm:h-[492px]">
              <Image
                src={CoverPostParenting}
                alt="Minilemon Live Parenting"
                layout="fill"
                objectFit="fill"
                className="w-full"
              />
            </div>

            <motion.div className="flex flex-col gap-y-8 text-sm leading-[1.6rem] tracking-[.07em] text-[#1b1b1d]/70 sm:leading-7">
              <div className="hidden flex-col lg:flex">
                <Image
                  src={MinilemonLiveParentingTitle1}
                  alt="Minilemon Live Parenting"
                />
                <Image
                  src={MinilemonLiveParentingTitle2}
                  alt="Minilemon Live Parenting"
                />
              </div>
              <motion.p variants={paragraphVariants}>
                Minilemon percaya bahwa pendidikan karakter anak tidak hanya
                mengandalkan tontonan edukasi saja, akan tetapi dibutuhkan juga
                peran aktif orang tua dalam membimbing anak-anak mereka.
              </motion.p>
              <motion.p variants={paragraphVariants}>
                &quot;Sahabat Minilemon Parenting&quot; adalah program yang
                dirancang khusus untuk membantu para bunda dengan memberikan
                tips dan saran praktis yang dapat langsung diterapkan di rumah.
                Sehingga orang tua dapat ikut berperan mendidik anak-anak
                mereka.{" "}
                <Link
                  className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
                  href="javascript:void(0)"
                  onClick={() => toggleExpand(4)}
                >
                  <span className={isExpanded[4] ? "hidden" : "flex"}>
                    Read More{" "}
                    <span className="ml-1 flex items-center text-xs">❯</span>
                  </span>
                </Link>
              </motion.p>
              <AnimatePresence>
                {isExpanded[4] && (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-y-6 text-[#1b1b1d]/70"
                  >
                    <motion.p variants={paragraphVariants}>
                      menciptakan generasi yang kuat dan berkarakter.
                    </motion.p>
                    <motion.p variants={paragraphVariants}>
                      &quot;Sahabat Minilemon Parenting&quot; ditayangkan setiap
                      hari Senin, Rabu, dan Jumat, pukul 16.00 WIB di platform
                      YouTube, TikTok, dan Instagram.{" "}
                      <span
                        onClick={() => {
                          toggleExpand(4);
                          scrollToTopProduct(4);
                        }}
                        className="inline-flex cursor-pointer items-center font-bold uppercase text-blue-600 hover:underline"
                      >
                        Read Less
                      </span>
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
              <Link
                href={"#"}
                className="flex flex-row items-center gap-x-2 text-base"
              >
                <span className="rounded-full bg-[#333] p-[.4rem] shadow-lg">
                  <FaYoutube className="text-white" />
                </span>
                Trailer
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Product 5 */}
      <motion.div
        variants={fifthDivVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="flex flex-row bg-[#f4efd2] py-14"
        id="product-5"
      >
        <motion.div className="mx-auto max-w-screen-640 px-6">
          <motion.div className="container flex flex-col items-center justify-center gap-4">
            <div className="relative h-[396px] w-full sm:h-[492px]">
              <Image
                src={CoverPanggungBonekaMinilemon}
                alt="Panggung Boneka Minilemon"
                layout="fill"
                objectFit="fill"
                className="w-full"
              />
            </div>

            <motion.div className="flex flex-col gap-y-6 text-sm leading-[1.6rem] tracking-[.07em] text-[#1b1b1d]/70 sm:leading-7">
              <div className="hidden flex-col lg:flex">
                <Image
                  src={MinilemonPanggungBonekaTitle1}
                  alt="Panggung Boneka Minilemon"
                />
                <Image
                  src={MinilemonPanggungBonekaTitle2}
                  alt="Panggung Boneka Minilemon"
                />
              </div>
              <motion.p variants={paragraphVariants}>
                &quot;Panggung Boneka Minilemon&quot; adlaah program pertunjukan
                boneka yang menghadirkan kisah-kisah lucu dan seru dari
                keseharian Minilemon.
              </motion.p>
              <motion.p variants={paragraphVariants}>
                Selain mengundang tawa dan penuh kejutan, certa &quot;Panggung
                Boneka Minilemon&quot; selalu disertai dengan pesan-pesan moral
                yang positif. Melalui karakter Minilemon, anak-anak diajak untuk
                bermain dan belajar tentang nilai-nilai persahabatan, gotong
                royong, kejujuran, dan tanggung jawab.{" "}
                <Link
                  className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
                  href="javascript:void(0)"
                  onClick={() => toggleExpand(5)}
                >
                  <span className={isExpanded[5] ? "hidden" : "flex"}>
                    Read More{" "}
                    <span className="ml-1 flex items-center text-xs">❯</span>
                  </span>
                </Link>
              </motion.p>
              <AnimatePresence>
                {isExpanded[5] && (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-y-6 text-[#1b1b1d]/70"
                  >
                    <motion.p variants={paragraphVariants}>
                      &quot;Panggung Boneka Minilemon&quot; ini dirancang
                      sempurna untuk anak-anak yang sedang dalam masa
                      pertumbuhan. di mana kesenangan dan pelajaran hidup
                      menyatu dalam sebuah pertunjukan.{" "}
                      <span
                        onClick={() => {
                          toggleExpand(5);
                          scrollToTopProduct(5);
                        }}
                        className="inline-flex cursor-pointer items-center font-bold uppercase text-blue-600 hover:underline"
                      >
                        Read Less
                      </span>
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
              <Link href={"#"} className="flex flex-row items-center gap-x-2">
                <span className="rounded-full bg-[#333] p-[.4rem] shadow-lg">
                  <FaYoutube className="text-white" />
                </span>
                Trailer
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductSection;
