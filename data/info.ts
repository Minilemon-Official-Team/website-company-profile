import { StaticImageData } from "next/image";
import MessageTitle from "@/public/title/message.png";
import TreatmentTitle from "@/public/title/treatment.png";
import ConceptTitle from "@/public/title/concept.png";
import PsychographicTitle from "@/public/title/psychographic.png";

interface infoData {
  id: number;
  imageTitle: string | StaticImageData;
  imageAlt: string;
  description: string;
  textAlign: string;
  imageAlign: string;
  bgColor?: string;
  padding?: string;
  className?: string;
  textColor?: string;
}

export const infoData: infoData[] = [
  {
    id: 1,
    imageTitle: MessageTitle,
    imageAlt: "Message",
    description:
      "minimnya hiburan yang mengedepankan kualitas dan edukasi kepada anak-anak Indonesia, Minilemon berharap mampu menjadi idola baru,menanamkan nilai-nilai positif di banyak platform dan gadget yang merupakan kebutuhan gen z saat ini.",
    textAlign: "text-end",
    imageAlign: "justify-end",
    bgColor: "#d5ddf4",
    textColor: "text-[#2c2d2f]/90",
    padding: "p-6",
    className: "tracking-widest gap-y-6 ",
  },
  {
    id: 2,
    imageTitle: TreatmentTitle,
    imageAlt: "Treatment",
    description:
      "Sadar akan persoalan-persoalan besar dan mendasar, PT Minilemon Nusantara berinisitatif membuat produk-produk anak yang berupa tontonan dan permainan, dengan target usia 3-7 tahun.",
    textAlign: "text-center",
    imageAlign: "justify-center",
    bgColor: "#1b1b1b",
    textColor: "text-[#c2cbde]",
    padding: "p-6",
    className: "tracking-wider gap-y-6 ",
  },
  {
    id: 3,
    imageTitle: ConceptTitle,
    imageAlt: "Concept",
    description:
      "Minilemon adalah kisah 6 sahabat sepermainan yang berasal dari suku berbeda-beda yaitu Jawa, Sunda, Papua, Tionghoa, Batak dan Bali. meskipun berbeda Minilemon selalu mengedepankan sikap toleransi dan gotong royong, sehingga saling melengkapi satu dan lainnya dalam setiap kisah yang mereka lalui.",
    textAlign: "text-start",
    imageAlign: "mt-2",
    bgColor: "#d6f4df",
    textColor: "text-[#000]",
    padding: "0",
    className: "tracking-wider pb-6",
  },
  {
    id: 4,
    imageTitle: PsychographicTitle,
    imageAlt: "Psychographic",
    description:
      "Membangun pola pikir positif di dalam pertumbuhan anak yang suka bermain, imajinatif, hidup dalam dunia angan-angan, tidak suka larangan, mempunyai sifat ingin tahu dan bersemangat untuk coba-coba.",
    textAlign: "text-end",
    imageAlign: "justify-end",
    bgColor: "#f4d8d4",
    textColor: "text-[#000]",
    padding: "p-6",
    className: "tracking-wider gap-y-6 ",
  },
];
