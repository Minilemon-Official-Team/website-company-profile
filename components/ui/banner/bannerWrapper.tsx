import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface BannerWrapperProps {
  children?: React.ReactNode;
  backgroundImage: string | StaticImageData;
  backgroundAlt: string;
  bgColor?: string;
  className?: string;
}

export default function BannerWrapper({
  children,
  backgroundImage,
  backgroundAlt,
  bgColor,
  className,
}: BannerWrapperProps) {
  return (
    <div
      className={cn(
        "relative flex items-center bg-cover bg-center",
        { [`bg-[${bgColor}]`]: bgColor },
        className,
      )}
    >
      <Image
        src={backgroundImage}
        alt={backgroundAlt}
        quality={100}
        fill
        sizes="100vw"
        className="absolute inset-0 z-10"
      />
      {children}
    </div>
  );
}
