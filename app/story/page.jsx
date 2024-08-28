import React from "react";
import { cn } from "../../lib/utils";
import { luckiest_guy } from "../fonts";

const StoryPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#d2def4] min-h-screen">
      <div className="flex flex-col w-full container gap-6 my-20">
        <h2
          className={cn(
            luckiest_guy.className,
            "text-5xl text-start bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center",
            "drop-shadow-[0px_5px_0px_rgba(114,4,165,1)]"
          )}>
          Story
        </h2>
        <div className="gap-8 flex flex-col">
          <p>
            Di dalam gua ditengah kebun lemon yang indah, hidup seorang kakek <b>(Djoyo)</b> yang setiap hari membuat topeng berbentuk wajah manusia.
            Kecintaannya dengan Nusantara membuat gua yang ia tinggali dihiasi ribuan topeng wajah dari kesukuan yang berbeda-beda di Nusantara.
          </p>
          <p>
            Suatu malam, Kakek yang baik hati ini bermimpi. di dalam mimpinya ia melihat 6 topengnya hidup dan menjelma menjadi karakter anak-anak
            dengan tubuh buah lemon yang ia sebut <b>MINILEMON</b>.
          </p>
          <p>
            Kakek senang dan tertawa melihat anak-anak Minilemon. Walau wajahnya berasal dari suku yang berbeda, Minilemon bermain Bersama dengan
            penuh semangat, saling menghormati dan bergotong royong.
          </p>
          <p>
            Kerinduan sang Kakek menyebarkan nilai-nilai kebaikan dan keragaman budaya terpancar dari pribadi{" "}
            <b>Wayan (Bali), Togar (Batak), Ucup (Sunda), Slamet (Jawa), Memey (Tionghoa) dan Minggus (Papua),</b> mereka adalah 6 sahabat sepermainan
            yang siap mejadi idola baru untuk anak-anak Indonesia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
