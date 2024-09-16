"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, stagger } from "framer-motion";

import Cave from "@/public/cave.png";
import StoryTitle from "@/public/title-picture/story-1.png";

const StoryPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#d2def4]">
      <div className="container mt-20 flex w-full flex-grow flex-col gap-6 px-6">
        <div>
          <Image src={StoryTitle} alt="Story" />
        </div>
        <div className="flex flex-grow flex-col gap-8 leading-relaxed tracking-wider text-[#1d1d1c]">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
          >
            Berawal dari kisah <b>Kakek Djoyo</b> yang merupakan seorang
            pangeran sah penerus tahta ayahnya, seorang raja di tanah Jawa.
            Sejak kecil, Pangeran Djoyo sudah kehilangan ibunya, seorang
            permaisuri yang meninggal karena sakit. Keberadaannya sebagai
            pewaris sah menjadi ancaman bagi saudara-saudaranya yang berlomba
            merebut tahta dengan penuh intrik dan tipu muslihat yang jahat.
          </motion.p>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
          >
            Dengan hati yang berat, Pangeran Djoyo memutuskan untuk meninggalkan
            istana dan memulai perjalanan panjang untuk mencari ilmu dan
            kedamaian.{" "}
            <span
              onClick={toggleExpand}
              className="text-blue-500 hover:cursor-pointer hover:underline"
            >
              {isExpanded ? "" : "Read More"}
            </span>
          </motion.p>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit={"hidden"}
                variants={containerVariants}
                className="flex flex-grow flex-col gap-8 leading-relaxed tracking-wider text-[#1d1d1c]"
              >
                <motion.p variants={paragraphVariants}>
                  Suatu malam, dalam perjalanannya melewati hutan yang lebat,
                  Pangeran Djoyo tersesat dan ia mendengar sayup-sayup suara
                  yang memanggil namanya, "Djoyo... Djoyo... Djoyo..." karena
                  penasaran, Pangeran Djoyo mengikutinya hingga tiba di depan
                  sebuah gua.
                </motion.p>
                <motion.p variants={paragraphVariants}>
                  Hujan mulai turun, lalu Djoyo memutuskan untuk berteduh di
                  dalam gua tersebut, karena gelap dan licin, Djoyo tak sengaja
                  tergelincir dan jatuh ke dalam lubang yang sangat dalam.
                </motion.p>
                <motion.p variants={paragraphVariants}>
                  Saat jatuh ribuan meter, Pangeran Djoyo kehilangan kesadaran,
                  ia merasa ada sesuatu yang menjaganya dan melindungi tubuhnya
                  hingga akhirnya tiba di dunia yang asing, dunia purba yang
                  penuh misteri dengan pohon-pohon yang menjulang tinggi ke
                  langit. Di sana terdapat kolam dengan sumber air berwarna
                  hijau, serta sistem cuaca yang berbeda dari yang diketahuinya.
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
                  bercocok tanam dan menjaga hutan lemon dari serangan kera dan
                  kelelawar yang sering muncul di malam hari.
                </motion.p>
                <motion.p variants={paragraphVariants}>
                  Untuk mengobati rasa rindu pada keluarga dan
                  sahabat-sahabatnya, Kakek Djoyo mulai membuat topeng-topeng
                  dari bahan yang ada di sekitarnya. Kecintaannya dengan
                  Nusantara membuat gua yang ia tinggali dihiasi ribuan topeng
                  wajah dari kesukuan yang berbeda-beda.
                </motion.p>
                <motion.p variants={paragraphVariants}>
                  Pada suatu malam, Kakek Djoyo tertidur lelap dan bermimpi. di
                  dalam mimpinya ia melihat 6 topengnya hidup dan menjelma
                  menjadi karakter anak-anak dengan tubuh buah lemon yang ia
                  sebut <b>MINILEMON</b>.
                </motion.p>
                <motion.p variants={paragraphVariants}>
                  Kakek Djoyo senang dan tertawa melihat anak-anak Minilemon.
                  Walau wajahnya berasal dari suku yang berbeda, Minilemon
                  bermain Bersama dengan penuh semangat, saling menghormati dan
                  bergotong royong.
                </motion.p>
                <motion.p variants={paragraphVariants}>
                  Kerinduannya menyebarkan nilai-nilai kebaikan dan keragaman
                  budaya terpancar dari pribadi{" "}
                  <b>
                    Wayan (Bali), Togar (Batak), Ucup (Sunda), Slamet (Jawa),
                    Memey (Tionghoa) dan Minggus (Papua)
                  </b>
                  , mereka adalah 6 sahabat sepermainan yang siap menjadi idola
                  baru untuk anak-anak Indonesia.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div
        className="relative w-full justify-center overflow-hidden"
        style={{
          width: "100%",
          height: "385px",
        }}
      >
        <Image
          src={Cave}
          alt="Cave"
          className="mt-10"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default StoryPage;
