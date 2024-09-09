import React from "react";
import { cn } from "../../lib/utils";
import { luckiest_guy } from "../fonts";

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      {/* Idea */}
      <div className="bg-[#d3def4] py-20">
        <div className="container flex flex-col justify-center gap-y-8 p-6">
          <h2
            className={cn(
              luckiest_guy.className,
              "items-center text-wrap bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-5xl text-transparent md:text-6xl lg:text-7xl",
              "drop-shadow-[0px_4px_2px_rgba(102,1,139,1)]",
            )}
          >
            Idea
          </h2>
          <div className="flex flex-col gap-y-6 leading-loose tracking-widest">
            <p>
              Berawal dari cinta dan bangga akan warisan budaya khusunya topeng
              yang merupakan penutup wajah dari setiap Suku di Indonesia.
            </p>
            <p>
              <b>Reno Halsamer (Founder dTopeng Kingdom Foundation)</b> melalui
              perjalanan panjanga telah menciptakan tokoh animasi (fiksi) dengan
              memadukan topeng sebagai wajah indonesia dan tubuh lemon yang
              merupakan buah dengan banyak manfaat bagi kesehatan
            </p>
            <p>
              Bernama <b>Minilemon</b> dengan harapan dapat memberi manfaat
              positif bai anak-anak indonesia dalam belaja Sejarah, Budaya,
              hormat kepada orangtua, gotong royong, menghargai perbedaan, cinta
              Bangsa dan Negara, serta ikut serta dalam penyelamatan Lingkungan
              hidup di dunia.
            </p>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="bg-[#d3eff3] py-20">
        <div className="container flex flex-col justify-center gap-y-6 p-6 text-end">
          <h2
            className={cn(
              luckiest_guy.className,
              "items-center text-wrap bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-5xl text-transparent md:text-6xl lg:text-7xl",
              "drop-shadow-[0px_4px_2px_rgba(13,58,116,1)]",
            )}
          >
            Message
          </h2>
          <div className="flex flex-col gap-y-6 leading-loose tracking-widest">
            <p>
              minimnya hiburan yang mengedepankan kualitas dan edukasi kepada
              anak-anak Indonesia, Minilemon berharap mampu menjadi idola baru,
              menanamkan nilai-nilai positif di banyak platform dan gadget yang
              merupakan kebutuhan gen z saat ini.
            </p>
          </div>
        </div>
      </div>

      {/* Treatment */}
      <div className="bg-[#d3f4df] py-20">
        <div className="container flex flex-col justify-center gap-y-6 p-6 text-center">
          <h2
            className={cn(
              luckiest_guy.className,
              "items-center text-wrap bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-5xl text-transparent md:text-6xl lg:text-7xl",
              "drop-shadow-[0px_4px_2px_rgba(8,70,106,1)]",
            )}
          >
            Treatment
          </h2>
          <p className="flex flex-col gap-y-6 leading-loose tracking-widest">
            Sadar akan persoalan-persoalan besar dan mendasar, PT Minilemon
            Nusantara berinisitatif membuat produk-produk anak yang berupa
            tontonan dan permainan, dengan targe usia 3-7 tahun.
          </p>
        </div>
      </div>

      {/* Concept */}
      <div className="bg-[#f0f4d3] py-20">
        <div className="container flex flex-col justify-center gap-y-6 p-6 text-start">
          <h2
            className={cn(
              luckiest_guy.className,
              "items-center text-wrap bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-5xl text-transparent md:text-6xl lg:text-7xl",
              "drop-shadow-[0px_4px_2px_rgba(111,58,26,1)]",
            )}
          >
            Concept
          </h2>
          <p className="flex flex-col gap-y-6 leading-loose tracking-widest">
            Minilemon adalah kisah 6 sahabat sepermainan yang berasal dari suku
            berbeda-beda yaitu Jawa, Sunda, Papua, Tionghoa, Batak dan Bali.
            meskipun berbeda Minilemon selalu mengedepankan sikap toleransi dan
            gotong royong, sehingga saling melengkapi satu dan lainnya dalam
            setiap kisah yang mekea lalui.
          </p>
        </div>
      </div>

      {/* Psychographic */}
      <div className="bg-[#f4d8d4] py-20">
        <div className="container flex flex-col justify-center gap-y-6 p-6 text-end">
          <h2
            className={cn(
              luckiest_guy.className,
              "items-center text-wrap bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-5xl text-transparent md:text-6xl lg:text-7xl",
              "drop-shadow-[0px_4px_2px_rgba(129,40,86,1)]",
            )}
          >
            Psychographic
          </h2>
          <p className="flex flex-col gap-y-6 leading-loose tracking-wider">
            Membangun pola pikir positif di dalam pertumbuhan anak yang suka
            bermain, imajinatif, hidup dalam dunia angan-anagan, tidak suka
            larangan, mempunyai sifat ingin tahu dan bersemangat untuk
            coba-coba.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
