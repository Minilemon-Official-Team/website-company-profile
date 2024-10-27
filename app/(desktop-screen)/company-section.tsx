"use client";

import { Button as ButtonLegacy } from "@/components/ui/button-sec";
import CompanyTitle from "@/public/title/company.png";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from "next/image";
import Link from "next/link";

function CompanySection() {
  return (
    <div className="hidden w-full flex-col bg-[#f4e4d4] lg:flex">
      <div className="container my-14 flex flex-col gap-4 px-10 md:px-0">
        <div>
          <Image src={CompanyTitle} alt="Company" />
        </div>
        <p className="font-semibold leading-loose tracking-widest text-[#2c2a2a]/70">
          PT. Minilemon Nusantara adalah perusahaan yang berdomisili di Surabaya
          dan Jakarta, Indonesia. Yang berorientasi pada Pendidikan Karakter
          Anak dan nilai-nilai kebaikan melalui berbagai Program Pendidikan
          berbasis seni, hiburan dan teknologi.
        </p>
        <Link href="/company">
          <ButtonLegacy.Primary className="mt-6">See More</ButtonLegacy.Primary>
        </Link>
      </div>
    </div>
  );
}

export default CompanySection;
