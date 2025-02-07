import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

const color = {
  "text-[#2c2d2f]/90": "text-[#2c2d2f]/90",
  "text-[#c2cbde]": "text-[#c2cbde]",
  "text-[#000]": "text-[#000]",
};
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
  textColor?: keyof typeof color | string;
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
  textColor = "text-[#000]",
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
              `flex flex-col font-medium leading-loose ${color[textColor as keyof typeof color] || textColor}`,
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
