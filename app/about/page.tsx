import React from "react";
import Image from "next/image";

import IdeaTitle from "@/public/title-picture/idea-1.png";
import MessageTitle from "@/public/title-picture/message-1.png";
import TreatmentTitle from "@/public/title-picture/treatment-1.png";
import ConceptTitle from "@/public/title-picture/concept-1.png";
import PsychographicTitle from "@/public/title-picture/psychographic-1.png";
import BackgroundImage from "@/public/background/about.png";
import DividerBlue from "@/components/ui/divider/divider-blue";

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      {/* Idea */}
      <div className="relative h-full justify-center overflow-hidden pb-14 pt-12">
        <Image
          src={BackgroundImage}
          alt="Background"
          quality={100}
          fill
          sizes="100vw"
          className="absolute inset-0 z-[-1]"
          objectFit="cover"
        />
        <div className="container flex flex-col justify-center gap-y-4">
          <div className="mt-2">
            <Image src={IdeaTitle} alt="Idea" />
          </div>
          <div className="flex flex-col gap-y-6 leading-loose tracking-widest text-[#c5cce2]">
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
        <DividerBlue className="absolute bottom-0 bg-transparent" />
      </div>

      {/* Message */}
      <div className="bg-[#d5ddf4] py-14">
        <div className="container flex flex-col justify-center gap-y-6 p-6 text-end">
          <div className="flex justify-end">
            <Image src={MessageTitle} alt="Message" />
          </div>
          <div className="flex flex-col gap-y-6 leading-loose tracking-widest">
            <p className="font-medium text-[#2c2d2f]/90">
              minimnya hiburan yang mengedepankan kualitas dan edukasi kepada
              anak-anak Indonesia, Minilemon berharap mampu menjadi idola baru,
              menanamkan nilai-nilai positif di banyak platform dan gadget yang
              merupakan kebutuhan gen z saat ini.
            </p>
          </div>
        </div>
      </div>

      {/* Treatment */}
      <div className="bg-[#1b1b1b] py-14">
        <div className="container flex flex-col justify-center gap-y-6 p-6 text-center">
          <div className="flex justify-center">
            <Image src={TreatmentTitle} alt="Treatment" />
          </div>
          <p className="flex flex-col gap-y-6 leading-loose tracking-wider text-[#c2cbde]">
            Sadar akan persoalan-persoalan besar dan mendasar, PT Minilemon
            Nusantara berinisitatif membuat produk-produk anak yang berupa
            tontonan dan permainan, dengan targe usia 3-7 tahun.
          </p>
        </div>
      </div>

      {/* Concept */}
      <div className="bg-[#d6f4df] py-14">
        <div className="container flex flex-col justify-center gap-y-6 text-start">
          <div className="mt-2">
            <Image src={ConceptTitle} alt="Concept" />
          </div>
          <p className="flex flex-col pb-6 leading-loose tracking-wider">
            Minilemon adalah kisah 6 sahabat sepermainan yang berasal dari suku
            berbeda-beda yaitu Jawa, Sunda, Papua, Tionghoa, Batak dan Bali.
            meskipun berbeda Minilemon selalu mengedepankan sikap toleransi dan
            gotong royong, sehingga saling melengkapi satu dan lainnya dalam
            setiap kisah yang mekea lalui.
          </p>
        </div>
      </div>

      {/* Psychographic */}
      <div className="bg-[#f4d8d4] py-14">
        <div className="container flex flex-col justify-center gap-y-6 p-6 text-end">
          <div className="flex justify-end">
            <Image src={PsychographicTitle} alt="Psychographic" />
          </div>
          <p className="flex flex-col gap-y-6 leading-loose tracking-wider">
            Membangun pola pikir positif di dalam pertumbuhan anak yang suka
            bermain, imajinatif, hidup dalam dunia angan-angan, tidak suka
            larangan, mempunyai sifat ingin tahu dan bersemangat untuk
            coba-coba.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
