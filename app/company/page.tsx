import React from "react";
import { Placeholder } from "placeholder";
import Image from "next/image";

import VisiTitle from "@/public/title/visi.png";
import MisiTitle from "@/public/title/misi.png";
import FounderTitle from "@/public/title/the-founder.png";
import CoFounderTitle from "@/public/title/co-founder.png";
import PTMinilemonNusantaraTitle from "@/public/title/pt-minilemon-nusantara.png";
import BackgroundImage from "@/public/background/company.png";
import HeroTitle from "@/public/title/our-hero.png";
import FamilyTitle from "@/public/title/our-family.png";
import { Family, Hero } from "@/data/contribution";

const CompanyPage = () => {
  return (
    <div className="flex flex-col">
      {/* PT Minilemon Indonesia */}
      <div className="relative inset-0 flex h-[65vh] items-center bg-[#1b1b1b] bg-cover bg-center">
        <Image
          src={BackgroundImage}
          alt="Background"
          quality={100}
          fill
          sizes="100vw"
          objectFit="cover"
          className="absolute inset-0 z-10"
        />
        <div className="container z-20 flex flex-col gap-6 pb-4">
          <div className="z-20">
            <Image
              src={PTMinilemonNusantaraTitle}
              alt="PT Minilemon Nusantara"
            />
          </div>
          <div className="z-20 flex flex-col gap-y-6 leading-loose tracking-[0.07em] text-[#c5cce0]">
            <p>
              PT. Minilemon Nusantara adalah perusahaan yang berdomisili di
              Surabaya dan Jakarta, Indoensia. Yang berorientasi pada Pendidikan
              Karakter Anak dan nilai - nilai kebaikan melalui berbagai Program
              Pendidikan berbasis seni, hiburan dan teknologi.
            </p>
            <p>
              Beragam program dikerjakan PT. Minilemon Nusantara untuk terus
              melakukan pendekatan terhadap Pendidikan, mulai dari film aniasi,
              game, panggung boneka, podcast parenting dan berbai macem program
              lainnya yang membawa karakter positif bagi anak-anak.
            </p>
            <p>
              PT. Minilemon Nusantara adalah perusahaan persero terbatas yang
              merupakan bagian dari dTopeng Kingdom Foundation, sebuah Yayasan
              yang memiliki Visi dan Misi dalam penyelamatan nilai - nilai
              Sejarah dan Budaya serta benda - benda artefak yang memiliki nilai
              sejarah bagi bangsa Indonesia dengan melakukan pembangunan Museum
              di berbagi tempat di Indonesia.
            </p>
          </div>
        </div>
      </div>

      {/* Visi dan Misi */}
      <div className="bg-[#1b1b1b] py-14">
        <div className="container flex flex-col gap-y-10 px-6">
          <div className="flex w-full justify-center">
            <Image src={VisiTitle} alt="Visi dan Misi" />
          </div>
          <p className="leading-[1.8] tracking-[0.04em] text-[#d1d9e6]">
            Sebagai anak bangsa yang baik dan cinta tanah air, PT Minilemon
            Nusantara mengambil tanggung jawab untuk berkontribusi memberikan
            edukasi dan harapan untuk kemajuan bangsa.
            <br />
            Dengan menciptakan &quot;Good character&quot; PT Minilemon Nusantara
            diharapkan dapat berperan kreatif untuk mempersiapkan generasi muda
            dan anak-anak Indonesia yang tangguh, cinta tanah air, dengan
            membawa nilai - nilai kebaikan dan budaya yang merupakan warisan
            yang selalu kita banggakan.
          </p>
          <div className="flex w-full justify-center">
            <Image src={MisiTitle} alt="Misi" />
          </div>
          <ol className="ml-6 list-decimal leading-[1.8] tracking-[0.02em] text-[#c5cce0]/90">
            <li className="text-[#c5cce0]/90">
              Menciptakan produk kreatif dan eduktif yang bekelanjutan
            </li>
            <li className="text-[#c5cce0]/90">
              Membangung ekosistem yang mandiri, kreatif dan punya daya saing
              kuat di kanca internsional
            </li>
            <li className="text-[#c5cce0]/90">
              Membangun sistem integrasi dengan teknlogi yang friendly,
              transparan, terukur dengan jangkuan yang luas
            </li>
          </ol>
        </div>
      </div>

      {/* Founder */}
      <div className="flex flex-row bg-[#a4bddc] py-14">
        <div className="container flex flex-col gap-8 px-8 lg:px-0">
          <div className="flex w-full justify-center lg:justify-start">
            <Image src={FounderTitle} alt="The Founder" />
          </div>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex basis-5/12 items-center justify-center lg:justify-start">
              <Placeholder
                height={495}
                width={350}
                background="#333"
                color="#fff"
              />
            </div>
            <div className="flex basis-7/12 flex-col gap-y-8 text-[0.93rem] leading-loose tracking-wide text-[#1b1b1d]/70">
              <p>
                <b>Reno Halsamer</b> Adalah Pria yang lahir dan tinggal di
                Surabaya Indoensia. Sebagai seorang bisnisman dan penggiat
                Museum seni khususnya Topeng Indonesia, Sejak tahun 2015 di
                Surabaya, ditengah situasi yang dirasa mundurnya kecintaan
                masyarakat terhadap seni dan budaya, Reno Halsamer mencetuskan
                ide untuk menciptakan karakter animasi dengan mengkombinasikan
                topeng dan buah lemon. Selain topeng merupakan karya seni yang
                dibuat orisinil dari leluhur bangsa Indonesia, topeng juga
                diharapkan mampu mewakili wajah karakter masyarakan Indonesia
              </p>
              <p>
                Karakter animasi minilemon diharapkan menjadi figur baik dan
                menjadi teladan terutama untuk anak-anak Indonesia, sehingga
                buah lemon yang dikenal banyak manfaatnya, sangat cocok
                dipadukan dengan topeng, untuk menjadi &quot;THE GOOD
                CHARACTER&quot; dengan &quot;WAJAH INDOENSIA&quot;. Dengan
                idenya yang brilian, &quot;BAPAK MINILEMON&quot; merupakan
                julukan yang pantas dilekatkan dengan Reno Halsamer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Co Founder */}
      <div className="flex flex-row bg-[#d5ddf4] py-14">
        <div className="container flex flex-col gap-6 px-8 lg:px-0">
          <div className="flex w-full justify-center lg:justify-start">
            <Image src={CoFounderTitle} alt="Co Founder" />
          </div>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex basis-5/12 items-center justify-center lg:justify-start">
              <Placeholder
                height={495}
                width={350}
                background="#333"
                color="#fff"
              />
            </div>
            <div className="flex basis-7/12 flex-col gap-y-6 text-[0.93rem] leading-loose tracking-wide text-[#1b1b1d]/70">
              <p>
                <b className="text-[#1b1b1d]/90">Heriyadi Natawijaya</b> lahir
                di Palembang dan tinggal di Depok Indonesia, adlaah Seorang
                Sutradara iklan, Video Klik dan Animasi Sejak 2009. Heriyadi
                Natawijaya juga sebagai Pendiri Perakaria & IDsains sebagai
                Pusat Komunitas Kreatif dan produksi seni di Depok, Indonesia.
              </p>
              <p>
                Karirnya di dunia Seni dan Perfilman membuatnya bertemu Reno
                Halsamer sebagai sosok pencetus Minilemon. Mempunyai Visi Misi
                yang sama untuk kemudian menjadikan minilemon sebagai produk
                Kreatif, edukatif dengan nilai-nilai budaya.
              </p>
              <p>
                Pengalaman panjang sebagai kepala Seni, dan kecintaannya dengan
                teknologi, membuat Heriyadi Natawijaya banyak menciptakan
                gagasan dan putusan yang berpihak kepada estetika dan budaya
                kerja yang tech savvy, menyenangkan, transparan dan terukur.
                dengan pemikiran dan Kepiawayannya &quot;Paman Minilemon&quot;
                adalah julukan yang cocok untuk Heriyadi Natawijaya.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Hero Desktop View */}
      <div className="flex flex-col gap-y-12 bg-[#1b1b1b] py-14">
        <div className="container flex items-center justify-center">
          <Image src={HeroTitle} alt="Our Hero" />
        </div>
        <div className="container">
          <div className="grid grid-cols-4 gap-x-8 gap-y-16 pb-12">
            {Hero.map((data) => (
              <div
                className="flex flex-col items-center justify-center text-white"
                key={data.id}
              >
                <div className="pb-3">
                  <Placeholder
                    height={200}
                    width={150}
                    background="#fff"
                    color="#333"
                  />
                </div>
                <p className="text-base font-semibold capitalize text-white/60">
                  {data.name}
                </p>
                <p className="text-sm font-bold uppercase text-white/80">
                  {data.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Partner */}
      <div className="hidden bg-[#fdf4eb] py-14 lg:flex">
        <div className="container">
          <div className="mb-16 flex w-full justify-center">
            <Image src={FamilyTitle} alt="Special Partner" />
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
            {Family.map((data) => (
              <div
                className="flex flex-col items-center justify-center text-black"
                key={data.id}
              >
                <div className="pb-3">
                  <Placeholder
                    height={200}
                    width={150}
                    background="#fff"
                    color="#333"
                  />
                </div>
                <p className="text-base font-semibold capitalize text-black/60">
                  {data.name}
                </p>
                <p className="text-sm font-bold uppercase text-black/80">
                  {data.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
