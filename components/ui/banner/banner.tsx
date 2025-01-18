import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface BannerProps {
  children?: React.ReactNode;
  productTitle: string | StaticImageData;
  productTitleAlt: string;
  className?: string;
}

export default function Banner({
  children,
  productTitle,
  productTitleAlt,
  className,
}: BannerProps) {
  return (
    <div className={cn("container z-20 flex flex-col", className)}>
      <div className="z-20">
        <Image src={productTitle} alt={productTitleAlt} />
      </div>
      {children}
    </div>
  );
}
