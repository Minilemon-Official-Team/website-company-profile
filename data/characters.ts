import { StaticImageData } from "next/image";

import Togar from "@/public/characters/togar.png";
import Slamet from "@/public/characters/slamet.png";
import Wayan from "@/public/characters/wayan.png";
import Memey from "@/public/characters/memey.png";
import Ucup from "@/public/characters/ucup.png";
import Minggus from "@/public/characters/minggus.png";
import Amink from "@/public/characters/amink.png";
import Bibie from "@/public/characters/bibie.png";
import Tigor from "@/public/characters/tigor.png";
import Rudi from "@/public/characters/RU-D1.png";

import TitleAmink from "@/public/title/amink-title.png";
import TitleBibie from "@/public/title/bibie-title.png";
import TitleMemey from "@/public/title/memey-title.png";
import TitleMinggus from "@/public/title/minggus-title.png";
import TitleRudi from "@/public/title/RU-D1-title.png";
import TitleSlamet from "@/public/title/slamet-title.png";
import TitleTigor from "@/public/title/tigor-title.png";
import TitleTogar from "@/public/title/togar-title.png";
import TitleUcup from "@/public/title/ucup-title.png";
import TitleWayan from "@/public/title/wayan-title.png";

interface CharacterData {
  id: number;
  namePicture: StaticImageData;
  fullName: string;
  description: string;
  image: StaticImageData;
  strong: number;
  logic: number;
  creative: number;
  luck: number;
}

export const charactersData: CharacterData[] = [
  {
    id: 1,
    namePicture: TitleTogar,
    fullName: "Togar",
    description:
      "TOGAR besar di suku Batak. Berwatak keras dan tidak mau kalah, membuat Togar sering berdebat dengan teman-temannya. Tapi Togar memiliki sifat yang berani, pantang menyerah, dan memiliki cita-cita yang tinggi.",
    image: Togar,
    strong: 80,
    logic: 40,
    creative: 20,
    luck: 80,
  },
  {
    id: 2,
    namePicture: TitleSlamet,
    fullName: "Slamet",
    description:
      "SLAMET dibesarkan di lingkungan pesantren Jawa Tengah. Berperilaku santun, kaku dan penurut. setiap pendapatnya memiliki dalil yang ia dapatkan dari Gus nya di pesantren.",
    image: Slamet,
    strong: 40,
    logic: 80,
    creative: 20,
    luck: 80,
  },
  {
    id: 3,
    namePicture: TitleWayan,
    fullName: "Wayan",
    description:
      "WAYAN besar di tanah Bali, ia mempunyai jiwa seni yang sering kali mengkedepankan imajinasi dari pada akalnya. Walau selebor, banyak aktifitas Minilemon yang berasal dari gagasan Wayan.",
    image: Wayan,
    strong: 20,
    logic: 40,
    creative: 80,
    luck: 80,
  },
  {
    id: 4,
    namePicture: TitleMemey,
    fullName: "Memey",
    description:
      "MEMEY besar di lingkungan Tionghoa. Rajin, Disiplin, dan demokratis. Pribadinya yang cerewet manjadikan Memey menjadi tokoh penting untuk memastikan setiap misi Minilemon terselesaikan.",
    image: Memey,
    strong: 40,
    logic: 20,
    creative: 40,
    luck: 80,
  },
  {
    id: 5,
    namePicture: TitleUcup,
    fullName: "Ucup",
    description:
      "UCUP besar di suku Sunda. selain ramah dan suka bercanda, Ucup sangat menyukai sains dan teknologi. Setiap melihat sesuatu Ucup selalu mencari informasi lebih dalam di internet.",
    image: Ucup,
    strong: 40,
    logic: 80,
    creative: 20,
    luck: 80,
  },
  {
    id: 6,
    namePicture: TitleMinggus,
    fullName: "Minggus",
    description:
      "MINGGUS besar di tanah Papua. Berhati lembut, suka bernyanyi dan menari, Minggus mempunyai postur yang besar, menjadikan Minggus sebagai pelindung teman-temannya terutama Memey.",
    image: Minggus,
    strong: 80,
    logic: 40,
    creative: 20,
    luck: 80,
  },
  {
    id: 7,
    namePicture: TitleAmink,
    fullName: "Amink",
    description:
      "Aming adalah sepupu memey yang datang dari ibu kota, sebagai anak muda yg gemar dengan hal-hal kekinian, Aming sering kali merasa diri nya lebih up to date, modern dan terkesan pamer dimata teman-temannya. walaupun cuek, ia merupakan sosok pekerja keras dan senang berbagi hal baru, agar teman-temannya bisa ikut merasakan kesuksesan dan indahnya hidup dalam kemewahan",
    image: Amink,
    strong: 40,
    logic: 20,
    creative: 40,
    luck: 80,
  },
  {
    id: 8,
    namePicture: TitleBibie,
    fullName: "Bibie",
    description:
      "BIBIE Pemuda genius dari tanah Betawi. Seorang ahli teknologi dan otak dari penciptaan Portal Bibie, Bibie sangat mahir dalam dunia Sains dan teknologi, karna itu membuat Biebie sangat tergantung dengan teknologi dan gadget-gadgetnya.",
    image: Bibie,
    strong: 40,
    logic: 80,
    creative: 20,
    luck: 80,
  },
  {
    id: 9,
    namePicture: TitleTigor,
    fullName: "Tigor",
    description:
      "TIGOR adalah paman Togar yang maniak coklat. Dalam perjalanan Minilemon ia ditugaskan untuk menjaga anak-anak Minilemon, tetapi sikapnya yang pemalas, kolot, suka pamer dan mau enak sendiri, Sering kali justru merepotkan anak-anak Minilemon.",
    image: Tigor,
    strong: 40,
    logic: 20,
    creative: 40,
    luck: 80,
  },
  {
    id: 10,
    namePicture: TitleRudi,
    fullName: "RU-DI",
    description:
      "RU-DI adalah robot canggih buatan Biebie yang lebih dari sekadar asisten lab. Dengan Al luar biasa, RU-DI mampu mencari dan mengolah informasi secara presisi, menjadikannya partner tak tergantikan. Dilengkapi peralatan mutakhir, ia membantu tim Minilemon dalam petualangan, menjadi pelindung dan penunjuk jalan. Meski logis dan tampak kaku, RU-DI menunjukkan loyalitas dan emosi yang menjadikannya teman yang dapat diandalkan di saat-saat genting.",
    image: Rudi,
    strong: 40,
    logic: 80,
    creative: 20,
    luck: 80,
  },
];
