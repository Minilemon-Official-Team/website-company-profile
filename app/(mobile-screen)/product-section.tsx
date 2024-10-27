"use client";

import BackgroundProduct from "@/public/background/product-mobile.png";
import CoverPetualanganMinilemon from "@/public/product/petualangan-minilemon.png";
import OurProductTitle from "@/public/title/our-product-1.png";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ProductSection() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="relative flex flex-col items-center justify-center bg-cover bg-center py-4">
        <Image
          src={BackgroundProduct}
          alt="Background Product"
          fill
          sizes="100vw"
          className="absolute inset-0"
          objectFit="cover"
        />
        <div className="z-10 flex max-w-screen-tablet flex-col justify-center gap-y-4 px-6">
          <div id="product" className="z-10">
            <Image
              src={OurProductTitle}
              alt="Our Product"
              className="w-[200px]"
            />
          </div>
          <div className="z-10 flex flex-col leading-relaxed tracking-widest text-[#d3dcf3]">
            <p>
              Di era modernisasi dan selera yang semakin beragam, Minilemon
              memproduksi banyak varian produk digital maupun konvensional, agar
              nilai-nilai edukasi dan karakter positif, dapat menjangkau ke
              banyak penggemar khususnya anak-anak usia 3 sampai 7 tahun.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-4 bg-[#1b1b1b] p-6">
        <div className="flex items-center justify-center">
          <Image
            src={CoverPetualanganMinilemon}
            alt="Petualangan Minilemon"
            className="h-[492px] w-[350px]"
          />
        </div>
        <div className="flex max-w-[350px] flex-col gap-y-6 text-xs leading-loose tracking-wider text-[#c0cbdf]/90">
          <p>
            Petualangan Minilemon dimulai dari keceroohan Ucup dan Togar yang
            tanpa sengaja memicu kejar-kerjaran menegangkan dengan sekelompok
            angsa marah. Dalam kekacauan itu, Ucup terpisah dan menghilang
            setelah menemukan mesin portal misterius diruang rahasia Kak Bibie.
          </p>
          <p>
            Dengan kejadian itu, Anaak-anak Minilemon mulai bersatu dan siap
            bertualang mencari Ucup dengan bantuan Kak Bibie dan Paman Tigor.{" "}
            <Link
              className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
              href="javascript:void(0)"
            >
              <span className={isExpanded == true ? "hidden" : "flex"}>
                Read More{" "}
                <span className="ml-1 flex items-center text-xs">❯</span>
              </span>
            </Link>
          </p>
        </div>
        <div>Trailer</div>
      </div>
    </div>
  );
}

export default ProductSection;
