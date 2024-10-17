"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Placeholder } from "placeholder";
import { FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import PetualanganSiMinilemonTitle1 from "@/public/title/petualangan-si-minilemon-1.png";
import PetualanganSiMinilemonTitle2 from "@/public/title/petualangan-si-minilemon-2.png";
import MinilemonSaveTheEarthTitle1 from "@/public/title/minilemon-save-the-earth-1.png";
import MinilemonSaveTheEarthTitle2 from "@/public/title/minilemon-save-the-earth-2.png";
import MinilemonExplorerTitle1 from "@/public/title/minilemon-explorer-1.png";
import MinilemonExplorerTitle2 from "@/public/title/minilemon-explorer-2.png";
import MinilemonLiveParentingTitle1 from "@/public/title/minilemon-live-parenting-1.png";
import MinilemonLiveParentingTitle2 from "@/public/title/minilemon-live-parenting-2.png";
import MinilemonPanggungBonekaTitle1 from "@/public/title/panggung-boneka-minilemon-1.png";
import MinilemonPanggungBonekaTitle2 from "@/public/title/panggung-boneka-minilemon-2.png";
import ProductTitle from "@/public/title/our-product-title1.png";
import BackgroundImage from "@/public/background/product.png";
import CoverPetualanganMinilemon from "@/public/product/petualangan-minilemon.png";
import CoverSaveTheEarth from "@/public/product/save-the-earth.png";
import CoverPanggungBonekaMinilemon from "@/public/product/panggung-boneka-minilemon.png";
import CoverPostParenting from "@/public/product/poster-parenting.png";

const ProductPage = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);

  const toggleExpand1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const toggleExpand2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const toggleExpand3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  const toggleExpand4 = () => {
    setIsExpanded4(!isExpanded4);
  };

  const toggleExpand5 = () => {
    setIsExpanded5(!isExpanded5);
  };

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

  return (
    <div className="flex flex-col">
      {/* Hero Section Desktop View */}
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
        <div className="container z-20 mt-2 flex flex-col justify-center gap-8">
          <div className="z-20">
            <Image src={ProductTitle} alt="Our Product" />
          </div>
          <div className="z-20 mb-3 flex flex-col leading-loose tracking-wider">
            <p className="text-[#d3dcf3]">
              Di era modernisasi dan selera yang semakin beragam, Minilemon
              memproduksi banyak varian produk digital maupun konvensional, agar
              nilai-nilai edukasi dan karakter positif, dapat menjangkau ke
              banyak penggemar khususnya anak-anak usia 3 sampai 7 tahun.
            </p>
          </div>
        </div>
      </div>

      {/* Product 1 */}
      <div className="bg-[#1b1b1b] py-14">
        <div className="mb-8 flex w-full justify-center lg:hidden">
          <Image src={ProductTitle} alt="Our Product" />
        </div>
        <div className="mb-2 flex flex-row">
          <div className="container flex flex-col gap-x-8 lg:flex-row">
            <div className="mb-8 flex basis-4/12 flex-col items-center lg:mb-0">
              <Image
                src={CoverPetualanganMinilemon}
                alt="Petualangan Si Minilemon"
                className="h-[495px] w-[350px]"
              />
            </div>
            <div className="flex basis-8/12 flex-col gap-y-6 text-sm leading-loose tracking-wider text-[#c0cbdf]/90">
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
                  onClick={toggleExpand1}
                >
                  <span className={isExpanded1 == true ? "hidden" : "flex"}>
                    Read More{" "}
                    <span className="ml-1 flex items-center text-xs">❯</span>
                  </span>
                </Link>
              </p>
              <AnimatePresence>
                {isExpanded1 && (
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
                        onClick={toggleExpand1}
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
      <div className="flex flex-row bg-[#d2e1f4] py-14">
        <div className="container mb-2 flex flex-col gap-x-8 lg:flex-row">
          <div className="mb-8 flex basis-4/12 flex-col items-center lg:mb-0">
            <Image
              src={CoverSaveTheEarth}
              alt="Minilemon Save The Earth"
              className="h-[495px] w-[350px]"
            />
          </div>
          <div className="flex basis-8/12 flex-col gap-y-6 text-sm leading-loose tracking-wider text-[#1b1b1d]/70">
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
              Dengan menyadari betapa pentingnya meenjaga dan melestarikan alam,
              Minilemon yang di pimpin Kak Biebie, memulai petualangan mereka
              dalam serial animasi &quot;Minilemon Save The Earth&quot;. Di
              sini, mereka tidak hanya belajar lebih dalam tentang ekosistem
              yang rumit, keanekaragaman hayati yang menakjubkan, pentingnya
              konservasi alam, tetapi mereka juga belajar menanamkan nilai-nilai
              positif dan tanggung jawab terhadap alam dari setiap langkah
              mereka.{" "}
              <Link
                className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
                href="javascript:void(0)"
                onClick={toggleExpand2}
              >
                <span className={isExpanded2 === true ? "hidden" : "flex"}>
                  Read More{" "}
                  <span className="ml-1 flex items-center text-xs">❯</span>
                </span>
              </Link>
            </p>
            <AnimatePresence>
              {isExpanded2 && (
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
                    konflik dengan teman, hingga belajar bertahan hidup di alam
                    liar. Setiap rintangan, seperti membuat api, berinteraksi
                    dengan hewan liar, dan mencari makanan di hutan, menjadi
                    pelajaran berharga yang memperkuat persahabatan dan
                    solidaritas mereka.
                  </motion.p>
                  <motion.p variants={paragraphVariants}>
                    Saksikan bagaimana Minilemon mengatasi berbagai tantangan di
                    alam liar, dengan berbagai cara yang lucu, seru dan
                    menyenangkan sembari belajar tentang pentingnya menjaga
                    kelestarian alam kita!{" "}
                    <span
                      onClick={toggleExpand2}
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

      {/* Product 3 */}
      <div className="flex flex-row bg-[#d2f4d3] py-14">
        <div className="container mb-2 flex flex-col gap-x-8 lg:flex-row">
          <div className="mb-8 flex basis-4/12 flex-col items-center lg:mb-0">
            <Placeholder
              height={495}
              width={350}
              background="#333"
              color="#fff"
            />
          </div>
          <div className="flex basis-8/12 flex-col gap-y-8 text-sm leading-loose tracking-[.07em] text-[#1b1b1d]/80">
            <div className="hidden flex-col lg:flex">
              <Image src={MinilemonExplorerTitle1} alt="Minilemon Explorer" />
              <Image src={MinilemonExplorerTitle2} alt="Minilemon Explorer" />
            </div>
            <p>
              Dengan menyadari betapa pentingnya menjaga dan melestarikan alam,
              Minilemon yang di pimpin oleh Kak Bibie memulai petualangan seru
              melalui serial animasi pramuka. Dalam petualangan ini, mereka
              tidak hanya belajar lebih dalam tentang ekosistem yang rumit,
              keanekaragaman hayati yang menakjubkan, dan pentingnya konservasi
              alam, tetapi juga menanamkan nilai-nilai positif dan tanggung
              jawab terhadap alam dalam setiap langkah mereka.{" "}
              <Link
                className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
                href="javascript:void(0)"
                onClick={toggleExpand3}
              >
                <span className={isExpanded3 === true ? "hidden" : "flex"}>
                  Read More{" "}
                  <span className="ml-1 flex items-center text-xs">❯</span>
                </span>
              </Link>
            </p>
            <AnimatePresence>
              {isExpanded3 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-y-6 text-[#1b1b1d]/80"
                >
                  <motion.p variants={paragraphVariants}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat temporibus perferendis dicta! Quo repellendus
                    architecto quibusdam nisi, magnam animi voluptate rerum
                    expedita ad maxime consequuntur enim amet, voluptatem
                    aliquam ipsum?
                  </motion.p>
                  <motion.p variants={paragraphVariants}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste ducimus similique illo facilis provident dolorem quam
                    distinctio voluptate magnam possimus? Consequuntur totam
                    asperiores itaque laboriosam facilis quam recusandae
                    quisquam perferendis!
                  </motion.p>
                  <motion.p variants={paragraphVariants}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Explicabo officia odit deserunt optio provident consequatur
                    tempora impedit numquam voluptatibus incidunt natus
                    accusantium dignissimos, cupiditate praesentium voluptas,
                    debitis voluptatum velit! Quasi!{" "}
                    <span
                      onClick={toggleExpand3}
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
          </div>
        </div>
      </div>

      {/* Product 4 */}
      <div className="flex flex-row bg-[#f4d3e8] py-14">
        <div className="container mb-2 flex flex-col gap-x-8 lg:flex-row">
          <div className="mb-8 flex basis-4/12 flex-col items-center lg:mb-0">
            <Image
              src={CoverPostParenting}
              alt="Minilemon Live Parenting"
              className="h-[495px] w-[350px]"
            />
          </div>
          <div className="flex basis-8/12 flex-col gap-y-8 text-sm leading-loose tracking-[.07em] text-[#1b1b1d]/70">
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
            <p>
              Minilemon percaya bahwa pendidikan karakter anak tidak hanya
              mengandalkan tontonan edukasi saja, akan tetapi dibutuhkan juga
              peran aktif orang tua dalam membimbing anak-anak mereka.
            </p>
            <p>
              &quot;Sahabat Minilemon Parenting&quot; adalah program yang
              dirancang khusus untuk membantu para bunda dengan memberikan tips
              dan saran praktis yang dapat langsung diterapkan di rumah.
              Sehingga orang tua dapat ikut berperan mendidik anak-anak mereka.{" "}
              <Link
                className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
                href="javascript:void(0)"
                onClick={toggleExpand4}
              >
                <span className={isExpanded4 ? "hidden" : "flex"}>
                  Read More{" "}
                  <span className="ml-1 flex items-center text-xs">❯</span>
                </span>
              </Link>
            </p>
            <AnimatePresence>
              {isExpanded4 && (
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
                    YouTube, TikTok, dan Instagram.
                  </motion.p>
                  <motion.p variants={paragraphVariants}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Explicabo officia odit deserunt optio provident consequatur
                    tempora impedit numquam voluptatibus incidunt natus
                    accusantium dignissimos, cupiditate praesentium voluptas,
                    debitis voluptatum velit! Quasi!{" "}
                    <span
                      onClick={toggleExpand4}
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
          </div>
        </div>
      </div>

      {/* Produk 5 */}
      <div className="flex flex-row bg-[#f4efd2] py-14">
        <div className="container flex flex-col gap-x-8 lg:flex-row">
          <div className="mb-8 flex basis-4/12 flex-col items-center lg:mb-0">
            <Image
              src={CoverPanggungBonekaMinilemon}
              alt="Panggung Boneka Minilemon"
              className="h-[495px] w-[350px]"
            />
          </div>
          <div className="flex basis-8/12 flex-col gap-y-6 text-sm leading-loose tracking-[.07em] text-[#1b1b1d]/70">
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
            <p>
              &quot;Panggung Boneka Minilemon&quot; adlaah program pertunjukan
              boneka yang menghadirkan kisah-kisah lucu dan seru dari keseharian
              Minilemon.
            </p>
            <p>
              Selain mengundang tawa dan penuh kejutan, certa &quot;Panggung
              Boneka Minilemon&quot; selalu disertai dengan pesan-pesan moral
              yang positif. Melalui karakter Minilemon, anak-anak diajak untuk
              bermain dan belajar tentang nilai-nilai persahabatan, gotong
              royong, kejujuran, dan tanggung jawab.{" "}
              <Link
                className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
                href="javascript:void(0)"
                onClick={toggleExpand5}
              >
                <span className={isExpanded5 ? "hidden" : "flex"}>
                  Read More{" "}
                  <span className="ml-1 flex items-center text-xs">❯</span>
                </span>
              </Link>
            </p>
            <AnimatePresence>
              {isExpanded5 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-y-6 text-[#1b1b1d]/70"
                >
                  <motion.p variants={paragraphVariants}>
                    &quot;Panggung Boneka Minilemon&quot; ini dirancang sempurna
                    untuk anak-anak yang sedang dalam masa pertumbuhan. di mana
                    kesenangan dan pelajaran hidup menyatu dalam sebuah
                    pertunjukan.{" "}
                    <span
                      onClick={toggleExpand5}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
