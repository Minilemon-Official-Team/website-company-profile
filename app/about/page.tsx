import BackgroundImage from "@/public/background/about-new.png";
import IdeaTitle from "@/public/title/idea.png";
import BannerWrapper from "@/components/ui/banner/banner-wrapper";
import Banner from "@/components/ui/banner/banner";
import { infoData } from "@/data/info";
import InfoSection from "@/components/info-section";

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      <BannerWrapper
        bgColor="bg-[#d6ddf4]"
        backgroundImage={BackgroundImage}
        backgroundAlt="Background"
        className="py-14"
      >
        <Banner
          productTitle={IdeaTitle}
          productTitleAlt="Our Product"
          className="justify-center gap-y-4 pb-5"
        >
          <div className="z-20 flex flex-col gap-y-6 leading-loose tracking-widest text-[#c5cce2]">
            <p>
              Berawal dari cinta dan bangga akan warisan budaya khusunya topeng,
              yang merupakan penutup wajah dari setiap Suku di Indonesia.
            </p>
            <p>
              <b>Reno Halsamer (Founder dTopeng Kingdom Foundation)</b> melalui
              perjalanan panjang telah menciptakan tokoh animasi (fiksi) dengan
              memadukan topeng sebagai wajah Indonesia dan tubuh lemon yang
              merupakan buah dengan banyak manfaat bagi kesehatan
            </p>
            <p>
              Bernama <b>Minilemon</b> dengan harapan dapat memberi manfaat
              positif bagi anak-anak indonesia dalam belaja Sejarah, Budaya,
              hormat kepada orangtua, gotong royong, menghargai perbedaan, cinta
              Bangsa dan Negara, serta ikut serta dalam penyelamatan Lingkungan
              hidup di dunia.
            </p>
          </div>
        </Banner>
      </BannerWrapper>

      {infoData.map((info) => {
        return <InfoSection key={info.id} {...info} />;
      })}
    </div>
  );
};

export default AboutPage;
