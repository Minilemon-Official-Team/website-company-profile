import React from "react";
import { Placeholder } from "placeholder";
import Image from "next/image";
import { specialPartners } from "../../data/specialPartners";
import VisiTitle from "@/public/title-picture/visi-1.png";
import MisiTitle from "@/public/title-picture/misi-1.png";
import FounderTitle from "@/public/title-picture/the-founder-1.png";
import CoFounderTitle from "@/public/title-picture/co-founder-1.png";
import SpecialPartnerTitle from "@/public/title-picture/special-partner-1.png";
import PTMinilemonNusantaraTitle from "@/public/title-picture/pt-minilemon-nusantara.png";

const CompanyPage = () => {
  return (
    <div className="flex flex-col">
      {/* PT Minilemon Indonesia */}
      <div className="bg-[#d3def4] py-20">
        <div className="container flex flex-col gap-y-6 p-6">
          <div className="flex w-full justify-center">
            <Image
              src={PTMinilemonNusantaraTitle}
              alt="PT Minilemon Nusantara"
            />
          </div>
          <div className="flex flex-col gap-y-6 leading-loose tracking-widest">
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
      <div className="bg-[#2f2f2f] py-20">
        <div className="container flex flex-col gap-y-6 p-6">
          <div className="flex w-full justify-center">
            <Image src={VisiTitle} alt="Visi dan Misi" />
          </div>
          <p className="leading-loose tracking-widest text-[#d1d9e6]">
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
          <ol className="ml-4 list-decimal leading-loose tracking-widest text-[#aab3c3]">
            <li className="text-[#d1d9e6]">
              Menciptakan produk kreatif dan eduktif yang bekelanjutan
            </li>
            <li className="text-[#d1d9e6]">
              Membangung ekosistem yang mandiri, kreatif dan punya daya saing
              kuat di kanca internsional
            </li>
            <li className="text-[#d1d9e6]">
              Membangun sistem integrasi dengan teknlogi yang friendly,
              transparan, terukur dengan jangkuan yang luas
            </li>
          </ol>
        </div>
      </div>

      {/* Founder */}
      <div className="flex flex-row bg-[#a4bddc] py-12">
        <div className="container flex flex-col gap-6 px-8 lg:px-0">
          <div className="flex w-full justify-center lg:justify-start">
            <Image src={FounderTitle} alt="The Founder" />
          </div>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex basis-5/12 items-center justify-center lg:justify-start">
              <Placeholder
                width="400"
                height="570"
                background="#333"
                color="#fff"
              />
            </div>
            <div className="flex basis-7/12 flex-col gap-y-6 leading-loose tracking-wider text-[#1b1b1d]">
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
      <div className="flex flex-row bg-[#d3def4] py-12">
        <div className="container flex flex-col gap-6 px-8 lg:px-0">
          <div className="flex w-full justify-center lg:justify-start">
            <Image src={CoFounderTitle} alt="Co Founder" />
          </div>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex basis-5/12 items-center justify-center lg:justify-start">
              <Placeholder
                width="400"
                height="570"
                background="#333"
                color="#fff"
              />
            </div>
            <div className="flex basis-7/12 flex-col gap-y-6 leading-loose tracking-wider text-[#1b1b1d]">
              <p>
                <b>Heriyadi Natawijaya</b> lahir di Palembang dan tinggal di
                Depok Indonesia, adlaah Seorang Sutradara iklan, Video Klik dan
                Animasi Sejak 2009. Heriyadi Natawijaya juga sebagai Pendiri
                Perakaria & IDsains sebagai Pusat Komunitas Kreatif dan produksi
                seni di Depok, Indonesia.
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
      {/* Special Partner */}
      <div className="hidden bg-[#fbe5db] py-20 lg:flex">
        <div className="container">
          <div className="mb-16 flex w-full justify-center">
            <Image src={SpecialPartnerTitle} alt="Special Partner" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {specialPartners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">
                  <Placeholder
                    width="200"
                    height="250"
                    background="#333"
                    color="#fff"
                  />
                </div>
                <p className="mt-4">{partner.name}</p>
                <p className="text-sm font-semibold">{partner.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
