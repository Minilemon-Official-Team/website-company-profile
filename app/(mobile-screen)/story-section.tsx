"use client";

import { Button as ButtonLegacy } from "@/components/ui/button-sec";
import { containerVariants } from "@/lib/animations/containerVariants";
import { paragraphVariants } from "@/lib/animations/paragraphVariants";
import { cn } from "@/lib/utils";
import BackgroundStory from "@/public/background/story-mobile.png";
import StoryTitle from "@/public/title/story.png";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function StorySection() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
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
        <div className="max-w-screen-640 z-10 flex flex-col justify-center gap-y-4 px-6 py-4">
          <div id="story" className="z-10 scroll-mt-[50vh]">
            <Image
              src={StoryTitle}
              alt="Story"
              className="400:w-[125px] w-[110px]"
            />
          </div>
          <div className="z-10 flex flex-col gap-y-6 leading-5 tracking-widest text-[#c5cce2]">
            <p>
              Berawal dari kisah Kakek Djoyo yang merupakan seorang pangeran sah
              penerus tahta ayahnya, seorang raja di tanah Jawa. Sejak kecil,
              Pangeran Djoyo sudah kehilangan ibunya, seorang permaisuri yang
              meninggal karena sakit. Keberadaannya sebagai pewaris sah menjadi
              ancaman bagi saudara-saudaranya yang berlomba merebut tahta dengan
              penuh intrik dan tipu muslihat yang jahat.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#d4e1f4]">
        <div className="max-w-screen-640 flex flex-col items-center px-6 py-4 leading-5 tracking-widest">
          <p>
            Dengan hati yang berat, Pangeran Djoyo memutuskan untuk meninggalkan
            istana dan memulai perjalanan panjang untuk mencari ilmu dan
            kedamaian.
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
        {isExpanded && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="max-w-screen-640 flex flex-col gap-y-4 bg-[#d4e1f4] px-6 py-4 leading-5 tracking-widest"
          >
            <motion.p variants={paragraphVariants}>
              Suatu malam, dalam perjalanannya melewati hutan yang lebat,
              Pangeran Djoyo tersesat dan ia mendengar sayup-sayup suara yang
              memanggil namanya, &quot;Djoyo... Djoyo... Djoyo...&quot; karena
              penasaran, Pangeran Djoyo mengikutinya hingga tiba di depan sebuah
              gua.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Hujan mulai turun, lalu Djoyo memutuskan untuk berteduh di dalam
              gua tersebut, karena gelap dan licin, Djoyo tak sengaja
              tergelincir dan jatuh ke dalam lubang yang sangat dalam.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Saat jatuh ribuan meter, Pangeran Djoyo kehilangan kesadaran, ia
              merasa ada sesuatu yang menjaganya dan melindungi tubuhnya hingga
              akhirnya tiba di dunia yang asing, dunia purba yang penuh misteri
              dengan pohon-pohon yang menjulang tinggi ke langit. Di sana
              terdapat kolam dengan sumber air berwarna hijau, serta sistem
              cuaca yang berbeda dari yang diketahuinya.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Pangeran Djoyo mulai merasa lapar dan berusaha mencari makanan. Di
              tengah pencariannya, ia menemukan sebuah gua tersembunyi di antara
              hutan pohon lemon. Ia memutuskan untuk beristirahat di sana,
              sambil menikmati buah lemon segar yang menyelamatkannya dari rasa
              lapar dan dahaga di tengah hutan purba.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Demi tahun berlalu, Pangeran Djoyo terlihat semakin tua dan mulai
              tinggal di tengah hutan purba. Ia mengisi waktu dengan bercocok
              tanam dan menjaga hutan lemon dari serangan kera dan kelelawar
              yang sering muncul di malam hari.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Untuk mengobati rasa rindu pada keluarga dan sahabat-sahabatnya,
              Kakek Djoyo mulai membuat topeng-topeng dari bahan yang ada di
              sekitarnya. Kecintaannya dengan Nusantara membuat gua yang ia
              tinggali dihiasi ribuan topeng wajah dari kesukuan yang
              berbeda-beda.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Pada suatu malam, Kakek Djoyo tertidur lelap dan bermimpi. di
              dalam mimpinya ia melihat 6 topengnya hidup dan menjelma menjadi
              karakter anak-anak dengan tubuh buah lemon yang ia sebut
              MINILEMON.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Kakek Djoyo senang dan tertawa melihat anak-anak Minilemon. Walau
              wajahnya berasal dari suku yang berbeda, Minilemon bermain Bersama
              dengan penuh semangat, saling menghormati dan bergotong royong.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Kerinduannya menyebarkan nilai-nilai kebaikan dan keragaman budaya
              terpancar dari pribadi Wayan (Bali), Togar (Batak), Ucup (Sunda),
              Slamet (Jawa), Memey (Tionghoa) dan Minggus (Papua) , mereka
              adalah 6 sahabat sepermainan yang siap menjadi idola baru untuk
              anak-anak Indonesia.
            </motion.p>
            <div className="flex w-full items-center justify-center">
              <ButtonLegacy.Primary
                className={cn(
                  isExpanded === true ? "flex" : "hidden",
                  "scale-90",
                )}
                onClick={toggleExpand}
              >
                Read Less
              </ButtonLegacy.Primary>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default StorySection;
