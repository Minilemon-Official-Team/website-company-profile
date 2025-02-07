import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ImageProduct from "./image-product";
import { FaYoutube } from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface ProductProps {
  children: React.ReactNode;
  CoverProduct: string | StaticImageData;
  CoverAlt: string;
  TitleImage1: string | StaticImageData;
  TitleImageAlt: string;
  TitleImage2: string | StaticImageData;
  bgColor: string;
  textColor: string;
  className?: string;
}

export default function Product({
  children,
  CoverProduct,
  CoverAlt,
  TitleImage1,
  TitleImageAlt,
  TitleImage2,
  bgColor,
  textColor,
  className,
}: ProductProps) {
  return (
    <div className={`bg-[${bgColor}] py-14`}>
      <div className="container mb-2 flex flex-row gap-x-8">
        <div>
          <ImageProduct CoverProduct={CoverProduct} CoverAlt={CoverAlt} />
        </div>
        <div
          className={cn(
            `flex flex-col text-sm leading-loose ${textColor}`,
            className,
          )}
        >
          <div className="hidden flex-col lg:flex">
            <Image src={TitleImage1} alt={TitleImageAlt} />
            <Image src={TitleImage2} alt={TitleImageAlt} />
          </div>
          {children}
          <Link
            href="javascript:void(0)"
            className="flex flex-row items-center gap-x-2 self-start"
          >
            <span className="rounded-full bg-[#333333] p-[.4rem] shadow-xl">
              <FaYoutube className="text-white" />
            </span>
            Trailer
          </Link>
        </div>
      </div>
    </div>
  );
}
