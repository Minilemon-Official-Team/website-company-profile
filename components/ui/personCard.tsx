import Image, { StaticImageData } from "next/image";
import { Placeholder } from "placeholder";

interface PersonCardProps {
  photo?: string | StaticImageData;
  name: string;
  position: string;
  colorPrimary: string;
  colorName: string;
  colorPosition: string;
}

export default function PersonCard({
  photo,
  name,
  position,
  colorPrimary,
  colorName,
  colorPosition,
}: PersonCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${colorPrimary}`}
    >
      <div className="pb-3">
        {photo ? (
          <Image src={photo} alt={name} width={150} height={200} />
        ) : (
          <Placeholder
            height={200}
            width={150}
            background="#fff"
            color="#333"
          />
        )}
      </div>
      <p className={`text-base font-semibold capitalize ${colorName}`}>
        {name}
      </p>
      <p className={`text-sm font-bold uppercase ${colorPosition}`}>
        {position}
      </p>
    </div>
  );
}
