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
import Naufal from "@/public/contributors/Naufal.jpg";
import Novansyah from "@/public/contributors/Novansyah.jpg";
import SDimas from "@/public/contributors/S_Dimas.jpg";
import Anand from "@/public/contributors/Anand.jpg";
import Hakim from "@/public/contributors/Gus_Hakim.jpg";
import Noto from "@/public/contributors/Noto.jpg";
import Rian from "@/public/contributors/Rian.jpg";
import Kurnia from "@/public/contributors/Kurnia.jpg";
import Reinaldy from "@/public/contributors/Reinaldy.jpg";
import Gilbert from "@/public/contributors/Gilbert.jpg";
import Gersom from "@/public/contributors/Gersom.jpg";
import Febri from "@/public/contributors/Febri.jpg";
import Fiola from "@/public/contributors/Fiola.jpg";

import DummyMale from "@/public/contributors/dummy-male.jpg";
import DummyFemale from "@/public/contributors/dummy-female.jpg";


interface ContributionProps {
  id: number;
  photo?: StaticImageData;
  name: string;
  position: string;
}

export const Agency: ContributionProps[] = [
  {
    id: 1,
    name: "Stefanus Dimas",
    position: "Title",
    photo: SDimas,
  },
  {
    id: 2,
    name: "Rian Ekky Pradipta",
    position: "Title",
    photo: Rian,
  },
  {
    id: 3,
    name: "Yourdan Anand",
    position: "Title",
    photo: Anand,
  },
  {
    id: 4,
    name: "Ahmad Hakim Jayli",
    position: "Title",
    photo: Hakim,
  },
  {
    id: 5,
    name: "Elly Halsamer",
    position: "MEDIA COMMUNICATION",
    photo: Elly,
  },
  {
    id: 6,
    name: "Fiola Virginia Gunawi",
    position: "Title",
    photo: Fiola,
  },
  {
    id: 7,
    name: "Sri Kurnia Dewi",
    position: "Title",
    photo: Kurnia,
  },
  {
    id: 8,
    name: "Suthan Reinaldy",
    position: "Title",
    photo: Reinaldy,
  },
  {
    id: 9,
    name: "Novansyah",
    position: "Title",
    photo: Novansyah,
  },
  {
    id: 10,
    name: "Muhammad Ghazariz",
    position: "Title",
    photo: Ghaza,
  },
];

export const Studio: ContributionProps[] = [
  {
    id: 1,
    name: "Arif Rakhman H",
    position: "TECHNICAL DIRECTOR",
    photo: Arif,
  },
  {
    id: 2,
    name: "Fikri Abdan",
    position: "Head of Manager",
    photo: Abdan,
  },
  {
    id: 3,
    name: "Andi Hardjani",
    position: "Head of Visual Development",
    photo: Andepp,
  },
  {
    id: 4,
    name: "Ignatius Mubiarnoto N",
    position: "Title",
    photo: Noto,
  },
  {
    id: 5,
    name: "Dimas Ramadhan",
    position: "Head of Post-Production",
    photo: Dimas,
  },
  {
    id: 6,
    name: "Auriga F Vereno",
    position: "Head of Animation",
    photo: Auriga,
  },
  {
    id: 7,
    name: "Febrian Dhuhal",
    position: "Title",
    photo: Febri,
  },
  {
    id: 8,
    name: "Gersom Halsamer",
    position: "Title",
    photo: Gersom,
  },
  {
    id: 9,
    name: "Abraham Gilbert Halsamer",
    position: "Title",
    photo: Gilbert,
  },
  {
    id: 10,
    name: "Naufal Selnis M",
    position: "Title",
    photo: Naufal,
  }
];

export const Academy: ContributionProps[] = [
  {
    id: 1,
    name: "Biwara S Pracihara",
    position: "Creative Program Analyst",
    photo: Biwara,
  },
  {
    id: 2,
    name: "Fransisca Diwati",
    position: "Public Relation",
    photo: Siska,
  },
  {
    id: 3,
    name: "Anis Ilahi Wahdati",
    position: "Business Development",
    photo: Anis,
  },
  {
    id: 4,
    name: "Arif Rakhman H",
    position: "TECHNICAL DIRECTOR",
    photo: Arif,
  },
];

export const Technology: ContributionProps[] = [
  {
    id: 1,
    name: "Muhammad Ghazariz",
    position: "Game Development",
    photo: Ghaza,
  },
  {
    id: 2,
    name: "David G Halsamer",
    position: "Digital Analyst",
    photo: David,
  },
  {
    id: 3,
    name: "Fahmi Arif",
    position: "IT Development",
    photo: Fahmi,
  },
  {
    id: 4,
    name: "Fiola Virginia Gunawi",
    position: "Title",
    photo: Fiola,
  },
];

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
