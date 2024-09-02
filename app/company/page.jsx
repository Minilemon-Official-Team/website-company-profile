import React from "react";
import { cn } from "../../lib/utils";
import { luckiest_guy } from "../fonts";
import { Placeholder } from "placeholder";
import { specialPartners } from "../../data/specialPartners"; 


const CompanyPage = () => {
  return (
    <div className="flex flex-col">
      {/* PT Minilemon Indonesia */}
      <div className="bg-[#d3def4] py-20">
        <div className="container flex flex-col gap-y-6 p-6 ">
          <h2
            className={cn(
              luckiest_guy.className,
              "text-5xl md:text-6xl lg:text-7xl bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
              "drop-shadow-[0px_4px_2px_rgba(129,40,86,1)]"
            )}>
            PT. Minilemon Nusantara
          </h2>
          <div className="leading-loose flex flex-col gap-y-6 tracking-widest">
            <p>
              PT. Minilemon Nusantara adalah perusahaan yang berdomisili di Surabaya dan Jakarta, Indoensia. Yang berorientasi pada Pendidikan
              Karakter Anak dan nilai - nilai kebaikan melalui berbagai Program Pendidikan berbasis seni, hiburan dan teknologi.
            </p>
            <p>
              Beragam program dikerjakan PT. Minilemon Nusantara untuk terus melakukan pendekatan terhadap Pendidikan, mulai dari film aniasi, game,
              panggung boneka, podcast parenting dan berbai macem program lainnya yang membawa karakter positif bagi anak-anak.
            </p>
            <p>
              PT. Minilemon Nusantara adalah perusahaan persero terbatas yang merupakan bagian dari dTopeng Kingdom Foundation, sebuah Yayasan yang
              memiliki Visi dan Misi dalam penyelamatan nilai - nilai Sejarah dan Budaya serta benda - benda artefak yang memiliki nilai sejarah bagi
              bangsa Indonesia dengan melakukan pembangunan Museum di berbagi tempat di Indonesia.
            </p>
          </div>
        </div>
      </div>

      {/* Visi dan Misi */}
      <div className="bg-[#2f2f2f] py-20">
        <div className="container flex flex-col gap-y-6 p-6 ">
          <h2
            className={cn(
              luckiest_guy.className,
              "text-5xl md:text-6xl lg:text-7xl bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap text-center"
            )}>
            Visi
          </h2>
          <p className="text-[#aab3c3] leading-relaxed">
            Sebagai anak bangsa yang baik dan cinta tanah air, PT Minilemon Nusantara mengambil tanggung jawab untuk berkontribusi memberikan edukasi
            dan harapan untuk kemajuan bangsa.
            <br />
            Dengan menciptakan "Good character" PT Minilemon Nusantara diharapkan dapat berperan kreatif untuk mempersiapkan generasi muda dan
            anak-anak Indonesia yang tangguh, cinta tanah air, dengan membawa nilai - nilai kebaikan dan budaya yang merupakan warisan yang selalu
            kita banggakan.
          </p>
          <h2
            className={cn(
              luckiest_guy.className,
              "text-5xl md:text-6xl lg:text-7xl bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap text-center"
            )}>
            Misi
          </h2>
          <ol className="text-[#aab3c3] list-decimal leading-relaxed">
            <li className="text-[#aab3c3]">Menciptakan produk kreatif dan eduktif yang bekelanjutan</li>
            <li className="text-[#aab3c3]">Membangung ekosistem yang mandiri, kreatif dan punya daya saing kuat di kanca internsional</li>
            <li className="text-[#aab3c3]">
              Membangun sistem integrasi dengan teknlogi yang friendly, transparan, terukur dengan jangkuan yang luas
            </li>
          </ol>
        </div>
      </div>

      {/* Founder */}
      <div className="flex flex-row bg-[#a4bddc] py-12">
        <div className="container flex flex-col md:flex-row gap-x-6 px-8 lg:px-0">
          <div className="flex flex-col items-center justify-center basis-4/12">
            <h2
              className={cn(
                luckiest_guy.className,
                "text-4xl md:hidden bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap mb-4",
                "drop-shadow-[0px_5px_0px_rgba(2,43,125,1)]"
              )}>
              The Founder
            </h2>
            <Placeholder width="350" height="500" background="#333" color="#fff" />
          </div>
          <div className="flex flex-col text-[#1b1b1d] tracking-wider leading-loose gap-y-6 basis-8/12">
            <div>
              <h2
                className={cn(
                  luckiest_guy.className,
                  "md:text-6xl lg:text-7xl hidden md:block bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                  "drop-shadow-[0px_5px_0px_rgba(2,43,125,1)]"
                )}>
                The Founder
              </h2>
            </div>
            <p>
              <b>Reno Halsamer</b> Adalah Pria yang lahir dan tinggal di Surabaya Indoensia. Sebagai seorang bisnisman dan penggiat Museum seni
              khususnya Topeng Indonesia, Sejak tahun 2015 di Surabaya, ditengah situasi yang dirasa mundurnya kecintaan masyarakat terhadap seni dan
              budaya, Reno Halsamer mencetuskan ide untuk menciptakan karakter animasi dengan mengkombinasikan topeng dan buah lemon. Selain topeng
              merupakan karya seni yang dibuat orisinil dari leluhur bangsa Indonesia, topeng juga diharapkan mampu mewakili wajah karakter masyarakan
              Indonesia
            </p>
            <p>
              Karakter animasi minilemon diharapkan menjadi figur baik dan menjadi teladan terutama untuk anak-anak Indonesia, sehingga buah lemon
              yang dikenal banyak manfaatnya, sangat cocok dipadukan dengan topeng, untuk menjadi "THE GOOD CHARACTER" dengan "WAJAH INDOENSIA".
              Dengan idenya yang brilian, "BAPAK MINILEMON" merupakan julukan yang pantas dilekatkan dengan Reno Halsamer.
            </p>
          </div>
        </div>
      </div>

      {/* Co Founder */}
      <div className="flex flex-row bg-[#d3def4] py-12">
        <div className="container flex flex-col md:flex-row gap-x-6 px-8 lg:px-0">
          <div className="flex flex-col items-center justify-center basis-4/12">
            <h2
              className={cn(
                luckiest_guy.className,
                "text-4xl md:hidden bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap mb-4",
                "drop-shadow-[0px_5px_0px_rgba(2,43,125,1)]"
              )}>
              Co Founder, CEO
            </h2>
            <Placeholder width="350" height="500" background="#333" color="#fff" />
          </div>
          <div className="flex flex-col text-[#1b1b1d] tracking-wider leading-loose gap-y-6 basis-8/12">
            <div>
              <h2
                className={cn(
                  luckiest_guy.className,
                  "md:text-6xl lg:text-7xl hidden md:block bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                  "drop-shadow-[0px_5px_0px_rgba(2,43,125,1)]"
                )}>
                Co Founder, CEO
              </h2>
            </div>
            <p>
              <b>Heriyadi Natawijaya</b> lahir di Palembang dan tinggal di Depok Indonesia, adlaah Seorang Sutradara iklan, Video Klik dan Animasi
              Sejak 2009. Heriyadi Natawijaya juga sebagai Pendiri Perakaria & IDsains sebagai Pusat Komunitas Kreatif dan produksi seni di Depok,
              Indonesia.
            </p>
            <p>
              Karirnya di dunia Seni dan Perfilman membuatnya bertemu Reno Halsamer sebagai sosok pencetus Minilemon. Mempunyai Visi Misi yang sama
              untuk kemudian menjadikan minilemon sebagai produk Kreatif, edukatif dengan nilai-nilai budaya.
            </p>
            <p>
              Pengalaman panjang sebagai kepala Seni, dan kecintaannya dengan teknologi, membuat Heriyadi Natawijaya banyak menciptakan gagasan dan
              putusan yang berpihak kepada estetika dan budaya kerja yang tech savvy, menyenangkan, transparan dan terukur. dengan pemikiran dan
              Kepiawayannya "Paman Minilemon" adalah julukan yang cocok untuk Heriyadi Natawijaya.
            </p>
          </div>
        </div>
      </div>
      {/* Special Partner */}
      <div className="bg-[#fbe5db] py-20">
        <div className="container">
          <h2
            className={cn(
              luckiest_guy.className,
              "text-center text-5xl md:text-6xl lg:text-7xl bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap mb-10"
            )}
          >
            Special Partner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialPartners.map((partner, index) => (
              <div key={index} className="text-center">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="mx-auto"
                />
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
