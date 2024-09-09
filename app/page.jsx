import { cn } from "../lib/utils";
import Image from "next/image";
import { luckiest_guy } from "./fonts";
import { Button } from "../components/ui/button";
import Contact from "../components/contact";
import { Placeholder } from "placeholder";
import DividerBlue from "../components/ui/divider-blue";
import Minggus from "../public/Minggus.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Section 1 */}
      <div className="w-full bg-gradient-to-b from-[#0a040e] to-[#3a1c52] text-[#d0dff4]">
        <div className="container mt-20 flex flex-col px-10 md:px-0">
          <p className="my-2 text-xl font-bold uppercase tracking-wide">
            welcome to
          </p>
          <h1
            className={cn(
              "items-center bg-gradient-to-b from-[#fdfe28] to-[#ff8a3b] bg-clip-text text-7xl capitalize tracking-wider text-transparent",
              luckiest_guy.className,
            )}
          >
            m<span className="text-6xl">inilemon</span>
          </h1>
          <p className="leading-8 tracking-wide">
            Berawal dari cinta dan bangga akan budaya topeng yang merupakan
            wajah suku bangsa Indonesia,
          </p>
          <p>
            <span className="text-[#ffe200]">
              Reno Halsamer Founder (dTopeng Kingdom Foundation)
            </span>{" "}
            menciptakan tokoh animasi fiksi
          </p>
          <p>
            dari perpaduan topeng dan buah lemon yang banyak manfaat bagi
            kesehatan.
          </p>
          <div className="flex w-full items-center justify-center">
            <Button.Primary className="mb-24 mt-8 w-fit scale-125 font-bold uppercase shadow-md">
              See More
            </Button.Primary>
          </div>
        </div>
      </div>

      <DividerBlue className="bg-[#391b51]" />

      {/* Story */}
      <div className="relative w-full bg-[#D3DEF4]">
        {/* <Story /> */}
        <div className="container my-10 flex flex-col gap-y-2">
          <div className="flex flex-row gap-12">
            <div
              className={cn(
                luckiest_guy.className,
                "title basis-1/2 drop-shadow-titlePurple",
              )}
            >
              S<span className="text-6xl">tory</span>
            </div>
            <p
              className={cn(
                luckiest_guy.className,
                "title basis-1/2 text-center drop-shadow-titlePurple",
              )}
            >
              C<span className="text-6xl">haracters</span>
            </p>
          </div>
          <div className="flex flex-row gap-12">
            <div
              className={cn("flex basis-1/2 flex-col justify-between gap-y-12")}
            >
              <div className="flex h-full flex-col justify-between gap-y-12 font-medium leading-relaxed tracking-wider">
                <p className="z-10">
                  Di dalam gua ditengah kebun lemon yang indah, hidup seorang
                  kakek (Djoyo) yang setiap hari membuat topeng berbentuk wajah
                  manusia. Kecintaannya dengan Nusantara membuat gua yang ia
                  tinggali dihiasi ribuan topeng wajah dari kesukuan yang
                  berbeda-beda di Nusantara.
                </p>
                <p className="z-10">
                  Suatu malam, Kakek yang baik hati ini bermimpi. di dalam
                  mimpinya ia melihat 6 topengnya hidup dan menjelma menjadi
                  karakter anak-anak dengan tubuh buah lemon yang ia sebut
                  MINILEMON.
                </p>
              </div>
            </div>
            <div className={cn("flex basis-1/2 justify-center")}>
              <div className="relative h-[300px] w-[240px]">
                <Image
                  src={Minggus}
                  alt="Minggus"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mb-2 mt-6 flex flex-row">
            <div className="flex basis-1/2">
              <Button.Secondary className="w-fit scale-125 self-center font-bold uppercase shadow-md">
                See More
              </Button.Secondary>
            </div>
            <div className="flex basis-1/2 justify-center">
              <Button.Secondary className="w-fit scale-125 self-center font-bold uppercase shadow-md">
                See More
              </Button.Secondary>
            </div>
          </div>
        </div>
      </div>

      {/* Product */}
      <div className="flex w-full flex-col bg-[#1b1b1b]">
        <div className="container my-12 flex flex-col items-center justify-center gap-8 px-10 md:px-0">
          <h2
            className={cn(
              luckiest_guy.className,
              "title drop-shadow-titleBlack",
            )}
          >
            O<span className="text-6xl">ur product</span>
          </h2>
          <div className="flex flex-row gap-4">
            <div className="hidden md:flex">
              <Placeholder height={420} width={300} color="#333" />
            </div>
            <div className="flex">
              <Placeholder height={420} width={300} color="#333" />
            </div>
            <div className="hidden md:flex">
              <Placeholder height={420} width={300} color="#333" />
            </div>
          </div>
          <Button.Secondary className="mt-2 w-fit scale-125 self-center font-bold uppercase shadow-md">
            See More
          </Button.Secondary>
        </div>
      </div>

      {/* Company */}
      <div className="flex w-full flex-col bg-[#f4e4d4]">
        <div className="container my-12 flex flex-col gap-4 px-10 md:px-0">
          <h2
            className={cn(luckiest_guy.className, "title drop-shadow-titleRed")}
          >
            C<span className="text-6xl">ompany</span>
          </h2>
          <p className="leading-relaxed tracking-widest">
            PT. Minilemon Nusantara adalah perusahaan yang berdomisili di
            Surabaya dan Jakarta, Indonesia. Yang berorientasi pada Pendidikan
            Karakter Anak dan nilai-nilai kebaikan melalui berbagai Program
            Pendidikan berbasis seni, hiburan dan teknologi.
          </p>
          <Button.Secondary className="mt-6 w-fit scale-125 font-bold uppercase shadow-md">
            See More
          </Button.Secondary>
        </div>
      </div>

      {/* Contact Us */}
      <div className="flex w-full flex-row bg-[#1b1b1b]">
        <div className="container my-20 flex flex-col gap-12 px-10 md:px-0 lg:flex-row">
          <div className="flex basis-1/2 flex-col items-center justify-center">
            <h2
              className={cn(
                luckiest_guy.className,
                "items-center bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-5xl text-transparent",
                "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]",
              )}
            >
              Contact Us
            </h2>
            <p className="text-2xl text-[#d2def4]">How can we help you?</p>
          </div>
          <div className="flex basis-1/2 flex-col">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
