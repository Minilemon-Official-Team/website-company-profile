import Image, { StaticImageData } from "next/image";

interface ImageProductProps {
  CoverProduct: string | StaticImageData;
  CoverAlt: string;
}

export default function ImageProduct({
  CoverProduct,
CoverAlt,
}: ImageProductProps) {
  return (
    <div className="relative h-[492px] w-[350px]">
      <Image
        src={CoverProduct}
        alt={CoverAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
