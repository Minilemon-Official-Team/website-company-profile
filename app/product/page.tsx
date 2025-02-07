"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import BackgroundImage from "@/public/background/product.png";
import MinilemonExplorerToJogja from "@/public/product/minilemon-explorer-to-jogja.jpg";
import CoverSaveTheEarth from "@/public/product/minilemon-save-the-earth.jpg";
import CoverPanggungBonekaMinilemon from "@/public/product/panggung-boneka-minilemon.png";
import CoverPetualanganMinilemon from "@/public/product/petualangan-minilemon.jpg";
import CoverPostParenting from "@/public/product/poster-parenting.png";

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
import Banner from "@/components/ui/banner/banner";
import BannerWrapper from "@/components/ui/banner/banner-wrapper";
import Product from "@/components/ui/product";
// import exp from "constants";

const ProductPage = () => {
  const [isExpanded, setIsExpanded] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleExpand = (expand: number) => {
    setIsExpanded((prevState) => {
      const newState = [...prevState];
      newState[expand] = !newState[expand];
      return newState;
    });
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
      <BannerWrapper
        bgColor="bg-[#1b1b1b]"
        backgroundImage={BackgroundImage}
        backgroundAlt="Background"
        className="py-14"
      >
        <Banner
          productTitle={ProductTitle}
          productTitleAlt="Our Product"
          className="mt-2 justify-center gap-4"
        >
          <div className="z-20 mb-3 flex flex-col leading-loose tracking-wider">
            <p className="text-[#d3dcf3]">
              Di era modernisasi dan selera yang semakin beragam, Minilemon
              memproduksi banyak varian produk digital maupun konvensional, agar
              nilai-nilai edukasi dan karakter positif, dapat menjangkau ke
              banyak penggemar khususnya anak-anak usia 3 sampai 7 tahun.
            </p>
          </div>
        </Banner>
      </BannerWrapper>

      {/* Product 1 */}
      <Product
        bgColor="#1b1b1b"
        textColor="text-[#c0cbdf]/90"
        CoverProduct={CoverPetualanganMinilemon}
        CoverAlt="Petualangan Si Minilemon"
        TitleImage1={PetualanganSiMinilemonTitle1}
        TitleImage2={PetualanganSiMinilemonTitle2}
        TitleImageAlt="Petualangan Si Minilemon"
        className="gap-y-6 tracking-wider"
      >
        <p>
          Petualangan Minilemon dimulai dari kecerobohan Ucup dan Togar yang
          tanpa sengaja memicu kejar-kejaran menegangkan dengan sekelompok angsa
          marah. Dalam kekacauan itu, Ucup terpisah dan menghilang setelah
          menemukan mesin portal misterius diruang rahasia Kak Bibie.
        </p>
        <p>
          Dengan kejadian itu, Anak-anak Minilemon mulai bersatu dan siap
          bertualang mencari Ucup dengan bantuan Kak Bibie dan Paman Tigor.{" "}
          <Link
            className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
            href="javascript:void(0)"
            onClick={() => toggleExpand(0)}
          >
            <span className={isExpanded[0] == true ? "hidden" : "flex"}>
              Read More{" "}
              <span className="ml-1 flex items-center text-xs">❯</span>
            </span>
          </Link>
        </p>
        <AnimatePresence>
          {isExpanded[0] && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-y-6 text-[#c0cbdf]/90"
            >
              <motion.p variants={paragraphVariants}>
                Petualangan seru dengan rocket canggih dan mesin portal Kak
                Biebie, membawa mereka ke berbagai tempat, mulai dari Candi
                Borobudur, Jogjakarta hingga Pelabuhan Surabaya. Di tengah
                pencarian, mereka menemukan bahwa Ucup ternyata diculik oleh
                kelompok penjahat yang terlibat dalam perburuan hewan langka
                secara ilegal. Akankah mereka berhasil menyelamatkan Ucup dan
                menggagalkan rencana jahat para pemburu? Saksikan keseruan dan
                ketegangan film &quot;Petualangan si Minilemon&quot;!{" "}
                <span
                  onClick={() => toggleExpand(0)}
                  className="inline-flex cursor-pointer items-center font-bold uppercase text-blue-600 hover:underline"
                >
                  Read Less
                </span>
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </Product>

      {/* Product 2 */}
      <Product
        CoverProduct={CoverSaveTheEarth}
        CoverAlt="Minilemon Save The Earth"
        TitleImage1={MinilemonSaveTheEarthTitle1}
        TitleImage2={MinilemonSaveTheEarthTitle2}
        TitleImageAlt="Minilemon Save The Earth"
        bgColor="#d2e1f4"
        textColor="text-[#1b1b1d]/70"
        className="gap-y-6 tracking-wider"
      >
        <p>
          Dengan menyadari betapa pentingnya menjaga dan melestarikan alam,
          Minilemon yang di pimpin Kak Biebie, memulai petualangan mereka dalam
          serial animasi &quot;Minilemon Save The Earth&quot;. Di sini, mereka
          tidak hanya belajar lebih dalam tentang ekosistem yang rumit,
          keanekaragaman hayati yang menakjubkan, pentingnya konservasi alam,
          tetapi mereka juga belajar menanamkan nilai-nilai positif dan tanggung
          jawab terhadap alam dari setiap langkah mereka.{" "}
          <Link
            className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
            href="javascript:void(0)"
            onClick={() => toggleExpand(1)}
          >
            <span className={isExpanded[1] === true ? "hidden" : "flex"}>
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
              className="flex flex-col gap-y-6 text-[#1b1b1d]/70"
            >
              <motion.p variants={paragraphVariants}>
                “Berakit-rakit ke hulu, berenang-renang ke tepian.
                Bersakit-sakit dahulu, bersenang-senang kemudian.”
              </motion.p>
              <motion.p variants={paragraphVariants}>
                Perjalanan Minilemon tidaklah mudah. Mereka menghadapi berbagai
                tantangan yang menguji ketangguhan dan kebijaksanaan mereka.
                Dari menjaga disiplin, mengatasi konflik dengan teman, hingga
                belajar bertahan hidup di alam liar. Setiap rintangan, seperti
                membuat api, berinteraksi dengan hewan liar, dan mencari makanan
                di hutan, menjadi pelajaran berharga yang memperkuat
                persahabatan dan solidaritas mereka.
              </motion.p>
              <motion.p variants={paragraphVariants}>
                Saksikan bagaimana Minilemon mengatasi berbagai tantangan di
                alam liar, dengan berbagai cara yang lucu, seru dan menyenangkan
                sembari belajar tentang pentingnya menjaga kelestarian alam
                kita!{" "}
                <span
                  onClick={() => toggleExpand(1)}
                  className="inline-flex cursor-pointer items-center font-bold uppercase text-blue-600 hover:underline"
                >
                  Read Less
                </span>
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </Product>

      {/* Product 3 */}
      <Product
        bgColor="#d2f4d3"
        textColor="text-[#1b1b1d]/80"
        CoverProduct={MinilemonExplorerToJogja}
        CoverAlt="Minilemon Explorer!"
        TitleImage1={MinilemonExplorerTitle1}
        TitleImage2={MinilemonExplorerTitle2}
        TitleImageAlt="Minilemon Explorer"
        className="gap-y-8 tracking-[.07em]"
      >
        <p>
          Minilemon Explorer adalah game interaktif yang memadukan storytelling
          dan edukasi, menghadirkan pengalaman belajar sekaligus bermain yang
          seru dalam balutan tema petualangan. Dalam game ini, kamu akan diajak
          menjelajahi berbagai tempat menarik di Nusantara, salah satunya adalah
          kota budaya yang memesona, Yogyakarta!
        </p>
        <p>
          Tak hanya sampai di situ, Minilemon Explorer terus berkembang dengan
          memperluas peta permainan ke berbagai lokasi ikonik di seluruh
          Indonesia. Dari megahnya hutan Kalimantan, indahnya pantai di Bali,
          hingga eksotisme alam Papua, setiap wilayah menyuguhkan tema yang unik
          dan mekanisme permainan yang selalu baru.{" "}
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
              className="flex flex-col gap-y-6 text-[#1b1b1d]/80"
            >
              <motion.p variants={paragraphVariants}>
                Ke depannya, kami akan menghadirkan gameplay bertema Pramuka di
                Jogja, di mana kamu bisa merasakan asyiknya memancing, berburu,
                hingga membangun tenda di alam terbuka.
              </motion.p>

              <motion.p variants={paragraphVariants}>
                Yuk, gabung dalam petualangan seru di Minilemon Explorer!
                Bersama, kita jelajahi kekayaan budaya dan keindahan alam
                Nusantara yang luar biasa.{" "}
                <span
                  onClick={() => toggleExpand(2)}
                  className="inline-flex cursor-pointer items-center font-bold uppercase text-blue-600 hover:underline"
                >
                  Read Less
                </span>
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </Product>

      {/* Product 4 */}
      <Product
        bgColor="#f4d3e8"
        textColor="text-[#1b1b1d]/70"
        CoverProduct={CoverPostParenting}
        CoverAlt="Minilemon Live Parenting"
        TitleImage1={MinilemonLiveParentingTitle1}
        TitleImage2={MinilemonLiveParentingTitle2}
        TitleImageAlt="Minilemon Live Parenting"
        className="gap-y-8 tracking-[.07em]"
      >
        <p>
          Minilemon percaya bahwa pendidikan karakter anak tidak hanya
          mengandalkan tontonan edukasi saja, akan tetapi dibutuhkan juga peran
          aktif orang tua dalam membimbing anak-anak mereka.
        </p>
        <p>
          &quot;Sahabat Minilemon Parenting&quot; adalah program yang dirancang
          khusus untuk membantu para bunda dengan memberikan tips dan saran
          praktis yang dapat langsung diterapkan di rumah. Sehingga orang tua
          dapat ikut berperan mendidik anak-anak mereka.{" "}
          <Link
            className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
            href="javascript:void(0)"
            onClick={() => toggleExpand(3)}
          >
            <span className={isExpanded[3] ? "hidden" : "flex"}>
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
              className="flex flex-col gap-y-6 text-[#1b1b1d]/70"
            >
              <motion.p variants={paragraphVariants}>
                menciptakan generasi yang kuat dan berkarakter.
              </motion.p>
              <motion.p variants={paragraphVariants}>
                &quot;Sahabat Minilemon Parenting&quot; ditayangkan setiap hari
                Senin, Rabu, dan Jumat, pukul 16.00 WIB di platform YouTube,
                TikTok, dan Instagram.{" "}
                <span
                  onClick={() => toggleExpand(3)}
                  className="inline-flex cursor-pointer items-center font-bold uppercase text-blue-600 hover:underline"
                >
                  Read Less
                </span>
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </Product>

      {/* Produk 5 */}
      <Product
        bgColor="#f4efd2"
        textColor="text-[#1b1b1d]/70"
        CoverProduct={CoverPanggungBonekaMinilemon}
        CoverAlt="Panggung Boneka Minilemon"
        TitleImage1={MinilemonPanggungBonekaTitle1}
        TitleImage2={MinilemonPanggungBonekaTitle2}
        TitleImageAlt="Panggung Boneka Minilemon"
        className="gap-y-6 tracking-[.07em]"
      >
        <p>
          &quot;Panggung Boneka Minilemon&quot; adlaah program pertunjukan
          boneka yang menghadirkan kisah-kisah lucu dan seru dari keseharian
          Minilemon.
        </p>
        <p>
          Selain mengundang tawa dan penuh kejutan, certa &quot;Panggung Boneka
          Minilemon&quot; selalu disertai dengan pesan-pesan moral yang positif.
          Melalui karakter Minilemon, anak-anak diajak untuk bermain dan belajar
          tentang nilai-nilai persahabatan, gotong royong, kejujuran, dan
          tanggung jawab.{" "}
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
        </p>
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
                &quot;Panggung Boneka Minilemon&quot; ini dirancang sempurna
                untuk anak-anak yang sedang dalam masa pertumbuhan. di mana
                kesenangan dan pelajaran hidup menyatu dalam sebuah pertunjukan.{" "}
                <span
                  onClick={() => toggleExpand(4)}
                  className="inline-flex cursor-pointer items-center font-bold uppercase text-blue-600 hover:underline"
                >
                  Read Less
                </span>
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </Product>
    </div>
  );
};

export default ProductPage;
