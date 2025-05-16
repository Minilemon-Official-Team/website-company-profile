import Image from "next/image";
import { Placeholder } from "placeholder";

import { Studio, Agency, Academy, Technology } from "@/data/contribution";
import BackgroundImage from "@/public/background/company.png";
// import CoFounderTitle from "@/public/title/co-founder.png";
// import HeroTitle from "@/public/title/our-hero.png";
// import FamilyTitle from "@/public/title/our-family.png";
// import PTMinilemonNusantaraTitle from "@/public/title/pt-minilemon-nusantara.png";
import PlanetAgencyTitle from "@/public/title/planet-agency.png";
import PlanetStudioTitle from "@/public/title/planet-studio.png";
import PlanetAcademyTitle from "@/public/title/planet-academy.png";
import PlanetTechnology from "@/public/title/planet-technology.png";
import MinilemonUniverse from "@/public/title/minilemon-universe.png";
import MisiTitle from "@/public/title/misi.png";
import FounderTitle from "@/public/title/the-founder.png";
import VisiTitle from "@/public/title/visi.png";

import Heri from "@/public/contributors/Heri.jpg";
import Reno from "@/public/contributors/Reno.jpg";
import Wathin from "@/public/contributors/Watin.jpg";
import Banner from "@/components/ui/banner/banner";
import BannerWrapper from "@/components/ui/banner/banner-wrapper";

const CompanyPage = () => {
  return (
    <div className="flex flex-col">
      <BannerWrapper
        backgroundImage={BackgroundImage}
        backgroundAlt="Background"
        bgColor="bg-[#1b1b1b]"
      >
        <Banner
          productTitle={MinilemonUniverse}
          productTitleAlt="PT Minilemon Nusantara"
          className="gap-6 py-14"
        >
          <div className="z-20 flex flex-col gap-y-6 leading-loose tracking-[0.07em] text-[#c5cce0]">
            <p>
              Minilemon Universe merupakan cakrawala sejati yang berorientasi pada
              Pendidikan Karakter Anak dan nilai - nilai kebaikan melalui berbagai
              Program Pendidikan berbasis seni, hiburan dan teknologi.
            </p>
            <p>
              Di dalam Minilemon Universe terdapat Planet Agency, Planet Sudio,
              Planet Academy dan Planet Software,  yang terus melakukan pendekatan
              terhadap Pendidikan, mulai dari film animasi, game, panggung boneka,
              podcast parenting dan berbagai macam program lainnya yang membawa
              karakter positif bagi anak-anak.
            </p>
          </div>
        </Banner>
      </BannerWrapper>

      {/* Visi dan Misi */}
      <div className="bg-[#1b1b1b] py-14">
        <div className="container flex flex-col gap-y-10">
          <div className="flex w-full justify-center">
            <Image src={VisiTitle} alt="Visi dan Misi" />
          </div>
          <p className="leading-[1.8] tracking-[0.04em] text-[#d1d9e6]">
            Sebagai anak bangsa yang baik dan cinta tanah air, PT Minilemon
            Nusantara mengambil tanggung jawab untuk berkontribusi memberikan
            edukasi dan harapan untuk kemajuan bangsa.
            <br />
            Dengan menciptakan &quot;Good character&quot; PT Minilemon Nusantara
            diharapkan dapat berperan kreatif untuk mempersiapkan generasi muda
            dan anak-anak Indonesia yang tangguh, cinta tanah air, dengan
            membawa nilai - nilai kebaikan dan budaya yang merupakan warisan
            yang selalu kita banggakan.
          </p>
          <div className="flex w-full justify-center">
            <Image src={MisiTitle} alt="Misi" />
          </div>
          <ol className="ml-6 list-decimal leading-[1.8] tracking-[0.02em] text-[#c5cce0]/90">
            <li className="text-[#c5cce0]/90">
              Menciptakan produk kreatif dan edukatif yang bekelanjutan
            </li>
            <li className="text-[#c5cce0]/90">
              Membangun ekosistem yang mandiri, kreatif dan punya daya saing
              kuat di kancah internsional
            </li>
            <li className="text-[#c5cce0]/90">
              Membangun sistem integrasi dengan teknlogi yang friendly,
              transparan, terukur dengan jangkauan yang luas
            </li>
          </ol>
        </div>
      </div>

      {/* Founder */}
      <div className="flex flex-row bg-[#a4bddc] py-14">
        <div className="container flex flex-col gap-4 px-8 lg:px-0">
          <div className="flex w-full justify-center mb-14">
            <Image src={FounderTitle} alt="The Founder" />
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 justify-center">
            <div className="flex flex-col justify-center gap-4 items-center">
              <Image src={Reno} alt="Reno Halsamer" width={295} height={400} />
              <div className="flex flex-col items-center">
                <span className="text-center text-base font-semibold text-black/60">Reno Halsamer</span>
                {/* <span className="font-bold">Founder</span> */}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center">
              <Image src={Heri} alt="Heriyadi Natawijaya" width={295} height={400} />
              <div className="flex flex-col items-center">
                <span className="text-center text-base font-semibold text-black/60">Heriyadi Natawijaya</span>
                {/* <span className="font-bold">Co Founder, CEO</span> */}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center">
              <Image src={Wathin} alt="Wathin Ciptawan" width={295} height={400} />
              <div className="flex flex-col items-center">
                <span className="text-center text-base font-semibold text-black/60">Wathin Ciptawan</span>
                {/* <span className="font-bold">Special Partner</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Planet Agency Desktop View */}
      <div className="flex flex-col gap-y-12 bg-[#d3def4] py-14">
        <div className="container flex items-center justify-center">
          <Image src={PlanetAgencyTitle} alt="Planet Agency" />
        </div>
        <div className="container">
          <div className="grid grid-cols-4 gap-x-8 gap-y-16 pb-12">
            {Agency.map((data) => (
              <div
                className="flex flex-col items-center justify-center text-black"
                key={data.id}
              >
                <div className="pb-3">
                  {data.photo ? (
                    <Image
                      src={data.photo}
                      alt={data.name}
                      width={150}
                      height={200}
                    />
                  ) : (
                    <Placeholder
                      height={200}
                      width={150}
                      background="#fff"
                      color="#333"
                    />
                  )}
                </div>
                <p className="text-base font-semibold capitalize text-black/60">
                  {data.name}
                </p>
                <p className="text-sm font-bold uppercase text-black/80">
                  {/* {data.position} */}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Planet Studio Desktop View */}
      <div className="flex flex-col gap-y-12 bg-[#1b1b1b] py-14">
        <div className="container flex items-center justify-center">
          <Image src={PlanetStudioTitle} alt="Planet Studio" />
        </div>
        <div className="container">
          <div className="grid grid-cols-4 gap-x-8 gap-y-16 pb-12">
            {Studio.map((data) => (
              <div
                className="flex flex-col items-center justify-center text-white"
                key={data.id}
              >
                <div className="pb-3">
                  {data.photo ? (
                    <Image
                      src={data.photo}
                      alt={data.name}
                      width={150}
                      height={200}
                    />
                  ) : (
                    <Placeholder
                      height={200}
                      width={150}
                      background="#fff"
                      color="#333"
                    />
                  )}
                </div>
                <p className="text-base font-semibold capitalize text-white/60">
                  {data.name}
                </p>
                <p className="text-sm font-bold uppercase text-white/80">
                  {/* {data.position} */}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Planet Academy Desktop View */}
      <div className="flex flex-col gap-y-12 bg-[#fff4ec] py-14">
        <div className="container flex items-center justify-center">
          <Image src={PlanetAcademyTitle} alt="Planet Academy" />
        </div>
        <div className="container">
          <div className="grid grid-cols-4 gap-x-8 gap-y-16 pb-12">
            {Academy.map((data) => (
              <div
                className="flex flex-col items-center justify-center text-white"
                key={data.id}
              >
                <div className="pb-3">
                  {data.photo ? (
                    <Image
                      src={data.photo}
                      alt={data.name}
                      width={150}
                      height={200}
                    />
                  ) : (
                    <Placeholder
                      height={200}
                      width={150}
                      background="#fff"
                      color="#333"
                    />
                  )}
                </div>
                <p className="text-base font-semibold capitalize text-black/60">
                  {data.name}
                </p>
                <p className="text-sm font-bold uppercase text-black/80">
                  {/* {data.position} */}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Planet Technology Desktop View */}
      <div className="flex flex-col gap-y-12 bg-[#1b1b1b] py-14">
        <div className="container flex items-center justify-center">
          <Image src={PlanetTechnology} alt="Planet Technology" />
        </div>
        <div className="container">
          <div className="grid grid-cols-4 gap-x-8 gap-y-16 pb-12">
            {Technology.map((data) => (
              <div
                className="flex flex-col items-center justify-center text-white"
                key={data.id}
              >
                <div className="pb-3">
                  {data.photo ? (
                    <Image
                      src={data.photo}
                      alt={data.name}
                      width={150}
                      height={200}
                    />
                  ) : (
                    <Placeholder
                      height={200}
                      width={150}
                      background="#fff"
                      color="#333"
                    />
                  )}
                </div>
                <p className="text-base font-semibold capitalize text-white/60">
                  {data.name}
                </p>
                <p className="text-sm font-bold uppercase text-white/80">
                  {/* {data.position} */}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
