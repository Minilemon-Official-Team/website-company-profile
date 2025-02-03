import Image from "next/image";

import { Family, Hero } from "@/data/contribution";
import BackgroundImage from "@/public/background/company.png";
import CoFounderTitle from "@/public/title/co-founder.png";
import MisiTitle from "@/public/title/misi.png";
import FamilyTitle from "@/public/title/our-family.png";
import HeroTitle from "@/public/title/our-hero.png";
import PTMinilemonNusantaraTitle from "@/public/title/pt-minilemon-nusantara.png";
import FounderTitle from "@/public/title/the-founder.png";
import VisiTitle from "@/public/title/visi.png";

import Heri from "@/public/contributors/Heri.jpg";
import Reno from "@/public/contributors/Reno.jpg";
import Banner from "@/components/ui/banner/banner";
import BannerWrapper from "@/components/ui/banner/banner-wrapper";
import PersonCard from "@/components/ui/personCard";
import Founder from "@/components/ui/founder";

const CompanyPage = () => {
  return (
    <div className="flex flex-col">
      <BannerWrapper
        backgroundImage={BackgroundImage}
        backgroundAlt="Background"
        bgColor="#1b1b1b"
      >
        <Banner
          productTitle={PTMinilemonNusantaraTitle}
          productTitleAlt="PT Minilemon Nusantara"
          className="gap-6 py-14"
        >
          <div className="z-20 flex flex-col gap-y-6 leading-loose tracking-[0.07em] text-[#c5cce0]">
            <p>
              PT. Minilemon Nusantara adalah perusahaan yang berdomisili di
              Surabaya dan Jakarta, Indonesia. Yang berorientasi pada Pendidikan
              Karakter Anak dan nilai - nilai kebaikan melalui berbagai Program
              Pendidikan berbasis seni, hiburan dan teknologi.
            </p>
            <p>
              Beragam program dikerjakan PT. Minilemon Nusantara untuk terus
              melakukan pendekatan terhadap Pendidikan, mulai dari film animasi,
              game, panggung boneka, podcast parenting dan berbagai macam
              program lainnya yang membawa karakter positif bagi anak-anak.
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
        </Banner>
      </BannerWrapper>

      {/* Visi dan Misi */}
      <div className="bg-[#1b1b1b] py-14">
        <div className="container flex flex-col gap-y-10">
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
              Menciptakan produk kreatif dan edukatif yang bekelanjutan
            </li>
            <li className="text-[#c5cce0]/90">
              Membangun ekosistem yang mandiri, kreatif dan punya daya saing
              kuat di kancah internsional
            </li>
            <li className="text-[#c5cce0]/90">
              Membangun sistem integrasi dengan teknlogi yang friendly,
              transparan, terukur dengan jangkauan yang luas
            </li>
          </ol>
        </div>
      </div>

      {/* Founder */}
      <Founder
        titleImage={FounderTitle}
        photo={Reno}
        titleAlt="The Founder"
        photoAlt="Reno Halsamer"
        bgColor="bg-[#a4bddc]"
      >
        <p>
          <b>Reno Halsamer</b> Adalah Pria yang lahir dan tinggal di Surabaya
          Indonesia. Sebagai seorang bisnisman dan penggiat Museum seni
          khususnya Topeng Indonesia, Sejak tahun 2015 di Surabaya, ditengah
          situasi yang dirasa mundurnya kecintaan masyarakat terhadap seni dan
          budaya, Reno Halsamer mencetuskan ide untuk menciptakan karakter
          animasi dengan mengkombinasikan topeng dan buah lemon. Selain topeng
          merupakan karya seni yang dibuat orisinil dari leluhur bangsa
          Indonesia, topeng juga diharapkan mampu mewakili wajah karakter
          masyarakan Indonesia
        </p>
        <p>
          Karakter animasi minilemon diharapkan menjadi figur baik dan menjadi
          teladan terutama untuk anak-anak Indonesia, sehingga buah lemon yang
          dikenal banyak manfaatnya, sangat cocok dipadukan dengan topeng, untuk
          menjadi &quot;THE GOOD CHARACTER&quot; dengan &quot;WAJAH
          INDOENSIA&quot;. Dengan idenya yang brilian, &quot;BAPAK
          MINILEMON&quot; merupakan julukan yang pantas dilekatkan dengan Reno
          Halsamer.
        </p>
      </Founder>

      {/* Co Founder */}
      <Founder
        titleImage={CoFounderTitle}
        photo={Heri}
        titleAlt="Co Founder"
        photoAlt="Heriyadi Natawijaya"
        bgColor="bg-[#d5ddf4]"
      >
        <p>
          <b className="text-[#1b1b1d]/90">Heriyadi Natawijaya</b> lahir di
          Palembang dan tinggal di Depok Indonesia, adalah Seorang Sutradara
          iklan, Video Klip dan Animasi Sejak 2009. Heriyadi Natawijaya juga
          sebagai Pendiri Perakaria & IDsains sebagai Pusat Komunitas Kreatif
          dan produksi seni di Depok, Indonesia.
        </p>
        <p>
          Karirnya di dunia Seni dan Perfilman membuatnya bertemu Reno Halsamer
          sebagai sosok pencetus Minilemon. Mempunyai Visi Misi yang sama untuk
          kemudian menjadikan minilemon sebagai produk Kreatif, edukatif dengan
          nilai-nilai budaya.
        </p>
        <p>
          Pengalaman panjang sebagai kepala Seni, dan kecintaannya dengan
          teknologi, membuat Heriyadi Natawijaya banyak menciptakan gagasan dan
          putusan yang berpihak kepada estetika dan budaya kerja yang tech
          savvy, menyenangkan, transparan dan terukur. dengan pemikiran dan
          Kepiawayannya &quot;Paman Minilemon&quot; adalah julukan yang cocok
          untuk Heriyadi Natawijaya.
        </p>
      </Founder>

      {/* Our Hero Desktop View */}
      <div className="flex flex-col gap-y-12 bg-[#1b1b1b] py-14">
        <div className="container flex items-center justify-center">
          <Image src={HeroTitle} alt="Our Hero" />
        </div>
        <div className="container">
          <div className="grid grid-cols-4 gap-x-8 gap-y-16 pb-12">
            {Hero.map((data) => (
              <PersonCard
                key={data.id}
                photo={data.photo}
                name={data.name}
                position={data.position}
                colorPrimary="text-white"
                colorName="text-white/60"
                colorPosition="text-white/80"
              />
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
          <div className="grid grid-cols-3 gap-x-8 gap-y-12 pb-12">
            {Family.map((data) => (
              <PersonCard
                key={data.id}
                photo={data.photo}
                name={data.name}
                position={data.position}
                colorPrimary="text-black"
                colorName="text-black/60"
                colorPosition="text-black/80"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
