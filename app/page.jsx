import { cn } from "../lib/utils";
import Image from "next/image";
import { luckiest_guy } from "./fonts";
import { Button } from "../components/ui/button";
import Minggus from "../public/Minggus.png";
import Contact from "../components/contact";
import { Placeholder } from "placeholder";
import DividerBlue from "../components/ui/divider-blue";

export default function Home() {
  return (
    <div className=" flex items-center flex-col justify-center ">
      {/* Section 1 */}
      <div className="bg-gradient-to-b from-[#0a040e] to-[#3a1c52] text-[#d0dff4] w-full">
        <div className="container px-10 md:px-0 flex flex-col mt-20">
          <p className="uppercase font-bold text-xl tracking-wide">welcome to</p>
          <h1
            className={cn(
              "capitalize text-6xl bg-gradient-to-b from-[#fdfe28] to-[#ff8a3b] bg-clip-text text-transparent items-center ",
              luckiest_guy.className
            )}>
            minilemon
          </h1>
          <p className="tracking-wide leading-8 ">Berawal dari cinta dan bangga akan budaya topeng yang merupakan wajah suku bangsa Indonesia,</p>
          <p>
            <span className="text-[#ffe200]">Reno Halsamer Founder (dTopeng Kingdom Foundation)</span>
            menciptakan tokoh animasi fiksi
          </p>
          <p>dari perpaduan topeng dan buah lemon yang banyak manfaat bagi kesehatan.</p>
          <Button.Primary className="uppercase w-fit font-bold shadow-md mt-8 mb-24">See More</Button.Primary>
        </div>
      </div>

      <DividerBlue className="bg-[#391b51]" />

      {/* Story */}
      <div className="bg-[#D3DEF4] w-full relative">
        <div className="my-20 container flex lg:flex-row flex-col gap-20 px-10 md:px-0 z-10">
          <div className="flex flex-col gap-y-12 basis-1/2 z-10">
            <h2
              className={cn(
                luckiest_guy.className,
                "text-5xl bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center",
                "drop-shadow-[0px_5px_0px_rgba(114,4,165,1)]"
              )}>
              Story
            </h2>
            <p className="leading-relaxed z-10">
              Di dalam gua ditengah kebun lemon yang indah, hidup seorang kakek (Djoyo) yang setiap hari membuat topeng berbentuk wajah manusia.
              Kecintaannya dengan Nusantara membuat gua yang ia tinggali dihiasi ribuan topeng wajah dari kesukuan yang berbeda-beda di Nusantara.
            </p>
            <p className="leading-relaxed z-10">
              Suatu malam, Kakek yang baik hati ini bermimpi. di dalam mimpinya ia melihat 6 topengnya hidup dan menjelma menjadi karakter anak-anak
              dengan tubuh buah lemon yang ia sebut MINILEMON.
            </p>
            <Button.Secondary className="uppercase w-fit font-bold shadow-md">See More</Button.Secondary>
          </div>
          <div className="flex flex-col basis-1/2">
            <h2
              className={cn(
                luckiest_guy.className,
                "text-5xl text-center bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center",
                "drop-shadow-[0px_5px_0px_rgba(114,4,165,1)]"
              )}>
              Characters
            </h2>
            <div className="z-10 flex justify-center items-center my-4">
              <Placeholder height={400} width={350} color="#333" />
            </div>
            <Button.Secondary className="uppercase w-fit font-bold shadow-md self-center">See More</Button.Secondary>
          </div>
        </div>
      </div>

      {/* Product */}
      <div className="flex flex-col w-full bg-[#1b1b1b]">
        <div className="flex flex-col items-center justify-center my-20 gap-10 px-10 md:px-0 container">
          <h2
            className={cn(
              luckiest_guy.className,
              "text-5xl bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center "
            )}>
            Our Product
          </h2>
          <div className="flex flex-row gap-4">
            <div className="hidden md:flex">
              <Placeholder height={450} width={300} color="#333" />
            </div>
            <div className="flex">
              <Placeholder height={450} width={300} color="#333" />
            </div>
            <div className="hidden md:flex">
              <Placeholder height={450} width={300} color="#333" />
            </div>
          </div>
          <Button.Secondary className="uppercase w-fit font-bold shadow-md self-center">See More</Button.Secondary>
        </div>
      </div>

      {/* Company */}
      <div className="w-full flex flex-col bg-[#f4e4d4]">
        <div className="flex flex-col gap-6 container my-20 px-10 md:px-0">
          <h2
            className={cn(
              luckiest_guy.className,
              "text-5xl bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center ",
              "drop-shadow-[0px_5px_0px_rgba(143,27,2,1)]"
            )}>
            Company
          </h2>
          <p className="tracking-wide leading-relaxed">
            PT. Minilemon Nusantara adalah perusahaan yang berdomisili di Surabaya dan Jakarta, Indonesia. Yang berorientasi pada Pendidikan Karakter
            Anak dan nilai-nilai kebaikan melalui berbagai Program Pendidikan berbasis seni, hiburan dan teknologi.
          </p>
          <Button.Secondary className="uppercase w-fit font-bold shadow-md ">See More</Button.Secondary>
        </div>
      </div>

      {/* Contact Us */}
      <div className="w-full bg-[#1b1b1b] flex flex-row">
        <div className="flex lg:flex-row flex-col gap-12 container my-20 px-10 md:px-0">
          <div className="flex justify-center items-center flex-col basis-1/2">
            <h2
              className={cn(
                luckiest_guy.className,
                "text-5xl bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center ",
                "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
              )}>
              Contact Us
            </h2>
            <p className="text-2xl text-[#d2def4]">How can we help you?</p>
          </div>
          <div className="flex flex-col basis-1/2">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
