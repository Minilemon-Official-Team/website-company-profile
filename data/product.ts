import MinilemonExplorerToJogja from "@/public/product/minilemon-explorer-to-jogja.jpg";
import CoverSaveTheEarth from "@/public/product/minilemon-save-the-earth.jpg";
import CoverPanggungBonekaMinilemon from "@/public/product/panggung-boneka-minilemon.png";
import CoverPetualanganMinilemon from "@/public/product/petualangan-minilemon.jpg";
import CoverPostParenting from "@/public/product/poster-parenting.png";
import { StaticImageData } from "next/image";

interface ProductData {
  id: number;
  cover: string | StaticImageData;
  titleCover: string;
}

export const productData: ProductData[] = [
  {
    id: 1,
    cover: MinilemonExplorerToJogja,
    titleCover: "Minilemon Explorer to Jogja",
  },
  {
    id: 2,
    cover: CoverSaveTheEarth,
    titleCover: "Minilemon Save The Earth",
  },
  {
    id: 3,
    cover: CoverPanggungBonekaMinilemon,
    titleCover: "Panggung Boneka Minilemon",
  },
  {
    id: 4,
    cover: CoverPetualanganMinilemon,
    titleCover: "Petualangan Minilemon",
  },
  {
    id: 5,
    cover: CoverPostParenting,
    titleCover: "Poster Parenting",
  },
];
