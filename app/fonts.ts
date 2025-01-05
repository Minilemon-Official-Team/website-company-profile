import { Poppins, Luckiest_Guy } from "next/font/google";
import localFont from "next/font/local";

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

export const berlin_sans_fb = localFont({
  src: "./BRLNSR.ttf",
  display: "swap",
  weight: "400",
});
