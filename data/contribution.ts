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
    name: "Elly Halsamer",
    position: "Media Communication",
  },
  {
    id: 2,
    name: "Fikri Abdan",
    position: "Head of Manager",
  },
  {
    id: 3,
    name: "Arif Rakhman Hakim",
    position: "Technical Director",
  },
  {
    id: 4,
    name: "Firmansyah Eric",
    position: "Graphic Designer",
  },
  {
    id: 5,
    name: "Dimas Ramadhan",
    position: "Head of Post-Production",
  },
  {
    id: 6,
    name: "Auriga Favian Vereno",
    position: "Head of Animation",
  },
  {
    id: 7,
    name: "Ostin Octafianus",
    position: "Illustrator",
  },
  {
    id: 8,
    name: "David G Halsamer",
    position: "Digital Analyst",
  },
];

export const Family: ContributionProps[] = [
  {
    id: 1,
    name: "Wathin Ciptawan",
    position: "Business Consultant",
  },
  {
    id: 2,
    name: "Anis Ilahi Wahdati",
    position: "Business Development",
  },
  {
    id: 3,
    name: "Biwara Sakti Pracihara",
    position: "Creative Program Analyst",
  },
  {
    id: 4,
    name: "Francisca Diwati",
    position: "Public Relation",
  },
  {
    id: 5,
    name: "Andi Hardjani",
    position: "Head of Visual Development",
  },
  {
    id: 6,
    name: "Ghazariz",
    position: "Game Development",
  },
  {
    id: 7,
    name: "Fahmi Arif",
    position: "IT Development",
  },
  {
    id: 8,
    name: "Joy Jordan",
    position: "Audio Production",
  },
  {
    id: 9,
    name: "Evan Tanazal",
    position: "Motion Designer",
  },
];
