import Image, { StaticImageData } from "next/image";

interface FounderProps {
  children: React.ReactNode;
  titleImage: string | StaticImageData;
  titleAlt: string;
  photo: string | StaticImageData;
  photoAlt: string;
  bgColor: string;
}

export default function Founder({
  children,
  titleImage,
  photo,
  titleAlt,
  photoAlt,
  bgColor,
}: FounderProps) {
  return (
    <div className={`flex flex-row ${bgColor} py-14`}>
      <div className="container flex flex-col gap-6 px-8 lg:px-0">
        <div className="flex w-full justify-center lg:justify-start">
          <Image src={titleImage} alt={titleAlt} />
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex basis-5/12 items-center justify-center lg:justify-start">
            <Image src={photo} alt={photoAlt} width={350} height={495} />
            {/* <Placeholder
            height={495}
            width={350}
            background="#333"
            color="#fff"
          /> */}
          </div>
          <div className="flex basis-7/12 flex-col gap-y-6 text-[0.93rem] leading-loose tracking-wide text-[#1b1b1d]/70">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
