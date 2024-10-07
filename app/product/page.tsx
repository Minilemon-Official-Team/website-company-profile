import Link from "next/link";
import React from "react";
import { Placeholder } from "placeholder";
import { FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import PetualanganSiMinilemonTitle1 from "@/public/title-picture/petualangan-si-minilemon-1.png";
import PetualanganSiMinilemonTitle2 from "@/public/title-picture/petualangan-si-minilemon-2.png";
import MinilemonSaveTheEarthTitle1 from "@/public/title-picture/minilemon-save-the-earth-1.png";
import MinilemonSaveTheEarthTitle2 from "@/public/title-picture/minilemon-save-the-earth-2.png";
import MinilemonExplorerTitle1 from "@/public/title-picture/minilemon-explorer-1.png";
import MinilemonExplorerTitle2 from "@/public/title-picture/minilemon-explorer-2.png";
import MinilemonLiveParentingTitle1 from "@/public/title-picture/minilemon-live-parenting-1.png";
import MinilemonLiveParentingTitle2 from "@/public/title-picture/minilemon-live-parenting-2.png";
import MinilemonPanggungBonekaTitle1 from "@/public/title-picture/panggung-boneka-minilemon-1.png";
import MinilemonPanggungBonekaTitle2 from "@/public/title-picture/panggung-boneka-minilemon-2.png";
import ProductTitle from "@/public/title-picture/our-product-title1.png";
import BackgroundImage from "@/public/background/product.png";

const ProductPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section Desktop View */}
      <div className="relative inset-0 h-full bg-[#1b1b1b] bg-cover bg-center py-20">
        <Image
          src={BackgroundImage}
          alt="Background"
          quality={100}
          fill
          sizes="100vw"
          objectFit="cover"
          className="absolute inset-0 z-10"
        />
        <div className="container z-20 flex flex-col justify-center gap-8">
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
              <Placeholder
                height={495}
                width={350}
                background="#333"
                color="#fff"
              />
            </div>
            <div className="flex basis-8/12 flex-col gap-y-6 text-sm font-semibold leading-loose tracking-wider text-[#c0cbdf]/90">
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
                  href="/story"
                >
                  Read More <span className="ml-1 text-xs">❯</span>
                </Link>
              </p>
              <Link href={"#"} className="flex flex-row items-center gap-x-2">
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
            <Placeholder
              height={495}
              width={350}
              background="#333"
              color="#fff"
            />
          </div>
          <div className="flex basis-8/12 flex-col gap-y-6 text-sm font-semibold leading-loose tracking-wider text-[#1b1b1d]/70">
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
                href="/story"
              >
                Read More <span className="ml-1 text-xs">❯</span>
              </Link>
            </p>
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
          <div className="flex basis-8/12 flex-col gap-y-8 text-sm font-semibold leading-loose tracking-[.07em] text-[#1b1b1d]/80">
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
                href="/story"
              >
                Read More <span className="ml-1 text-xs">❯</span>
              </Link>
            </p>
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
            <Placeholder
              height={495}
              width={350}
              background="#333"
              color="#fff"
            />
          </div>
          <div className="flex basis-8/12 flex-col gap-y-8 text-sm font-semibold leading-loose tracking-[.07em] text-[#1b1b1d]/70">
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
                href="/story"
              >
                Read More <span className="ml-1 text-xs">❯</span>
              </Link>
            </p>
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
            <Placeholder
              height={495}
              width={350}
              background="#333"
              color="#fff"
            />
          </div>
          <div className="flex basis-8/12 flex-col gap-y-6 text-sm font-semibold leading-loose tracking-[.07em] text-[#1b1b1d]/70">
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
                href="/story"
              >
                Read More <span className="ml-1 text-xs">❯</span>
              </Link>
            </p>
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
