"use client";

import ContactMobile from "@/components/contact-mobile";
import { Button as ButtonLegacy } from "@/components/ui/button-sec";
import { Hero } from "@/data/contribution";
import { containerVariants } from "@/lib/animations/containerVariants";
import {
  fifthDivVariants,
  fourthDivVariants,
  secondDivVariants,
  thirdDivVariants,
} from "@/lib/animations/divVariants";
import { paragraphVariants } from "@/lib/animations/paragraphVariants";
import { cn } from "@/lib/utils";
import BackgroundCompany from "@/public/background/company-mobile.png";
import CoFounderTitle from "@/public/title/co-founder.png";
import MisiTitle from "@/public/title/misi.png";
import OurFamilyTile from "@/public/title/our-family.png";
import OurHeroTile from "@/public/title/our-hero.png";
import PtMinilemonNusantaraMobileTitle from "@/public/title/pt-minilemon-nusantara-mobile-1.png";
import TheFounderTitle from "@/public/title/the-founder.png";
import VisiTitle from "@/public/title/visi.png";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function CompanySection() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
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
          <div id="company" className="z-10">
            <Image
              src={PtMinilemonNusantaraMobileTitle}
              alt="PtMinilemonNusantaraMobileTitle"
              className="w-[270px]"
            />
          </div>
          <div className="z-10 leading-relaxed tracking-widest text-[#c5cce2]">
            <p>
              PT. Minilemon Nusantaraadlah perusahaan yang berdomisili di
              Surabaya dan Jakarta, Indonesia. Yang berorientasi pada Pendidikan
              Karakter Anak dan nilai-nilai kebaikan memlalui berbagai Program
              Pendidikan berbasis seni, hiburan, dan teknologi.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#e7e7e7] pt-5">
        <div className="flex max-w-screen-tablet flex-col items-center px-6 py-3 leading-relaxed tracking-widest">
          <p>
            Beragam program dikerjakan PT. Minilemon Nusantara untuk terus
            melakukan pendekatan terhadap pendidikan, mulai dari film animasi,
            game, panggung boneka, podcast parenting dan berbagai macam progam
            lainnya yang membawa karakter positif bagi anak-anak.
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
              className="flex flex-col items-center bg-[#e7e7e7] pb-5"
            >
              <motion.div className="flex max-w-screen-tablet flex-col items-end justify-end gap-4 px-6 py-4">
                <motion.p
                  className="leading-relaxed tracking-widest"
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
                  berkontribusi memberikan edukasi dan harapan untuk kemajuan
                  bangsa. Dengan menciptakan &quot;Good character&quot; PT
                  Minilemon Nusantara diharapkan dapat berperan kreatif untuk
                  mempersiapkan generasi muda dan anak-anak Indonesia yang
                  tangguh, cinta tanah air, dengan membawa nilai-nilai kebaikan
                  dan budaya yang merupakan warisan yang selalu kita banggakan.
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
                        2. Membangun ekosistem yang mandiri, kreatif dan punya
                        daya saing kuat di kanca internasional
                      </motion.p>
                    </motion.li>
                    <motion.li>
                      <motion.p
                        className="text-sm leading-relaxed tracking-widest text-[#c5cce2]"
                        variants={paragraphVariants}
                      >
                        3. Membangun sistem integrasi dengan teknologi yang
                        friendy, trasparan, terukur dengan jangkauan yang luas
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
                  {/* <motion.img
                          src="https://via.placeholder.com/200x250"
                          alt="Founder Image"
                          className="float-left shadow-lg mr-4 rounded-md w-1/2"
                        /> */}

                  <div className="float-left mr-4 flex h-[250px] w-[200px] items-center justify-center bg-gray-400 text-xl text-gray-800/50">
                    200x250
                  </div>
                  <motion.div>
                    <motion.p
                      className="text-start text-sm leading-relaxed tracking-widest"
                      variants={paragraphVariants}
                    >
                      <motion.span className="mr-2 font-bold">
                        Reno Halsamer
                      </motion.span>
                      Adalah Pria yang lahir dan tinggal di Surabaya Indonesia.
                      Sebagai seorang bisnisman dan penggiat Museum seni
                      khususnya Topeng Indonesia, Sejak tahun 2015 di Surabaya,
                      dengan situasi yang dirasa mundurnya kecintaan masyarakat
                      terhadap seni dan budaya, Reno Halsamer mencetuskan ide
                      untuk menciptakan karakter animasi dengan mengkombinasikan
                      topeng dan buah lemon. Sehingga, topeng merupakan karya
                      seni yang dibuat orisinal dari leluhur bangsa Indonesia,
                      topeng juga diharapkan mampu mewakili wajah karakter
                      masyarakat Indonesia.
                    </motion.p>
                    <motion.p
                      className="mt-5 text-start text-sm leading-relaxed tracking-widest"
                      variants={paragraphVariants}
                    >
                      Karakter animasi minilemon diharapkan menjadi figur baik
                      dan menjadi teladan teruntuk anak-anak Indonesia, sehinga
                      buah lemon yang dikenal banyak manfaatnya, sangat cocok
                      dipadukan dengan topeng, untuk menjadi &quot;THE GOOD
                      CHARACTER&quot; dengan &quot;WAJAH INDONESIA&quot;. Dengan
                      ide yang brilian, &quot;BAPAK MINILEMON&quot; merupakan
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
                  {/* <motion.img
                          src="https://via.placeholder.com/200x250"
                          alt="Founder Image"
                          className="float-left shadow-lg mr-4 rounded-md w-1/2"
                        /> */}
                  <div className="float-left mr-4 flex h-[250px] w-[200px] items-center justify-center bg-gray-400 text-xl text-gray-800/50">
                    200x250
                  </div>
                  <motion.div>
                    <motion.p
                      className="text-start text-sm leading-relaxed tracking-widest"
                      variants={paragraphVariants}
                    >
                      <motion.span className="mr-2 font-bold">
                        Heriyadi Natawijaya
                      </motion.span>
                      Lahir di Palembang dan tinggal di Depok Indonesia, adalah
                      Seorang Sutradara Iklan, Video Klip dan Animasi Sejak
                      2009. Heriyadi Natawijaya juga sebagai Pendiri Perakaria
                      dan IDSains sebagai Pusat Komunitas Kreatif dan produksi
                      seni di Depok, Indonesia.
                    </motion.p>
                    <motion.p
                      className="mt-5 text-start text-sm leading-relaxed tracking-widest"
                      variants={paragraphVariants}
                    >
                      Karirnya di dunia Seni dan Perfilman membuatnya bertemu
                      Reno Halsamer sebagai sosok pencetus Minilemon. Mempunyai
                      Visi Misi yang sama untuk kemudian menghidupkan minilemon
                      sebagai produk Kreatif, edukatif dengan nilai-nilai
                      budaya.
                    </motion.p>
                    <motion.p
                      className="mt-5 text-start text-sm leading-relaxed tracking-widest"
                      variants={paragraphVariants}
                    >
                      Pengalaman panjang sebagai kepala Seni, dan kecintaannya
                      dengan teknologi, membuat Heriyadi Natawijaya banyak
                      menciptakan gagasan dan putusan yang berpihak kepada
                      estetika dan budaya kerja yang tech savvy, menyenangkan,
                      transparan dan terukur, dengan pergelaran dan
                      Kepiawaiannya “Paman Minilemon” adalah julukan yang cocok
                      untuk Heriyadi Natawijaya.
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
                      {/* <motion.img
                              src="https://picsum.photos/id/200/200/250?grayscale"
                              alt="Founder Image"
                              className="w-full"
                            /> */}
                      <div className="flex h-[250px] w-[200px] items-center justify-center bg-gray-400 text-xl text-gray-800/50">
                        200x250
                      </div>
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
                      {/* <motion.img
                              src="https://picsum.photos/seed/picsum/200/250"
                              alt="Founder Image"
                              className="w-full"
                            /> */}
                      <div className="flex h-[250px] w-[200px] items-center justify-center bg-gray-400 text-xl text-gray-800/50">
                        200x250
                      </div>
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
                  isExpanded === true ? "flex" : "hidden",
                  "my-7 scale-90",
                )}
                onClick={toggleExpand}
              >
                Read Less
              </ButtonLegacy.Primary>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <ContactMobile />
    </div>
  );
}

export default CompanySection;
