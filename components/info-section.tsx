import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface InfoSectionProps {
  id: number;
  imageTitle: string | StaticImageData;
  imageAlt: string;
  description: string;
  textAlign: string;
  imageAlign: string;
  bgColor?: string;
  tracking?: string;
  padding?: string;
  className?: string;
}

export default function InfoSection({
  imageTitle,
  imageAlt,
  description,
  textAlign,
  imageAlign,
  bgColor,
  padding,
  className,
}: InfoSectionProps) {
  return (
    <div className={`bg-[${bgColor}] py-14`}>
      <div
        className={`container flex flex-col justify-center gap-y-6 ${padding} ${textAlign}`}
      >
        <div className={`flex ${imageAlign}`}>
          <Image src={imageTitle} alt={imageAlt} />
        </div>
        <div>
          <p
            className={cn(
              `flex flex-col font-medium leading-loose`,
              className,
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
