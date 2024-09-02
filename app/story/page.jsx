import React from "react";
import { cn } from "../../lib/utils";
import { luckiest_guy } from "../fonts";

const StoryPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#d2def4] min-h-screen">
      <div className="flex flex-col w-full container gap-6 my-20 flex-grow">
        <h2
          className={cn(
            luckiest_guy.className,
            "text-5xl text-start bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center",
            "drop-shadow-[0px_5px_0px_rgba(114,4,165,1)]"
          )}>
          Story
        </h2>
        <div className="gap-8 flex flex-col flex-grow">
           <p>
            Berawal dari kisah <b>Kakek Djoyo</b> yang merupakan seorang pangeran sah penerus tahta ayahnya, seorang raja di tanah Jawa. Sejak kecil, Pangeran Djoyo sudah kehilangan ibunya, seorang permaisuri yang meninggal karena sakit. Keberadaannya sebagai pewaris sah menjadi ancaman bagi saudara-saudaranya yang berlomba merebut tahta dengan penuh intrik dan tipu muslihat yang jahat.
           </p>
           <p>
            Dengan hati yang berat, Pangeran Djoyo memutuskan untuk meninggalkan istana dan memulai perjalanan panjang untuk mencari ilmu dan kedamaian.
           </p>
           <p>
            Suatu malam, dalam perjalanannya melewati hutan yang lebat, Pangeran Djoyo tersesat dan ia mendengar sayup-sayup suara yang memanggil namanya, "Djoyo... Djoyo... Djoyo..." karena penasaran, Pangeran Djoyo mengikutinya hingga tiba di depan sebuah gua.
           </p>
           <p>
            Hujan mulai turun, lalu Djoyo memutuskan untuk berteduh di dalam gua tersebut, karena gelap dan licin, Djoyo tak sengaja tergelincir dan jatuh ke dalam lubang yang sangat dalam.
           </p>
           <p>
            Saat jatuh ribuan meter, Pangeran Djoyo kehilangan kesadaran, ia merasa ada sesuatu yang menjaganya dan melindungi tubuhnya hingga akhirnya tiba di dunia yang asing, dunia purba yang penuh misteri dengan pohon-pohon yang menjulang tinggi ke langit. Di sana terdapat kolam dengan sumber air berwarna hijau, serta sistem cuaca yang berbeda dari yang diketahuinya.
           </p>
           <p>
            Pangeran Djoyo mulai merasa lapar dan berusaha mencari makanan. Di tengah pencariannya, ia menemukan sebuah gua tersembunyi di antara hutan pohon lemon. Ia memutuskan untuk beristirahat di sana, sambil menikmati buah lemon segar yang menyelamatkannya dari rasa lapar dan dahaga di tengah hutan purba.
           </p>
           <p>
            Demi tahun berlalu, Pangeran Djoyo terlihat semakin tua dan mulai tinggal di tengah hutan purba. Ia mengisi waktu dengan bercocok tanam dan menjaga hutan lemon dari serangan kera dan kelelawar yang sering muncul di malam hari.
           </p>
           <p>
            Untuk mengobati rasa rindu pada keluarga dan sahabat-sahabatnya, Kakek Djoyo mulai membuat topeng-topeng dari bahan yang ada di sekitarnya. Kecintaannya dengan Nusantara membuat gua yang ia tinggali dihiasi ribuan topeng wajah dari kesukuan yang berbeda-beda.
           </p>
           <p>
            Pada suatu malam, Kakek Djoyo tertidur lelap dan bermimpi. di dalam mimpinya ia melihat 6 topengnya hidup dan menjelma menjadi karakter anak-anak dengan tubuh buah lemon yang ia sebut <b>MINILEMON</b>.
           </p>
           <p>
            Kakek Djoyo senang dan tertawa melihat anak-anak Minilemon. Walau wajahnya berasal dari suku yang berbeda, Minilemon bermain Bersama dengan penuh semangat, saling menghormati dan bergotong royong.
           </p>
           <p>
            Kerinduannya menyebarkan nilai-nilai kebaikan dan keragaman budaya terpancar dari pribadi <b>Wayan (Bali), Togar (Batak), Ucup (Sunda), Slamet (Jawa), Memey (Tionghoa) dan Minggus (Papua)</b>, mereka adalah 6 sahabat sepermainan yang siap menjadi idola baru untuk anak-anak Indonesia.
           </p>
       </div>
      </div>
    </div>
  );
};

export default StoryPage;
