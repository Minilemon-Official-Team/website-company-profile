import { StaticImageData } from "next/image";

import Abdan from "@/public/contributors/Abdan.jpg";
import Elly from "@/public/contributors/Elly.jpg";
import Arif from "@/public/contributors/Arif.jpg";
import Erik from "@/public/contributors/Erik.jpg";
import Dimas from "@/public/contributors/Dimas.jpg";
import Ostin from "@/public/contributors/Ostin.jpg";
import David from "@/public/contributors/David.jpg";
import Auriga from "@/public/contributors/Auriga.jpg"

import Anis from "@/public/contributors/Anis.jpg"
import Biwara from "@/public/contributors/Biwara.jpg"
import Fahmi from "@/public/contributors/Fahmi.jpg"
import Watin from "@/public/contributors/Watin.jpg";
import Ghaza from "@/public/contributors/Ghaza.jpg";
import Joy from "@/public/contributors/Joy.jpg";
import Evan from "@/public/contributors/Evan.jpg";
import Andepp from "@/public/contributors/Andepp.jpg";
import Siska from "@/public/contributors/Siska.jpg";


interface ContributionProps {
  id: number;
  photo?: StaticImageData;
  name: string;
  position: string;
}

export const Hero: ContributionProps[] = [
  {
    id: 1,
    name: "Elly Halsamer",
    position: "Media Communication",
    photo: Elly,
  },
  {
    id: 2,
    name: "Fikri Abdan",
    position: "Head of Manager",
    photo: Abdan,
  },
  {
    id: 3,
    name: "Arif Rakhman Hakim",
    position: "Technical Director",
    photo: Arif,
  },
  {
    id: 4,
    name: "Firmansyah Eric",
    position: "Graphic Designer",
    photo: Erik,
  },
  {
    id: 5,
    name: "Dimas Ramadhan",
    position: "Head of Post-Production",
    photo: Dimas,
  },
  {
    id: 6,
    name: "Auriga Favian Vereno",
    position: "Head of Animation",
    photo: Auriga,
  },
  {
    id: 7,
    name: "Ostin Octafianus",
    position: "Illustrator",
    photo: Ostin,
  },
  {
    id: 8,
    name: "David G Halsamer",
    position: "Digital Analyst",
    photo: David,
  },
];

export const Family: ContributionProps[] = [
  {
    id: 1,
    name: "Wathin Ciptawan",
    position: "Business Management",
    photo: Watin,
  },
  {
    id: 2,
    name: "Anis Ilahi Wahdati",
    position: "Business Development",
    photo: Anis,
  },
  {
    id: 3,
    name: "Biwara Sakti Pracihara",
    position: "Creative Program Analyst",
    photo: Biwara,
  },
  {
    id: 4,
    name: "Francisca Diwati",
    position: "Public Relation",
    photo: Siska,
  },
  {
    id: 5,
    name: "Andi Hardjani",
    position: "Head of Visual Development",
    photo: Andepp,
  },
  {
    id: 6,
    name: "Ghazariz",
    position: "Game Development",
    photo: Ghaza,
  },
  {
    id: 7,
    name: "Fahmi Arif",
    position: "IT Development",
    photo: Fahmi,
  },
  {
    id: 8,
    name: "Joy Jordan",
    position: "Audio Production",
    photo: Joy,
  },
  {
    id: 9,
    name: "Evan Tanazal",
    position: "Motion Designer",
    photo: Evan,
  },
];
