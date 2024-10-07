import Title from "@/public/title-picture/character-title.png";
import { StaticImageData } from "next/image";

interface ContributionProps {
  id: number;
  photo?: StaticImageData;
  name: string;
  position: string;
}

export const Hero: ContributionProps[] = [
  {
    id: 1,
    photo: Title,
    name: "Elly Halsamer",
    position: "Media Communication",
  },
  {
    id: 2,
    photo: Title,
    name: "Fikri Abdan",
    position: "Head of Manager",
  },
  {
    id: 3,
    photo: Title,
    name: "Arif Rakhman Hakim",
    position: "Technical Director",
  },
  {
    id: 4,
    photo: Title,
    name: "Firmansyah Eric",
    position: "Graphic Designer",
  },
  {
    id: 5,
    photo: Title,
    name: "Dimas Ramadhan",
    position: "Head of Post-Production",
  },
  {
    id: 6,
    photo: Title,
    name: "Auriga Favian Vereno",
    position: "Head of Animation",
  },
  {
    id: 7,
    photo: Title,
    name: "Ostin Octafianus",
    position: "Illustrator",
  },
  {
    id: 8,
    photo: Title,
    name: "David G Halsamer",
    position: "Digital Analyst",
  },
];

export const Family: ContributionProps[] = [
  {
    id: 1,
    photo: Title,
    name: "Anis Ilahi Wahdati",
    position: "Business Development",
  },
  {
    id: 2,
    photo: Title,
    name: "Biwara Sakti Pracihara",
    position: "Creative Program Analyst",
  },
  {
    id: 3,
    photo: Title,
    name: "Francisca Diwati",
    position: "Public Relation",
  },
  {
    id: 4,
    photo: Title,
    name: "Andi Hardjani",
    position: "Head of Visual Development",
  },
  {
    id: 5,
    photo: Title,
    name: "Ghazariz",
    position: "Game Development",
  },
  {
    id: 6,
    photo: Title,
    name: "Fahmi Arif",
    position: "IT Development",
  },
  {
    id: 7,
    photo: Title,
    name: "Joy Jordan",
    position: "Audio Production",
  },
  {
    id: 8,
    photo: Title,
    name: "Evan Tanazal",
    position: "Motion Designer",
  },
];
