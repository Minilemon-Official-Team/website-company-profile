import { Poppins, Luckiest_Guy } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "600", "800"],
});

export const luckiest_guy = Luckiest_Guy({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});
