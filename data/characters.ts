import { StaticImageData } from "next/image";

import Amink from "@/public/characters/amink.png";
import Bibie from "@/public/characters/bibie.png";
import Memey from "@/public/characters/memey.png";
import Minggus from "@/public/characters/minggus.png";
import Rudi from "@/public/characters/RU-D1.png";
import Slamet from "@/public/characters/slamet.png";
import Tigor from "@/public/characters/tigor.png";
import Togar from "@/public/characters/togar.png";
import Ucup from "@/public/characters/ucup.png";
import Wayan from "@/public/characters/wayan.png";

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
  mobileDescription?: string;
  image: StaticImageData;
  strong: number;
  logic: number;
  creative: number;
  luck: number;
  bgcolor: string;
}

export const charactersData: CharacterData[] = [
  {
    id: 1,
    namePicture: TitleTogar,
    fullName: "Togar",
    description:
      "TOGAR digambarkan sebagai karakter Batak yang berwatak keras, tidak mau kalah, dan sering berdebat dengan teman-temannya. Namun, Togar memiliki sifat berani, pantang menyerah, serta bercita-cita tinggi.",
    image: Togar,
    bgcolor: "#f3c7be",
    strong: 80,
    logic: 40,
    creative: 20,
    luck: 70,
  },
  {
    id: 2,
    namePicture: TitleSlamet,
    fullName: "Slamet",
    description:
      "SLAMET digambarkan sebagai karakter Muslim Jawa yang berperilaku santun, polos, dan penurut. Setiap pendapatnya selalu didasarkan pada dalil dari kitab suci dan buku-buku yang rutin ia pelajari.",
    image: Slamet,
    bgcolor: "#fbd0ae",
    strong: 40,
    logic: 50,
    creative: 40,
    luck: 95,
  },
  {
    id: 3,
    namePicture: TitleWayan,
    fullName: "Wayan",
    description:
      "WAYAN digambarkan sebagai karakter Bali. Wayan memiliki jiwa seni yang sering kali mengedepankan imajinasi daripada logika. Meskipun terkesan selebor, banyak aktivitas Minilemon yang berasal dari gagasan Wayan.",
    image: Wayan,
    bgcolor: "#c3cad4",
    strong: 55,
    logic: 30,
    creative: 90,
    luck: 40,
  },
  {
    id: 4,
    namePicture: TitleMemey,
    fullName: "Memey",
    description:
      "MEMEY digambarkan sebagai karakter Tionghoa yang rajin, disiplin, dan demokratis. Pribadinya yang cerewet menjadikan Memey tokoh penting dalam memastikan setiap misi Minilemon terselesaikan.",
    image: Memey,
    bgcolor: "#edcce7",
    strong: 60,
    logic: 95,
    creative: 30,
    luck: 40,
  },
  {
    id: 5,
    namePicture: TitleUcup,
    fullName: "Ucup",
    description:
      "UCUP digambarkan sebagai karakter Sunda yang ramah dan suka bercanda. Ucup sangat menyukai gadget dan internet, sehingga ide serta pendapatnya sering kali bersumber dari suara terbanyak netizen",
    image: Ucup,
    bgcolor: "#ccd4df",
    strong: 40,
    logic: 80,
    creative: 70,
    luck: 30,
  },
  {
    id: 6,
    namePicture: TitleMinggus,
    fullName: "Minggus",
    description:
      "MINGGUS digambarkan sebagai karakter Papua yang bertubuh besar dan kuat. Minggus selalu dijadikan sosok pelindung bagi teman-temannya. Walau terlihat gagah, Minggus berhati lembut dan gemar bernyanyi.",
    image: Minggus,
    bgcolor: "#dfc2e0",
    strong: 95,
    logic: 40,
    creative: 50,
    luck: 40,
  },
  {
    id: 7,
    namePicture: TitleAmink,
    fullName: "Amink",
    description:
      "AMING adalah sepupu Memey yang selalu merasa paling up-to-date dan terkesan pamer di mata teman-temannya. Meskipun terkesan cuek, ia merupakan sosok pekerja keras dan senang berbagi hal-hal baru.",
    mobileDescription:
      "AMING adalah sepupu Memey yang selalu merasa paling up-to-date dan terkesan pamer di mata teman-temannya. Meskipun terkesan cuek, ia merupakan sosok pekerja keras dan senang berbagi hal-hal baru.",
    image: Amink,
    bgcolor: "#ffcab2",
    strong: 10,
    logic: 80,
    creative: 80,
    luck: 30,
  },
  {
    id: 8,
    namePicture: TitleBibie,
    fullName: "Bibie",
    description:
      "BIBIE digambarkan sebagai karakter Betawi yang jenius, high-tech, dan merupakan otak di balik penciptaan portal waktu. Kecintaannya pada sains dan teknologi membuat Bibie mengidap insomnia dan sering tertidur sewaktu-waktu.",
    image: Bibie,
    bgcolor: "#cfe9ce",
    strong: 50,
    logic: 95,
    creative: 90,
    luck: 45,
  },
  {
    id: 9,
    namePicture: TitleTigor,
    fullName: "Tigor",
    description:
      "TIGOR adalah paman Togar yang maniak cokelat. Sebagai penjaga anak-anak Minilemon, Tigor sering kali gagal menjalankan tugasnya dan justru merepotkan karena sikapnya yang kolot, suka pamer, dan maunya enak sendiri.",
    image: Tigor,
    bgcolor: "#f3c7be",
    strong: 95,
    logic: 30,
    creative: 30,
    luck: 25,
  },
  {
    id: 10,
    namePicture: TitleRudi,
    fullName: "RU-DI",
    description:
      "RU-D1 adalah robot ciptaan Bibie yang mempunyai banyak ke canggihan luar biasa. RU-D1 mampu mencari dan mengolah informasi secara presisi yang siap menjadi assisten dalam misi-misi penting di petualangan Minilemon.",
    mobileDescription:
      "RU-D1 adalah robot ciptaan Bibie yang mempunyai banyak ke canggihan luar biasa. RU-D1 mampu mencari dan mengolah informasi secara presisi yang siap menjadi assisten dalam misi-misi penting di petualangan Minilemon.",
    image: Rudi,
    bgcolor: "#c1e5c1",
    strong: 40,
    logic: 95,
    creative: 40,
    luck: 25,
  },
];
